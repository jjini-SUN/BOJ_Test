const fs = require('fs');
const year = Number(fs.readFileSync(0, 'utf8').toString());

const four = year%4;
const hundred = year%100;
const four_hundred = year%400;

if(four==0 & hundred!=0)
    console.log(1);
else if(four_hundred==0)
    console.log(1);
else
    console.log(0);