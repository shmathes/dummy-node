const path = require('path');

// console.log(path);

console.log(path.join());

//Returns a normalized file path
const filePath = path.join('contents', 'subFolder', 'test.txt'); // contents\subFolder\test.txt
console.log(filePath);

//Returns the last directory or file in the file path
const base = path.basename(filePath); //test.txt
console.log(base);

//__dirname will point to the location of app.js
const absolute = path.resolve(__dirname, 'content', 'subFolder', 'test.txt'); // D:\Development\Nodejs\Tutorial\content\subFolder\test.txt
console.log(absolute);