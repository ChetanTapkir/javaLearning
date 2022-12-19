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