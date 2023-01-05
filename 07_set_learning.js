// Set: Allow unique elements
const setNumbers = new Set(); // Creating Set
console.log("Adding elements in set");
setNumbers.add(0); // Add element
setNumbers.add(1);
setNumbers.add(3);
setNumbers.add(4);
setNumbers.add(1); // Adding duplicate element - 1
setNumbers.add(3);// Adding duplicate element - 3
console.log(setNumbers);


console.log(`Total available elements in Set`);
const totalElements = setNumbers.size;
console.log(`Total elements in set : ${totalElements}`);

console.log(`After deletion`);
const isDeleted3 = setNumbers.delete(3);
const isDeleted99 = setNumbers.delete(99);
console.log(setNumbers);
console.log

console.log(`Check element is available or not using has()`);
const isAvailable4 = setNumbers.has(4);
const isAvailable77 = setNumbers.has(77);
console.log(`Is 4 Available - ${isAvailable4}, Is 77 available - ${isAvailable77}`);

console.log(`Type of set is : ${typeof setNumbers}`);

for (const element of setNumbers) {
    console.log(element);
}

console.log(`Removing duplicate elements`);
let arrayOfNumbers = [5, 6, 4, 6, 5, 5, 6];
// const mySet = new Set(arrayOfNumbers);
// console.log(mySet);
// const myArray = [...mySet];
// console.log(myArray);

const myArray = [...new Set(arrayOfNumbers)];
console.log(myArray);





class employee
{
    constructor(empid,empname,empAge,empcity)
    {
        this.empid=empid;
        this.empname=empname;
        this.empAge=empAge;
        this.empcity=empcity;
    }
}

const chetan =new employee(101,`chetan Tapkir`,28,`pune`);
const sagar =new employee(102,`sagar salunke`,28,`sangli`);
const deep =new employee(102,`deep salunke`,28,`pune`);
console.log(chetan);
console.log(sagar);
console.log(deep);

//collection of element 
//we can create array of objecct
const arrayofemployees =[chetan,sagar,deep];
console.log(arrayofemployees);
for (const employee of arrayofemployees) {
    console.log(`employee details are ${employee.empAge}${employee.empname}${employee.empid}${employee.empcity}`);
    
}
const setofemployee = new Set();
