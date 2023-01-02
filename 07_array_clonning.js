let arrayofNum =[0,1,2,3,4,5,6];
let arrayofclone =[...arrayofNum];

console.log(arrayofNum);
console.log(arrayofclone);
console.log("===========after updatting array ===========");
arrayofNum[2]=10;
// arrayofclone[2]=20;
// in deep clonning it will create new array and so that it will change saperately 
console.log(arrayofNum);
console.log(arrayofclone);
console.log("===if we perfomed shallow clonning using = operator ");
let arrayofshallowclone=arrayofNum;
arrayofshallowclone[2]=30;
console.log(arrayofNum);
console.log(arrayofshallowclone);
// in shallow clonning it is pointing to same array so it will change both array 
console.log("now it is changing both the array ");