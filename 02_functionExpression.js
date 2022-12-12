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

var sqaureFun =function()
{
console.log("Sqare of ",num,"=",num*num);

};
sqaureFun(5);
sqaureFun(100);
sqaureFun(8);