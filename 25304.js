const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');

const X = Number(input[0]);
const N = Number(input[1]);
var sum = 0;

for(i=2; i<=N+1; i++) {
    var [price, num] = input[i].split(' ').map(Number);
    sum = sum + (price*num);
}

if(X === sum)
    console.log("Yes");
else
    console.log("No");