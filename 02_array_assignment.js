const fruit_seasonal =["Banana","orange","apple","Mango","Water Melon"];
var fruit = fruit_seasonal.pop();
var fruit1 = fruit_seasonal.shift();
console.log(`first and last element of the array : ${fruit1},${fruit}`);
console.log(fruit_seasonal);
fruit_seasonal.push("water Melon");
fruit_seasonal.unshift("Banana");
console.log(fruit_seasonal);
fruit_seasonal.unshift("papaya");
console.log(fruit_seasonal);
var leg_fruit =fruit_seasonal.length;
console.log(`length of array is ${leg_fruit}`);
var fruit3 = fruit_seasonal.slice();
console.log(`Remove mango from  the array : ${fruit3}`);
console.log(fruit_seasonal);


