const fs = require('fs');
const [A, B, C] = fs.readFileSync(0, 'utf8').toString().split(' ').map(Number);

console.log(A+B+C);