var num1 = 10;
var num2 = 5;
 var addResult = num1 + num2;

 console.log(" Addition is ",addResult ) ;

 var subresult =num1 - num2;

 console.log('substraction  is',subresult);

 var mulReult=num1*num2;
 console.log('multplication is ',mulReult);

 var modulusResult = num1% 4;

console.log("============Assignment Operator=============");
 console.log('Modulus is ',modulusResult) ;

 var num1 =+ num2;
 console.log('compound Addition',num1);

var num1 =- num2
console.log("compound substraction",num2 );

console.log("=========================");

var num3=10;
num3 = ++num3;
console.log("prefix of Result",num3);

num3 = num3++;
console.log("postfix of Result",num3);

console.log(`============ Unary Operators =================`);
var num3 = 10;
var result = ++num3; // num3 = num3 + 1;
console.log(`Increment operator  result is ${result}`);

var num4 = 5;
var res = --num4; //num4 -1;
console.log(`Decrement operator result is ${res}`);

console.log(`============ Comparision operators =================`);
var num1=10;
var num2=5;
var res=num1>num2;
console.log(`>greter than operator${res}`);