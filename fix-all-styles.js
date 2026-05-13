const fs = require('fs');
let code = fs.readFileSync('app/page.js', 'utf8');

// The regex will find style={something} where something doesn't start with {
code = code.replace(/style=\{([^}\{]+)\}/g, (match, inner) => {
    // inner is like: height: 50px, width: auto, object_fit: contain;
    // or padding: 2rem 0, border_top: ...
    let clean = inner.replace(/;/g, '');
    let parts = clean.split(',');
    let objPairs = parts.map(p => {
        let [k, ...v] = p.split(':');
        if (!k || v.length === 0) return '';
        k = k.trim();
        let val = v.join(':').trim();
        
        // fix snake case to camel case
        k = k.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
        // fix var(__color) to var(--color)
        val = val.replace(/__([a-z\-]+)/g, '--$1');
        
        // quote the value
        return `"${k}": "${val}"`;
    }).filter(x => x);
    
    return `style={{${objPairs.join(', ')}}}`;
});

fs.writeFileSync('app/page.js', code);
