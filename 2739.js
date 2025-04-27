const fs = require('fs');
const N = Number(fs.readFileSync(0, 'utf8').toString());

for(i=1; i<10; i++) {
    console.log(N + " * " + i + " = " + N*i);
}