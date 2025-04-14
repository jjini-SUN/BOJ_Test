const fs = require('fs');
var [A, B, C] = fs.readFileSync(0, 'utf8').toString().split(' ').map(Number);
var choose = 0;

if(A==B && B==C)
    console.log(10000+B*1000);
else if(A!=B & B!=C & A!=C) {
    if(A>B & A>C)
        choose = A;
    else if(B>A & B>C)
        choose = B;
    else
        choose = C;
    console.log(choose*100);
}
else {
    if(A==B)
        choose = A;
    else if(B==C)
        choose = B;
    else if(C==A)
        choose = C;
    console.log(1000+choose*100);
}