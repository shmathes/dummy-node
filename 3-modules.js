/*
Modules - Encapsulated code
Every file in NodeJS is a module
*/
const names = require('./4-names');
const sayHi = require('./5-utils');
const alt = require('./6-alternative-flavor');
require('./7-mind-grenade'); //Whenever you're importing a module, you're invoking it


//console.log(names);

// console.log(`Hello ${alt.singlePerson.name}!`);

// for (let item of alt.items){
//     console.log(`Item ${item}`);
// }

sayHi(names.john);
sayHi(names.peter); 