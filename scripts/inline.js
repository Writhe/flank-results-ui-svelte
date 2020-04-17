const fs = require('fs');

const bundle = fs.readFileSync('./public/build/bundle.js', 'utf-8');
const css = fs.readFileSync('./public/build/bundle.css', 'utf-8');
const html = fs.readFileSync('./public/index.html', 'utf-8');

const result = html
  .replace(`<link rel='stylesheet' href='/build/bundle.css'>`, `<style>${css}</style>`)
  .replace(`<script defer src='/build/bundle.js'></script>`, `<script>${bundle}</script>`);

fs.writeFileSync('./public/build/inline.html', result, { encoding: 'utf-8' });
