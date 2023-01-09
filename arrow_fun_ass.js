console.log("Display MSG Good Morning Using arraow Function");

var goodM= ()=>{console.log("Good Morning Today Is Monday");}
goodM();

var multiplication  =(n1,n2,n3=1)=>{let mult=n1*n2*n3;
console.log(`Multiplication of no ${n1} ${n2} ${n3} is :`,mult);}
multiplication(5,5,2);
multiplication(10,4);

var addition =(a1,a2,a3,a4,a5)=>{var v=a1+a2+a3+a4+a5;
return v;
}

var Disp = addition(100,100,200,349,756);
console.log(`Addition of No is: ${Disp}`);

var Disp = addition("I am","learning "," ES6 "," Features ","in Depth");
console.log(`Addition of No is: ${Disp}`);