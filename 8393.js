const fs = require('fs');
const n = Number(fs.readFileSync(0, 'utf8').toString());
var sum=0;

for(i=1; i<=n; i++) {
    sum+=i;
}
console.log(sum);