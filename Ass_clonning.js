const arrayNums =[20,3,4,56,90,400,49];
const arrayofNums = arrayNums;
console.log(arrayofNums);
const dclonarray =[...arrayNums];
arrayNums.push(10,25);
console.log("===========after addition of 10,25===using .push()  original array and clone array =========");
console.log(arrayNums);
console.log(arrayofNums);
console.log(dclonarray);
console.log("==============");
const arrayEven =[2,30,14,8];
const arraymMerge =[...arrayEven]+[...arrayNums];

console.log(arraymMerge);

const employee_info ={
emp_id : 27,
emp_name : "John Doe",
salary:{
    july_month:"40,000",
    aug_month:"50,000",
    july_month:"65,000"
},
adress:{
    locality:{
        colony: "om Vrindavan Society",
        street:"Kanch Pokali"
    },
    city:"mumbai",
    state:"Maharashtra",
    Country:"India",
},
Mobiles: ["+918600345688","1800 4467 32"]
}
console.log("============ Display all keys and values ============");
console.log(employee_info.Mobiles,employee_info.adress.locality,employee_info.adress.city,employee_info.adress.state,employee_info.adress.Country,employee_info.Mobiles);