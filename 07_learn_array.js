// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     }
// let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 6]; // Empty Array
// console.log(arrayOfNumbers);

// console.log(`===== Total number of elements available in array ====`);
// let totalElements = arrayOfNumbers.length;
// console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);


let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 6]; // Empty Array
console.log(arrayOfNumbers);

console.log(`===== Total number of elements available in array ====`);
let totalElements = arrayOfNumbers.length;
console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);




let typeOfArray =typeof arrayOfNumbers;
console.log(`Type of array - arrayOfNumbers --> ${typeOfArray}`);

console.log(`=== Accessing array elements===`);
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at Zero Index : ${elementAtZeroIndex}`);
console.log(`Element at Fifth Index : ${arrayOfNumbers[4]}`);

console.log(`Last Element : ${totalElements-1}`);

console.log(`When provided value is greater than length : ${arrayOfNumbers[9]}`);

arrayOfNumbers[2] = 100; // Update or Modify value using index
console.log(arrayOfNumbers);

let indexof7 = arrayOfNumbers.indexOf(7);
console.log(`index of element 7 is ${indexof7}`);


let indexof10 = arrayOfNumbers.indexOf(10);
console.log(`index of element 7 is ${indexof7}`);



console.log("==============traversing array using for loop ============");
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
}


console.log("==============traversing even index value array using for loop ============");
for (let index = 0; index < arrayOfNumbers.length; index++) {
 if{   const element = array[index];
    console.log(element);}
}



let salary =[10000,20000,30000,40000,50000];
var size =salary.length;
var sumofsal =0;
for (let index = 0; index < size; index++) {
    const element = salary[index];
    sumofsal=sumofsal+element;
    console.log(element);
}console.log(sumofsal);