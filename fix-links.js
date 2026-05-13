const fs = require('fs');

const filesToUpdate = [
    'app/page.js',
    'public/tarifs.html',
    'public/exemples.html',
    'public/a-propos.html'
];

filesToUpdate.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/href="index\.html"/g, 'href="/"');
        content = content.replace(/href="\.\/index\.html"/g, 'href="/"');
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
});
