const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (/\.(tsx|ts|css)$/.test(file)) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // Replace "/images/ with "images/
    // Replace '/images/ with 'images/
    // Replace `/images/ with `images/
    let newContent = content
        .replace(/\"\/images\//g, '\"images/')
        .replace(/\'\/images\//g, '\'images/')
        .replace(/\`\/images\//g, '\`images/');
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent);
        console.log('Updated ' + file);
    }
});
