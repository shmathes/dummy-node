const { readFileSync, writeFileSync} = require('fs');

/*
Synchronous approach where Node executes each task line by line.
Not ideal for processes that could hose the program
*/

console.log('Start');
const first = readFileSync('./contents/first.txt', 'utf-8');
const second = readFileSync('./contents/second.txt', 'utf-8');

console.log(first);
console.log(second);

writeFileSync('./contents/result-sync.txt', `Here is the result : ${first}, ${second}`);
console.log('Done with this task');
console.log('Starting the next one');