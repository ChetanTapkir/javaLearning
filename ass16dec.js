
console.log(`the comparison of 0== ""is :         ${(0  =='')}\n`);
console.log(`the comparison of 0== "0"is :         ${(0  =='0')}\n`);
console.log(`the comparison of [0== false ]is :    ${(0  == false)}\n`);
console.log(`the comparison of 0== ``is :         ${(null ==undefined)}\n`);
console.log(`the comparison of 0== ``is :         ${(1  ==[1])}\n`);
console.log(`the comparison of 0== ``is :         ${(1  ==true)}\n`);
console.log(`the comparison of 0== ``is :         ${(1  =='1')}\n`);

var newFun = function()
{
    var compv = (0==``);
    console.log(`Result is:${compv}`);
}
newFun();