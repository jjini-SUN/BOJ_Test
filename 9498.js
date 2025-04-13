const fs = require('fs');
const score = Number(fs.readFileSync(0, 'utf8').toString());

if(100>= score & score >= 0) {
    if(100 >= score & score >= 90)
        console.log('A');
    else if(score >= 80)
        console.log('B');
    else if(score >= 70)
        console.log('C');
    else if(score >= 60)
        console.log('D');
    else
        console.log('F');
}