var num=5;
var prime=true;
for(i=2;i<num;i++){
    if(num%1==0){prime=false}
}if(prime){console.log("given  is prime");}
else{console.log("given no is not prime");}

console.log("=================fibonacci series ==========================");
var a=0,b=1;
var array=[0,1];
var sum=0

for (let index=0;index<7;index++)
{
    sum=a+b;
    array.push(sum);
    // console.log(sum);
    a=b;
    b=sum;
}console.log(array);

