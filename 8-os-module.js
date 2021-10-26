const os = require('os');

//View all the functions in the OS module
//console.log(os);

//Info about the current user
const user = os.userInfo();
//console.log(user);

// Following function returns the system uptime in seconds
console.log(`The sytem uptime is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOs);