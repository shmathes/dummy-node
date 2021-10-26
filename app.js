// Local dependency - Use it only in a certain project
// npm i <packageName>

// Global dependency - Use in any project
// npm install -g <packageName>

// Package.json -> Manifest file that stores important information about our project
// Manual approach -> Create package.json in the root
// npm init (step-by-step proocess)
// npm init -y -> Everything is setup with default values

// npm i lodash
const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);