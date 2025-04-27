const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');

const T = Number(input[0]);

for(i=1; i<=T; i++) {
    let [A, B] = input[i].split(' ').map(Number);
    console.log(A+B);
}