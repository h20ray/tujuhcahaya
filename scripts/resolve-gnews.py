import sys
import json
import urllib.request
import re

try:
    from googlenewsdecoder import gnewsdecoder
except ImportError:
    print(json.dumps({"error": "googlenewsdecoder not installed"}))
    sys.exit(0)

def extract_og_image(url):
    try:
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36'
        })
        with urllib.request.urlopen(req, timeout=6) as resp:
            # Read first 120KB only to quickly catch <head> metadata
            chunk = resp.read(120000).decode('utf-8', errors='ignore')
            m = re.search(r'<meta[^>]+property=[\'"]og:image[\'"][^>]+content=[\'"]([^\'"]+)[\'"]', chunk, re.I)
            if not m:
                m = re.search(r'<meta[^>]+content=[\'"]([^\'"]+)[\'"][^>]+property=[\'"]og:image[\'"]', chunk, re.I)
            if m:
                return m.group(1).strip()
    except Exception:
        pass
    return None

def resolve(gnews_url):
    try:
        dec = gnewsdecoder(gnews_url)
        if dec.get("success"):
            real_url = dec.get("decoded_url")
            og_img = extract_og_image(real_url)
            return {"success": True, "decodedUrl": real_url, "imageUrl": og_img}
        return {"success": False, "message": dec.get("message", "decode failed")}
    except Exception as e:
        return {"success": False, "error": str(e)}

if __name__ == "__main__":
    if len(sys.argv) > 1:
        target = sys.argv[1]
        res = resolve(target)
        print(json.dumps(res))
    else:
        # Read from stdin
        raw = sys.stdin.read()
        try:
            urls = json.loads(raw)
            out = {}
            for u in urls:
                out[u] = resolve(u)
            print(json.dumps(out))
        except Exception as e:
            print(json.dumps({"error": str(e)}))
