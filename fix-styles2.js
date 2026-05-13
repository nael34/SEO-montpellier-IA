const fs = require('fs');
let text = fs.readFileSync('app/page.js', 'utf8');

text = text.replace(/style=\{height: 50px, width: auto, object_fit: contain\}/g, 'style={{height: "50px", width: "auto", objectFit: "contain"}}');
text = text.replace(/style=\{height: 48px, width: auto, object_fit: contain\}/g, 'style={{height: "48px", width: "auto", objectFit: "contain"}}');
text = text.replace(/style=\{height: 48px, width: auto, border_radius: 4px\}/g, 'style={{height: "48px", width: "auto", borderRadius: "4px"}}');
text = text.replace(/style=\{display: none, visibility: hidden\}/g, 'style={{display: "none", visibility: "hidden"}}');
text = text.replace(/style=\{width: 100%, height: 100%, background: transparent\}/g, 'style={{width: "100%", height: "100%", background: "transparent"}}');
text = text.replace(/style=\{padding: 0\.5rem 1\.2rem\}/g, 'style={{padding: "0.5rem 1.2rem"}}');
text = text.replace(/style=\{display: flex, align_items: center, gap: 0\.75rem, margin_bottom: 2rem, padding: 0\.5rem 1rem\}/g, 'style={{display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem", padding: "0.5rem 1rem"}}');
text = text.replace(/style=\{font_family: var\(--font-heading\), font_size: 1\.5rem, font_weight: 700, color: var\(--color-white\)\}/g, 'style={{fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, color: "var(--color-white)"}}');
text = text.replace(/style=\{margin_top: 1rem\}/g, 'style={{marginTop: "1rem"}}');
text = text.replace(/style=\{padding: 2rem 0, border_top: 1px solid var\(--color-border-light\), border_bottom: 1px solid var\(--color-border-light\)\}/g, 'style={{padding: "2rem 0", borderTop: "1px solid var(--color-border-light)", borderBottom: "1px solid var(--color-border-light)"}}');
text = text.replace(/style=\{font_size: 2\.5rem, margin_bottom: 1rem\}/g, 'style={{fontSize: "2.5rem", marginBottom: "1rem"}}');
text = text.replace(/style=\{font_size: 2rem, margin_bottom: 1rem\}/g, 'style={{fontSize: "2rem", marginBottom: "1rem"}}');
text = text.replace(/style=\{margin_bottom: 0\.75rem\}/g, 'style={{marginBottom: "0.75rem"}}');
text = text.replace(/style=\{margin_bottom: 0\.5rem\}/g, 'style={{marginBottom: "0.5rem"}}');
text = text.replace(/style=\{font_family: var\(--font-heading\), font_size: 3rem, font_weight: 800\}/g, 'style={{fontFamily: "var(--font-heading)", fontSize: "3rem", fontWeight: 800}}');
text = text.replace(/style=\{color: var\(--color-text-muted\), font_size: 0\.85rem\}/g, 'style={{color: "var(--color-text-muted)", fontSize: "0.85rem"}}');
text = text.replace(/style=\{max_width: 780px, margin: 0 auto\}/g, 'style={{maxWidth: "780px", margin: "0 auto"}}');
text = text.replace(/style=\{text_align: center, margin_top: 2rem\}/g, 'style={{textAlign: "center", marginTop: "2rem"}}');
text = text.replace(/style=\{text_align: center, margin_top: 2rem, color: var\(--color-text-muted\), font_size: 0\.85rem\}/g, 'style={{textAlign: "center", marginTop: "2rem", color: "var(--color-text-muted)", fontSize: "0.85rem"}}');
text = text.replace(/style=\{color: var\(--color-cyan\)\}/g, 'style={{color: "var(--color-cyan)"}}');

fs.writeFileSync('app/page.js', text);
