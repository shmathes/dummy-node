const {readFile, writeFile} = require('fs');

console.log('Start'); //Executes first
readFile('./contents/first.txt', 'utf8', (err, result) => {
    if(err){   
        console.log(err);
        return null;
    }
    const first = result;
    console.log(first);
    readFile('./contents/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return null;
        }
        const second = result;
        console.log(second);
        writeFile('./contents/result-async.txt', `Here is the new result : ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err);
                return null;
            }
            console.log('Done with this task');
        });
    });
});

console.log('Starting next task.'); //Executes second