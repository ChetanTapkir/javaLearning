var myName="chetan";
var showres = function()
{
console.log("This is function Expression");
};
showres();

var substract = function(num1,num2)
{
var result =num1-num2;
console.log("SUBSTRACTION RESULT",result);
return result;
};
var result=substract(50,40);
var result=substract(100,20);
console.log(result);

console.log("-------------Sqaure Functio--------------");
var sqaureFun =function(num)
{

    console.log("Sqare of ",num,"=",num*num);

};
 sqaureFun(5);
 sqaureFun(100);
 sqaureFun(8);
 console.log("-------------Functio For Area Of Rectangle--------------");

 var areaRect = function(num1,num2)
 {
temp = num1*num2;
console.log(temp);
 }
areaRect(20,50);
console.log("-------------when we pass 2 string for Multiplication--------------");
areaRect("ayush","pruthvi");
console.log("------------------------------------");
areaRect(50,100);
areaRect(499,917);
console.log( typeof areaReact);

