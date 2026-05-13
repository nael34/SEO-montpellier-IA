import re
import json

html_content = open('public/index.html', 'r').read()

# Extract body
body_match = re.search(r'<body>(.*?)</body>', html_content, re.DOTALL)
if not body_match:
    print("No body found")
    exit(1)
body = body_match.group(1)

# Remove GTM noscript
body = re.sub(r'<!-- Google Tag Manager \(noscript\) -->.*?<!-- End Google Tag Manager \(noscript\) -->', '', body, flags=re.DOTALL)

# Convert class to className
body = re.sub(r'\bclass=', 'className=', body)
# Convert for to htmlFor
body = re.sub(r'\bfor=', 'htmlFor=', body)

# Convert inline styles (heuristic approach for known styles)
def style_to_dict(style_str):
    styles = {}
    for rule in style_str.split(';'):
        if ':' in rule:
            key, val = rule.split(':', 1)
            key = key.strip()
            val = val.strip()
            # camelCase key
            parts = key.split('-')
            key = parts[0] + ''.join(p.title() for p in parts[1:])
            styles[key] = val
    return json.dumps(styles)

body = re.sub(r'style="([^"]*)"', lambda m: f"style={{{m.group(1).replace('; ', ', ').replace(':', ': ').replace('-', '_')}}}", body) # fallback, not perfect
# Let's do a better style replacer
def replace_style(m):
    return "style={" + style_to_dict(m.group(1)) + "}"
body = re.sub(r'style="([^"]*)"', replace_style, body)

# Replace <img src="https://i.postimg.cc/FKL2zjPG/26c598fc-7b9e-4452-b52e-dbb841d92e33.png" ...> with Next.js Image
def replace_img(m):
    img_tag = m.group(0)
    src_match = re.search(r'src="([^"]+)"', img_tag)
    alt_match = re.search(r'alt="([^"]*)"', img_tag)
    class_match = re.search(r'className="([^"]+)"', img_tag)
    style_match = re.search(r'style=\{([^}]+)\}', img_tag)
    
    src = src_match.group(1) if src_match else ""
    alt = alt_match.group(1) if alt_match else ""
    className = class_match.group(1) if class_match else ""
    style = style_match.group(1) if style_match else ""
    
    # Map remote src to local
    if "Untitled-design.png" in src:
        src = "/assets/images/logo-officiel.png"
    elif "26c598fc-7b9e-4452-b52e-dbb841d92e33.png" in src: src = "/assets/images/mockups/26c598fc-7b9e-4452-b52e-dbb841d92e33.png"
    elif "60cceebb-c4ed-4437-82dc-df959d389666.png" in src: src = "/assets/images/mockups/60cceebb-c4ed-4437-82dc-df959d389666.png"
    elif "Capture-d-ecran-2026-02-06-a-21-25-02.png" in src: src = "/assets/images/mockups/Capture-d-ecran-2026-02-06-a-21-25-02.png"
    elif "Capture-d-ecran-2026-02-11-a-20-15-58.png" in src: src = "/assets/images/mockups/Capture-d-ecran-2026-02-11-a-20-15-58.png"
    elif "Capture-d-ecran-2026-02-14-a-19-33-42.png" in src: src = "/assets/images/mockups/Capture-d-ecran-2026-02-14-a-19-33-42.png"
    elif "Capture-d-ecran-2026-03-16-a-22-30-05.png" in src: src = "/assets/images/mockups/Capture-d-ecran-2026-03-16-a-22-30-05.png"
    elif "Capture-d-ecran-2026-04-03-a-16-06-11.png" in src: src = "/assets/images/mockups/Capture-d-ecran-2026-04-03-a-16-06-11.png"
    elif "Capture-d-ecran-2026-04-22-a-13-52-54.png" in src: src = "/assets/images/mockups/Capture-d-ecran-2026-04-22-a-13-52-54.png"
    elif "dd06ef97-f9bb-4138-979b-653449a3747b.png" in src: src = "/assets/images/mockups/dd06ef97-f9bb-4138-979b-653449a3747b.png"

    props = f'src="{src}" alt="{alt}" width={{600}} height={{400}}'
    if className: props += f' className="{className}"'
    if style: props += f' style={{{style}}}'
    return f'<Image {props} />'

body = re.sub(r'<img[^>]+>', replace_img, body)

# Self-close specific tags
body = re.sub(r'<br>', '<br />', body)
body = re.sub(r'<hr>', '<hr />', body)
body = re.sub(r'<input([^>]*[^/])>', r'<input\1 />', body)
body = re.sub(r'<source([^>]*[^/])>', r'<source\1 />', body)

# Create SEO links footer
seo_footer = """
    {/* ═══ MAILLAGE SEO INTERNE (ORPHAN PAGES FIX) ═══ */}
    <section className="section" style={{ backgroundColor: "var(--color-bg-dark)", borderTop: "1px solid var(--color-border-light)", padding: "4rem 0" }}>
        <div className="container">
            <h3 style={{ color: "var(--color-text-light)", marginBottom: "1.5rem", fontSize: "1.2rem", textAlign: "center" }}>Nos zones d'intervention web par IA</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                {seoLinks.map((link) => (
                    <Link key={link.slug} href={`/${link.slug}`} style={{ color: "var(--color-cyan)", textDecoration: "none", fontSize: "0.9rem", padding: "0.5rem 1rem", border: "1px solid rgba(6,182,212,0.2)", borderRadius: "var(--radius-md)", backgroundColor: "rgba(6,182,212,0.05)" }}>
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    </section>
"""

# Replace the original footer with our new seo_footer right before the actual <footer>
body = body.replace('<!-- ═══ FOOTER ═══ -->', '<!-- ═══ FOOTER ═══ -->\n' + seo_footer)

# Remove old scripts tags from bottom as we'll use next/script
body = re.sub(r'<script.*?</script>', '', body, flags=re.DOTALL)

page_js_template = f"""import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {{ getAllCombinations }} from '@/data/seo-data';

export default function Home() {{
  const seoLinks = getAllCombinations().map(c => ({{
    slug: `${{c.metier}}-a-${{c.ville}}`,
    label: `${{c.metier.charAt(0).toUpperCase() + c.metier.slice(1)}} à ${{c.ville.charAt(0).toUpperCase() + c.ville.slice(1)}}`
  }}));

  return (
    <>
      {body}
      <Script src="/script.js" strategy="lazyOnload" />
      <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.86/build/spline-viewer.js" strategy="lazyOnload" />
    </>
  );
}}
"""

with open('app/page.js', 'w') as f:
    f.write(page_js_template)
print("Migration completed to app/page.js")
