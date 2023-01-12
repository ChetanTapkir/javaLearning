console.log("============map()===============");
const arrayofNum =[0,2,3,5,6];
//[10,20,30,50,60]
// we can also write above code in one one line 


// const arraysquare =arrayofNum.map((currentValue)=>{
//     return currentValue*currentValue;
//     });
//     console.log(arraysquare);




const arratransform =arrayofNum.map((currentValue)=>{
return currentValue+10;
});
console.log(arratransform);