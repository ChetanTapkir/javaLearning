let myName = "Anil";
let yourName = "Sunil";

myName = yourName; // Deep Clone always performed on primitive data type

console.log(myName);
console.log(yourName);

yourName = "Jenifer";
console.log(myName);
console.log(yourName);

let anil = {
    age: 23,
    name: "Anil",
}