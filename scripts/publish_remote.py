import sys
import os
import json
import hashlib
import time

sys.path.append('C:/GitHub/plesk-harness-tujuhcahaya')
from harness.ssh_client import PleskSSHClient

def generate_id():
    import random
    chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    prefix = "01" + "".join(random.choice(chars) for _ in range(24))
    return prefix

def generate_slug(title):
    import re
    base = title.lower().strip()
    base = re.sub(r'[^a-z0-9\s-]', '', base)
    base = re.sub(r'\s+', '-', base)
    base = re.sub(r'-+', '-', base)
    return base[:70].strip('-')

def parse_inline_spans(text):
    import re
    link_regex = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')
    spans = []
    mark_defs = []
    last_index = 0
    link_idx = 0

    for m in link_regex.finditer(text):
        start, end = m.span()
        if start > last_index:
            spans.append({
                "_type": "span",
                "_key": f"spn-{len(spans)}-{hashlib.md5(str(time.time()).encode()).hexdigest()[:6]}",
                "text": text[last_index:start]
            })
        mark_key = f"lnk-{link_idx}"
        link_idx += 1
        mark_defs.append({
            "_key": mark_key,
            "_type": "link",
            "href": m.group(2)
        })
        spans.append({
            "_type": "span",
            "_key": f"spn-{len(spans)}-{hashlib.md5(str(time.time()).encode()).hexdigest()[:6]}",
            "text": m.group(1),
            "marks": [mark_key]
        })
        last_index = end

    if last_index < len(text):
        spans.append({
            "_type": "span",
            "_key": f"spn-{len(spans)}-{hashlib.md5(str(time.time()).encode()).hexdigest()[:6]}",
            "text": text[last_index:]
        })

    if not spans:
        spans.append({
            "_type": "span",
            "_key": "spn-0",
            "text": text
        })

    return spans, mark_defs

def prose_to_portable_text(body_text):
    paragraphs = [p.strip() for p in body_text.split('\n\n') if p.strip()]
    blocks = []
    import uuid
    for i, p in enumerate(paragraphs):
        k = f"blk-{i}-{uuid.uuid4().hex[:8]}"
        style = "normal"
        raw_text = p

        if p.startswith("### "):
            style = "h3"
            raw_text = p[4:]
        elif p.startswith("## "):
            style = "h2"
            raw_text = p[3:]

        spans, mark_defs = parse_inline_spans(raw_text)
        blocks.append({
            "_type": "block",
            "_key": k,
            "style": style,
            "markDefs": mark_defs,
            "children": spans
        })
    return blocks

def publish_payload_to_remote(payload):
    title = payload.get('title')
    category_slug = payload.get('category', 'game').lower()
    content = payload.get('content')
    excerpt = payload.get('excerpt', '')
    cat_byline_defaults = {
        'game': '0100MUNS3DJL68FA69B26FACE9',
        'tech': '0100MUNS3DJPCA4539BDBEB12A',
        'musik': '0100MUNS3DJOA35D985DFFDBA0',
        'kesehatan': '0100MUNS3DJQ06A12A6DABF37A',
        'budaya': '0100MUNS3DJSD97205CCB31353',
        'berita': '0100MUNS3DJT76BFD04713B98E',
    }
    byline_slug_to_id = {
        'h20ray': '0100MUNS3DJL68FA69B26FACE9',
        'elangelano': '0100MUNS3DJPCA4539BDBEB12A',
        'margarethanina': '0100MUNS3DJOA35D985DFFDBA0',
        'rachelpatricia': '0100MUNS3DJQ06A12A6DABF37A',
        'sarahdilla': '0100MUNS3DJSD97205CCB31353',
        'wodemahendra': '0100MUNS3DJT76BFD04713B98E',
    }
    raw_byline = payload.get('byline') or payload.get('authorSlug') or cat_byline_defaults.get(category_slug, '0100MUNS3DJT76BFD04713B98E')
    byline_id = byline_slug_to_id.get(raw_byline, raw_byline)
    status = payload.get('status', 'published')
    feat_img_input = payload.get('featuredImage') or {}
    raw_image_url = payload.get('imageUrl') or feat_img_input.get('url') or feat_img_input.get('src') or ''
    image_alt = payload.get('imageAlt') or feat_img_input.get('alt') or title

    entry_id = payload.get('entryId') or generate_id()
    revision_id = "01REV" + generate_id()[5:]
    slug = payload.get('slug') or generate_slug(title)
    now = time.strftime('%Y-%m-%dT%H:%M:%S.000Z', time.gmtime())

    portable_text = payload.get('portableTextContent') or prose_to_portable_text(content)

    cat_map = {
        'game': '0100MUM5DONZB130AD96E61946',
        'berita': '0100MUM5DOO0CA013DF13B3D7D',
        'tech': '0100MUM5DOO14D219BB3DAFB62',
        'musik': '0100MUM5DOO1A372692E1CCA8D',
        'kesehatan': '0100MUM5DOO248161BC6CF7512',
        'budaya': '0100MUM5DOO2A30D733E904C81',
    }
    tax_id = cat_map.get(category_slug, '0100MUM5DONZB130AD96E61946')

    client = PleskSSHClient()
    remote_data_tmp = f"/tmp/{slug}_data.json"
    remote_script_tmp = f"/tmp/{slug}_run.py"

    sftp = client.connect().open_sftp()
    with sftp.file(remote_data_tmp, 'w') as rf:
        rf.write(json.dumps({
            "entryId": entry_id,
            "revisionId": revision_id,
            "slug": slug,
            "title": title,
            "excerpt": excerpt,
            "byline": byline_id,
            "status": status,
            "now": now,
            "taxId": tax_id,
            "rawImageUrl": raw_image_url,
            "imageAlt": image_alt,
            "content": json.dumps(portable_text),
        }))

    server_template = """import json
import sqlite3
import urllib.request
import boto3
import os

with open('__REMOTE_DATA_TMP__', 'r') as f:
    p = json.load(f)

# 1. R2 Upload for real image if provided
ENDPOINT = 'https://3a81de3772c2c3e88ecf74ec261f552f.r2.cloudflarestorage.com'
BUCKET = 'xlocal'
KEY_ID = '76526b31875de9f2cb388dbddedd4322'
SECRET = '98aa77d6b5e3319c63b57954fcb26687f40ac8112e0ea2898d1fde3697d6b69d'

featured_image_obj = None
raw_url = p.get('rawImageUrl', '').strip()
slug = p['slug']
r2_key = f"tujuhcahaya/uploads/2026/11/{slug}.webp"
raw_tmp = f"/tmp/{slug}_raw"
webp_tmp = f"/tmp/{slug}.webp"

s3 = boto3.client('s3', endpoint_url=ENDPOINT, aws_access_key_id=KEY_ID, aws_secret_access_key=SECRET, region_name='auto')

# Try downloading and converting raw_url
if raw_url and raw_url.startswith('http'):
    try:
        req = urllib.request.Request(raw_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read()
            with open(raw_tmp, 'wb') as rf:
                rf.write(content)

        # Convert to WebP 1200x675 via Sharp Node
        os.system(f"cd /var/www/vhosts/tujuhcahaya.com/emdash && node -e \\"require('sharp')('{raw_tmp}').resize(1200, 675, {{fit: 'cover'}}).webp({{quality: 85}}).toFile('{webp_tmp}')\\"")
    except Exception as e:
        print(f"[R2 Warning] Could not fetch/convert {raw_url}: {e}")

# Fallback: if WebP not created or too small, generate MD3X branded card via Sharp
if not os.path.exists(webp_tmp) or os.path.getsize(webp_tmp) < 1000:
    try:
        title_esc = p['title'].replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')
        cat_upper = "__CATEGORY_SLUG__".upper()
        svg_code = f'''<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#090d16"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect x="80" y="80" width="1040" height="515" rx="24" fill="#ffffff" fill-opacity="0.04" stroke="#ffffff" stroke-opacity="0.08" stroke-width="2"/>
  <text x="120" y="150" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#f43f5e" letter-spacing="4">&#8226; TUJUHCAHAYA {cat_upper}</text>
  <foreignObject x="120" y="200" width="960" height="280">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: system-ui, sans-serif; font-size: 46px; font-weight: 800; color: #f8fafc; line-height: 1.25;">
      {title_esc}
    </div>
  </foreignObject>
  <text x="120" y="530" font-family="system-ui, sans-serif" font-size="20" font-weight="500" fill="#94a3b8">tujuhcahaya.com &#8226; Editorial Radar</text>
</svg>'''
        svg_tmp = f"/tmp/{slug}_card.svg"
        with open(svg_tmp, 'w', encoding='utf-8') as sf:
            sf.write(svg_code)
        os.system(f"cd /var/www/vhosts/tujuhcahaya.com/emdash && node -e \\"require('sharp')('{svg_tmp}').resize(1200, 675).webp({{quality: 90}}).toFile('{webp_tmp}')\\"")
        os.system(f"rm -f {svg_tmp}")
    except Exception as e:
        print(f"[Card Fallback Warning]: {e}")

# Upload WebP to Cloudflare R2
if os.path.exists(webp_tmp) and os.path.getsize(webp_tmp) > 1000:
    with open(webp_tmp, 'rb') as wf:
        webp_bytes = wf.read()
    s3.put_object(Bucket=BUCKET, Key=r2_key, Body=webp_bytes, ContentType='image/webp')
    final_url = f"https://media.xlocal.id/{r2_key}"
    featured_image_obj = {
        "id": p['revisionId'],
        "src": final_url,
        "url": final_url,
        "alt": p['imageAlt'],
        "previewUrl": final_url,
        "width": 1280,
        "height": 720
    }

os.system(f"rm -f {raw_tmp} {webp_tmp}")

feat_json = json.dumps(featured_image_obj) if featured_image_obj else None

rev_data = json.dumps({
    "title": p['title'],
    "slug": p['slug'],
    "excerpt": p['excerpt'],
    "content": json.loads(p['content']),
    "featured_image": featured_image_obj,
    "byline": p['byline'],
    "category": "__CATEGORY_SLUG__",
})

db = sqlite3.connect('/var/www/vhosts/tujuhcahaya.com/emdash/data.db')
cur = db.cursor()

# 2. Revision
cur.execute('''
    INSERT OR REPLACE INTO revisions (id, collection, entry_id, data, author_id, created_at)
    VALUES (?, 'posts', ?, ?, NULL, ?)
''', (p['revisionId'], p['entryId'], rev_data, p['now']))

# 3. ec_posts
cur.execute('''
    INSERT INTO ec_posts (
        id, slug, status, author_id, primary_byline_id, created_at, updated_at,
        published_at, scheduled_at, deleted_at, version, live_revision_id,
        draft_revision_id, locale, translation_group, title, featured_image,
        content, excerpt
    ) VALUES (
        ?, ?, ?, NULL, ?, ?, ?,
        ?, NULL, NULL, 1, ?,
        NULL, 'id', ?, ?, ?,
        ?, ?
    )
    ON CONFLICT(slug, locale) DO UPDATE SET
        title = excluded.title,
        content = excluded.content,
        excerpt = excluded.excerpt,
        featured_image = excluded.featured_image,
        primary_byline_id = excluded.primary_byline_id,
        status = excluded.status,
        live_revision_id = excluded.live_revision_id,
        updated_at = excluded.updated_at
''', (
    p['entryId'], p['slug'], p['status'], p['byline'], p['now'], p['now'],
    p['now'] if p['status'] == 'published' else None,
    p['revisionId'] if p['status'] == 'published' else None,
    p['entryId'], p['title'], feat_json, p['content'], p['excerpt']
))

# 4. Taxonomy link
cur.execute('''
    INSERT OR IGNORE INTO content_taxonomies (
        collection, entry_id, taxonomy_id, status, scheduled_at, deleted_at,
        locale, published_at, created_at
    ) VALUES (
        'posts', ?, ?, NULL, NULL, NULL, 'id', ?, ?
    )
''', (p['entryId'], p['taxId'], p['now'], p['now']))

# 5. Content byline link
byline_rel_id = "01" + p['revisionId'][2:]
cur.execute('''
    INSERT INTO _emdash_content_bylines (
        id, collection_slug, content_id, byline_id, sort_order, role_label, created_at
    ) VALUES (
        ?, 'posts', ?, ?, 0, NULL, ?
    )
    ON CONFLICT(collection_slug, content_id, byline_id) DO NOTHING;
''', (byline_rel_id, p['entryId'], p['byline'], p['now']))

db.commit()
db.close()

# Restart service to flush Astro SSR cache
os.system("systemctl restart tujuhcahaya-emdash.service")

print("APPLY_SUCCESS")
"""
    server_code = server_template.replace('__REMOTE_DATA_TMP__', remote_data_tmp).replace('__CATEGORY_SLUG__', category_slug)

    with sftp.file(remote_script_tmp, 'w') as sf:
        sf.write(server_code)
    sftp.close()

    code, out, err = client.run(f"python3 {remote_script_tmp}")
    client.run(f"rm -f {remote_data_tmp} {remote_script_tmp}")
    
    if "APPLY_SUCCESS" in out:
        return {
            "success": True,
            "slug": slug,
            "status": status,
            "url": f"https://www.tujuhcahaya.com/{slug}",
            "byline": byline_id,
            "entryId": entry_id
        }
    else:
        return {
            "success": False,
            "error": err or out
        }

def get_recent_posts(limit=10):
    client = PleskSSHClient()
    cmd = f'sqlite3 /var/www/vhosts/tujuhcahaya.com/emdash/data.db "SELECT title, slug, published_at FROM ec_posts WHERE status = \'published\' ORDER BY published_at DESC LIMIT {limit};"'
    code, out, err = client.run(cmd)
    posts = []
    for line in out.strip().splitlines():
        if '|' in line:
            parts = line.split('|')
            posts.append({
                "title": parts[0],
                "slug": parts[1] if len(parts) > 1 else '',
                "published_at": parts[2] if len(parts) > 2 else ''
            })
    return posts

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == '--recent':
        recent = get_recent_posts(10)
        print(json.dumps(recent, indent=2))
        sys.exit(0)

    src = "C:/Users/Andoru/.gemini/antigravity/brain/4ccbb658-96d5-4f94-96b2-5cf3441b00fd/scratch/curation-payload.json"
    if len(sys.argv) > 1:
        src = sys.argv[1]
    with open(src, 'r', encoding='utf-8') as f:
        payload = json.load(f)
    result = publish_payload_to_remote(payload)
    print(json.dumps(result, indent=2))
