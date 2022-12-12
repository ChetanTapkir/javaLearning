console.log("========Q1===========");
function f1()
{
    console.log("this is the funnction with no org and no return value or type");
}
f1();
console.log("========Q2===========");
function pdet(firstName,LastName,collName)
{
    console.log(firstName,LastName,collName);
}
pdet("Chetan","Tapkir","JSPM");
console.log("========Q3===========");
function swapvaluedude(val1,val2)
{
console.log("----values Before Swap---",val1,val2);
temp=val1;
val1=val2;
val2=temp;
console.log("values after swap---",val1,val2);

}
swapvaluedude("virat", "anushka");
swapvaluedude(1000,2000);
console.log("========Q4===========");
function addThreeValue(sag1,sag2,sag3)
{

temp=sag1+sag2+sag3;
return temp;
}
 var temp=addThreeValue(10.23,600,40);
 console.log(temp);
 var temp=addThreeValue("hellow"," good"," morning");
 console.log(temp);
 console.log("========Sunday Assgnmnt===========");
 function bankDetails(bName,aNum,bLoc,pinCode)
 {
    console.log("Dear Customer Your Bank Account Details are as Below",bName,aNum,bLoc,pinCode);
 }
 bankDetails("City Bank",3456782345,"Pune",431202);
 bankDetails("Axis Bank",7856782345,"Mumbai",441202);
 bankDetails("HDFC Bank",8956782345,"pune",631202,"open");
 var foo = 1;
 function myfun(){
    console.log(foo);
    var foo = 2;
 }
 myfun();
 function multiply()
 {

    
 }
 multiply();