const path = require('path');
const fs = require('fs');


const p = path.resolve(__dirname, '../config/schema.json');
console.log(p);

const result = JSON.parse(fs.readFileSync(p));

console.log(result);