const fs = require('fs');
const path = require('path');

const inputFilepath = path.join(__dirname,'content','first.txt');
const outputFilepath = path.join(__dirname,'content','second.txt');

const _reader = fs.readFileSync(inputFilepath, 'utf-8');
console.log(reader);
const _writer = fs.writeFileSync(outputFilepath, reader, {flag: 'a'});
//the flag attribute is set to append onto the output file.

// writer.write(reader.toString());