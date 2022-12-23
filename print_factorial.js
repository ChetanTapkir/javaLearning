var factorial =function(result)
{

var fact =1;
var num =result;
for(let i=num;i>=1;i--)
{
    fact=fact*num;
}console.log(`factorial of  ${result}   is------${fact}`);
}
factorial(5);
factorial(7);
factorial(8);
factorial(12);
