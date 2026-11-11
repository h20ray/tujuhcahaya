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

def generate_slug(title, max_len=65):
    import re
    base = title.lower().strip()
    base = re.sub(r'[^a-z0-9\s-]', '', base)
    base = re.sub(r'\s+', '-', base)
    base = re.sub(r'-+', '-', base)
    if len(base) > max_len:
        last_hyphen = base.rfind('-', 0, max_len)
        if last_hyphen > 25:
            base = base[:last_hyphen]
        else:
            base = base[:max_len]
    return base.strip('-')

import re
import uuid

def parse_inline_markdown(text):
    """
    Parses inline markdown: [link](url), **bold**, *italic*, `code` into PortableText spans and markDefs
    """
    pattern = re.compile(
        r'(?P<link>\[(?P<link_text>[^\]]+)\]\((?P<link_url>[^)]+)\))|'
        r'(?P<bold>\*\*(?P<bold_text>[^*]+)\*\*)|'
        r'(?P<italic>(?<!\*)\*(?P<italic_text>[^*]+)\*(?!\*))|'
        r'(?P<code>`(?P<code_text>[^`]+)`)'
    )

    spans = []
    mark_defs = []
    last_idx = 0
    link_idx = 0

    for m in pattern.finditer(text):
        start, end = m.span()
        if start > last_idx:
            spans.append({
                "_type": "span",
                "_key": f"spn-{len(spans)}-{uuid.uuid4().hex[:6]}",
                "text": text[last_idx:start],
                "marks": []
            })

        if m.group("link"):
            link_url = m.group("link_url")
            link_text = m.group("link_text")
            mark_key = f"lnk-{link_idx}"
            link_idx += 1
            mark_defs.append({
                "_key": mark_key,
                "_type": "link",
                "href": link_url
            })
            
            sub_spans, _ = parse_inline_markdown(link_text)
            for s in sub_spans:
                s["marks"] = list(set(s.get("marks", []) + [mark_key]))
                spans.append(s)

        elif m.group("bold"):
            bold_text = m.group("bold_text")
            sub_spans, sub_defs = parse_inline_markdown(bold_text)
            for d in sub_defs:
                mark_defs.append(d)
            for s in sub_spans:
                s["marks"] = list(set(s.get("marks", []) + ["strong"]))
                spans.append(s)

        elif m.group("italic"):
            italic_text = m.group("italic_text")
            sub_spans, sub_defs = parse_inline_markdown(italic_text)
            for d in sub_defs:
                mark_defs.append(d)
            for s in sub_spans:
                s["marks"] = list(set(s.get("marks", []) + ["em"]))
                spans.append(s)

        elif m.group("code"):
            code_text = m.group("code_text")
            spans.append({
                "_type": "span",
                "_key": f"spn-{len(spans)}-{uuid.uuid4().hex[:6]}",
                "text": code_text,
                "marks": ["code"]
            })

        last_idx = end

    if last_idx < len(text):
        spans.append({
            "_type": "span",
            "_key": f"spn-{len(spans)}-{uuid.uuid4().hex[:6]}",
            "text": text[last_idx:],
            "marks": []
        })

    if not spans:
        spans.append({
            "_type": "span",
            "_key": f"spn-{len(spans)}-{uuid.uuid4().hex[:6]}",
            "text": text,
            "marks": []
        })

    return spans, mark_defs

def parse_inline_spans(text):
    return parse_inline_markdown(text)

def prose_to_portable_text(body_text):
    if not body_text:
        return []

    blocks = []
    sections = [s.strip() for s in re.split(r'\n\s*\n', body_text) if s.strip()]

    for i, sec in enumerate(sections):
        lines = [line.strip() for line in sec.split('\n') if line.strip()]

        for j, line in enumerate(lines):
            k = f"blk-{i}-{j}-{uuid.uuid4().hex[:6]}"

            if line.startswith("### "):
                raw = line[4:].strip()
                spans, mark_defs = parse_inline_markdown(raw)
                blocks.append({
                    "_type": "block",
                    "_key": k,
                    "style": "h3",
                    "markDefs": mark_defs,
                    "children": spans
                })
            elif line.startswith("## "):
                raw = line[3:].strip()
                spans, mark_defs = parse_inline_markdown(raw)
                blocks.append({
                    "_type": "block",
                    "_key": k,
                    "style": "h2",
                    "markDefs": mark_defs,
                    "children": spans
                })
            elif line.startswith("> "):
                raw = line[2:].strip()
                spans, mark_defs = parse_inline_markdown(raw)
                blocks.append({
                    "_type": "block",
                    "_key": k,
                    "style": "blockquote",
                    "markDefs": mark_defs,
                    "children": spans
                })
            elif re.match(r'^!\[([^\]]*)\]\(([^)]+)\)$', line):
                img_m = re.match(r'^!\[([^\]]*)\]\(([^)]+)\)$', line)
                alt = img_m.group(1)
                url = img_m.group(2)
                blocks.append({
                    "_type": "image",
                    "_key": f"img-{uuid.uuid4().hex[:8]}",
                    "asset": {
                        "_type": "reference",
                        "_ref": f"ast-{uuid.uuid4().hex[:8]}",
                        "url": url
                    },
                    "alt": alt,
                    "caption": alt,
                    "width": 1200,
                    "height": 675
                })
            elif re.match(r'^\d+\.\s+(.*)$', line):
                list_m = re.match(r'^\d+\.\s+(.*)$', line)
                raw = list_m.group(1)
                spans, mark_defs = parse_inline_markdown(raw)
                blocks.append({
                    "_type": "block",
                    "_key": k,
                    "style": "normal",
                    "listItem": "number",
                    "level": 1,
                    "markDefs": mark_defs,
                    "children": spans
                })
            elif re.match(r'^[-*]\s+(.*)$', line):
                list_m = re.match(r'^[-*]\s+(.*)$', line)
                raw = list_m.group(1)
                spans, mark_defs = parse_inline_markdown(raw)
                blocks.append({
                    "_type": "block",
                    "_key": k,
                    "style": "normal",
                    "listItem": "bullet",
                    "level": 1,
                    "markDefs": mark_defs,
                    "children": spans
                })
            else:
                spans, mark_defs = parse_inline_markdown(line)
                blocks.append({
                    "_type": "block",
                    "_key": k,
                    "style": "normal",
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

    def needs_portable_text_repair(pt):
        if not pt or not isinstance(pt, list):
            return True
        for b in pt:
            if isinstance(b, dict) and b.get('_type') == 'block':
                for c in b.get('children', []):
                    txt = c.get('text', '')
                    if '**' in txt or re.search(r'^\d+\.\s+', txt) or '\n' in txt:
                        return True
        return False

    portable_text = payload.get('portableTextContent')
    if not portable_text or (content and needs_portable_text_repair(portable_text)):
        if content:
            portable_text = prose_to_portable_text(content)

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
            "tags": payload.get('tags', []),
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

# 1. R2 Upload credentials from environment or remote .env
env_file = '/var/www/vhosts/tujuhcahaya.com/emdash/.env'
env_vars = {}
if os.path.exists(env_file):
    with open(env_file, 'r', encoding='utf-8') as ef:
        for line in ef:
            if '=' in line and not line.strip().startswith('#'):
                k, v = line.strip().split('=', 1)
                env_vars[k.strip()] = v.strip().strip('"').strip("'")

ENDPOINT = os.environ.get('S3_ENDPOINT') or env_vars['S3_ENDPOINT']
BUCKET = os.environ.get('S3_BUCKET') or env_vars.get('S3_BUCKET', 'xlocal')
KEY_ID = os.environ.get('S3_ACCESS_KEY_ID') or env_vars.get('S3_ACCESS_KEY_ID')
SECRET = os.environ.get('S3_SECRET_ACCESS_KEY') or env_vars.get('S3_SECRET_ACCESS_KEY')

featured_image_obj = None
raw_url = p.get('rawImageUrl', '').strip()
slug = p['slug']
r2_key = f"tujuhcahaya/uploads/2026/11/{slug}.webp"
raw_tmp = f"/tmp/{slug}_raw"
webp_tmp = f"/tmp/{slug}.webp"

s3 = boto3.client('s3', endpoint_url=ENDPOINT, aws_access_key_id=KEY_ID, aws_secret_access_key=SECRET, region_name='auto')

# Try downloading and converting raw_url with robust browser headers (bypasses WAFs)
if raw_url and raw_url.startswith('http'):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8',
            'Referer': raw_url
        }
        req = urllib.request.Request(raw_url, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as resp:
            content = resp.read()
            # Only save if valid image payload (> 500 bytes and not HTML error page)
            if len(content) > 500 and not content.startswith(b'<!DOCTYPE') and not content.startswith(b'<html'):
                with open(raw_tmp, 'wb') as rf:
                    rf.write(content)

                # Convert to WebP 1200x675 via Sharp Node
                os.system(f"cd /var/www/vhosts/tujuhcahaya.com/emdash && node -e \\"require('sharp')('{raw_tmp}').resize(1200, 675, {{fit: 'cover'}}).webp({{quality: 85}}).toFile('{webp_tmp}')\\"")
    except Exception as e:
        print(f"[R2 Download Warning] Could not fetch/convert {raw_url}: {e}")

# IMPORTANT: NEVER generate SVG card to WebP or upload fake card images to R2!
# Fallback is handled purely as code in frontend (HTML/CSS) to prevent R2 storage bloat.

# Upload WebP to Cloudflare R2 ONLY IF authentic image was converted
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
    "tags": p.get('tags', []),
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

# 4b. Tags taxonomy links
for tag in p.get('tags', []):
    t_label = tag.strip()
    if not t_label:
        continue
    import re
    t_slug = re.sub(r'[^a-z0-9\\s-]', '', t_label.lower().strip())
    t_slug = re.sub(r'\\s+', '-', t_slug)
    t_id = f"tag_{t_slug}"
    cur.execute('''
        INSERT OR IGNORE INTO taxonomies (id, name, slug, label, parent_id, data, locale, translation_group, sort_order)
        VALUES (?, 'tag', ?, ?, NULL, '{}', 'id', ?, 0)
    ''', (t_id, t_slug, t_label, t_id))
    cur.execute("SELECT id FROM taxonomies WHERE name = 'tag' AND slug = ? AND locale = 'id'", (t_slug,))
    t_row = cur.fetchone()
    actual_t_id = t_row[0] if t_row else t_id
    cur.execute('''
        INSERT OR IGNORE INTO content_taxonomies (
            collection, entry_id, taxonomy_id, status, scheduled_at, deleted_at,
            locale, published_at, created_at
        ) VALUES (
            'posts', ?, ?, 'published', NULL, NULL, 'id', ?, ?
        )
    ''', (p['entryId'], actual_t_id, p['now'], p['now']))

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
        post_url = f"https://www.tujuhcahaya.com/{slug}"
        # Notify IndexNow engine network (Bing, Yandex, Naver, Seznam)
        try:
            import urllib.request
            in_payload = json.dumps({
                "host": "www.tujuhcahaya.com",
                "key": "d856e24ba0a2df3d07ac8b11aae6ed1d",
                "keyLocation": "https://www.tujuhcahaya.com/d856e24ba0a2df3d07ac8b11aae6ed1d.txt",
                "urlList": [post_url]
            }).encode('utf-8')
            req = urllib.request.Request(
                "https://api.indexnow.org/indexnow",
                data=in_payload,
                headers={"Content-Type": "application/json; charset=utf-8"}
            )
            urllib.request.urlopen(req, timeout=5)
        except Exception:
            pass

        return {
            "success": True,
            "slug": slug,
            "status": status,
            "url": post_url,
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
