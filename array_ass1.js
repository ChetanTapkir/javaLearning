let arrayofNo = [5,10,4,6,7,10,6]
console.log(arrayofNo);
console.log("============Total Number of Elements in array ===========");
let totalEle = arrayofNo.length;
console.log(`Total elements in array is ------->${totalEle}`);

for (let  index= 0;  index< arrayofNo.length; index++) {
    const element = arrayofNo[index];
    console.log(element);
}

for (let  index= 0;  index< arrayofNo.length; index++) {
    var element = arrayofNo[index];
 {if(element==10){
    console.log(`1st occurance of lelment 10 is :${index}`);}}
}

for (let  index= 0;  index< arrayofNo.length; index++) 
{
    var element = arrayofNo[index];
 
    if(element==6){console.log(`1st occurance of lelment 6 is :${index}`);}
    // console.log(`2nd occurance of lelment 10 is :${index}`);

}