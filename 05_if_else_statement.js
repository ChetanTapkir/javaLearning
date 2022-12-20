console.log(`Broom Broom`);
var isRoadBlocked = true;
if (isRoadBlocked)
{console.log(`Traveling thru express way`);
console.log(`Travel will be of 2`);
}
else{
    console.log(`Traveling thru lonavala old highway`);
    console.log(`Travels will be of 4 HRS`);
}
function isEvenOrOdd(num)
{
if (typeof num=="number")
{
    if(num%2==0){console.log(`Even No`);}
    else{console.log(`odd No`);}
}
else{console.log(`Invalid No`);}
}

isEvenOrOdd(20);
isEvenOrOdd(11);
isEvenOrOdd("30");
console.log("==============voter age  check using if else===========");
var ageCheck = function(age)
{
    if(age<=0||age>120 )
    {
        console.log(`Please provide valid data ${age} is Invalid`);
    }
    else
    {   
        if(age>18){console.log(`you are eligible for ${age} age`);}
        else{console.log(`your age ${age} is not eligible`);} 
        
    }
}
ageCheck(45);
ageCheck(17);
ageCheck(8);
ageCheck(20);
ageCheck(-10);
ageCheck(200);
ageCheck(0);