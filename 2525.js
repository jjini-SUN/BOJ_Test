const fs = require('fs');
var input = fs.readFileSync(0, 'utf8').toString().split('\n');

var H = parseInt(input[0].split(' ')[0]);
var M = parseInt(input[0].split(' ')[1]);
var exit = parseInt(input[1]);

M += exit;

if(M >= 60) {
    H += parseInt(M/60);
    M = M%60;
    if(H>=24)
        H = H%24;
}

console.log(H, M);