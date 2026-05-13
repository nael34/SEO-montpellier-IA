const fs = require('fs');

let content = fs.readFileSync('app/page.js', 'utf8');

// The python script generated `style={height: 50px, ...}`. We need to convert it to valid JSON strings or valid JS objects.
// Wait, the python script generated: style={height: 50px, width: auto, object_fit: contain}
// This is not valid JS object because values are not quoted.
// It's easier to just re-read the public/index.html and do the replacement correctly in Node, OR just fix the specific styles used in index.html manually, since there are only 5-6 style tags.

// Let's list the known styles from index.html and replace them directly in app/page.js.
const replacements = [
  { bad: /style=\{height: 50px, width: auto, object_fit: contain\}/g, good: 'style={{height: "50px", width: "auto", objectFit: "contain"}}' },
  { bad: /style=\{display: none, visibility: hidden\}/g, good: 'style={{display: "none", visibility: "hidden"}}' },
  { bad: /style=\{width: 100%, height: 100%, background: transparent\}/g, good: 'style={{width: "100%", height: "100%", background: "transparent"}}' },
  { bad: /style=\{font_size: 2\.5rem, margin_bottom: 1rem\}/g, good: 'style={{fontSize: "2.5rem", marginBottom: "1rem"}}' },
  { bad: /style=\{font_size: 2rem, margin_bottom: 1rem\}/g, good: 'style={{fontSize: "2rem", marginBottom: "1rem"}}' },
  { bad: /style=\{text_align: center, margin_top: 2rem\}/g, good: 'style={{textAlign: "center", marginTop: "2rem"}}' },
  { bad: /style=\{padding: 2rem 0, border_top: 1px solid var\(--color-border-light\), border_bottom: 1px solid var\(--color-border-light\)\}/g, good: 'style={{padding: "2rem 0", borderTop: "1px solid var(--color-border-light)", borderBottom: "1px solid var(--color-border-light)"}}' },
  { bad: /style=\{font_family: var\(--font-heading\), font_size: 1\.5rem, font_weight: 700, color: var\(--color-white\)\}/g, good: 'style={{fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, color: "var(--color-white)"}}' },
  { bad: /style=\{max_width: 780px, margin: 0 auto\}/g, good: 'style={{maxWidth: "780px", margin: "0 auto"}}' },
  { bad: /style=\{height: 48px, width: auto, object_fit: contain\}/g, good: 'style={{height: "48px", width: "auto", objectFit: "contain"}}' },
  { bad: /style=\{height: 48px, width: auto, border_radius: 4px\}/g, good: 'style={{height: "48px", width: "auto", borderRadius: "4px"}}' },
  { bad: /style=\{font_family: var\(--font-heading\), font_size: 3rem, font_weight: 800\}/g, good: 'style={{fontFamily: "var(--font-heading)", fontSize: "3rem", fontWeight: 800}}' },
  { bad: /style=\{color: var\(--color-text-muted\), font_size: 0\.85rem\}/g, good: 'style={{color: "var(--color-text-muted)", fontSize: "0.85rem"}}' },
  { bad: /style=\{text_align: center, margin_top: 2rem, color: var\(--color-text-muted\), font_size: 0\.85rem\}/g, good: 'style={{textAlign: "center", marginTop: "2rem", color: "var(--color-text-muted)", fontSize: "0.85rem"}}' },
  { bad: /style=\{color: var\(--color-cyan\)\}/g, good: 'style={{color: "var(--color-cyan)"}}' },
  { bad: /style=\{margin_bottom: 0\.75rem\}/g, good: 'style={{marginBottom: "0.75rem"}}' },
  { bad: /style=\{margin_bottom: 0\.5rem\}/g, good: 'style={{marginBottom: "0.5rem"}}' },
  { bad: /style=\{display: flex, align_items: center, gap: 0\.75rem, margin_bottom: 2rem, padding: 0\.5rem 1rem\}/g, good: 'style={{display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem", padding: "0.5rem 1rem"}}' },
  { bad: /style=\{margin_top: 1rem\}/g, good: 'style={{marginTop: "1rem"}}' }
];

let updatedContent = content;
for (const r of replacements) {
  updatedContent = updatedContent.replace(r.bad, r.good);
}

// Ensure viewBox is properly cased for SVGs
updatedContent = updatedContent.replace(/viewbox/g, 'viewBox');
updatedContent = updatedContent.replace(/stroke-width/g, 'strokeWidth');

fs.writeFileSync('app/page.js', updatedContent);
console.log("Style fixes applied.");
