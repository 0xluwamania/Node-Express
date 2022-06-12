const path = require('path')


// console.log(path.sep) points you in the direction of the seperator

const filepath = path.join(process.cwd(), 'index.js')
console.log(filepath)

const base = path.basename(filepath);
console.log(base); // brings out the base name in the filepath index.js

const absolute = path.resolve(__dirname, index.js);
console.log(absolute) // because seperators are different across different OS. it resolves the seperator to the current OS to make things work


