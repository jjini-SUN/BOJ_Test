const fs = require('fs');
const [H, M] = fs.readFileSync(0, 'utf8').toString().split(' ').map(Number);

if(M < 45)
    if(H==0)
        console.log(23, M+15);
    else
        console.log(H-1, M+15);
else
    console.log(H, M-45);