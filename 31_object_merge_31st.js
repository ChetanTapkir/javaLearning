// const personalDetails= {
// name : "Chetan Shivaji Tapkir",
// age : 29,
// adress : "Pune",
// education : "MCA"
// }

// const collegeDetails ={
//     collgName : "JSPM",
//     affilatedStatus : "yes",
//     univercity : "Pune"
// }

// Object.assign(personalDetails,collegeDetails);
// console.log("My Details are");
// console.log(personalDetails);
// console.log(collegeDetails);

// console.log("array of friends display");
// var friednsName=["Deepak","vicky","pratik","hitesh","amit"];
// Object.freeze(friednsName);
// //  friednsName.push("sourabh");
// console.log();

// console.log("dispay friends array using for loog");
//  console.log(friednsName);
// for (i=0;i<friednsName.length;i++) {
// console.log(friednsName[i]);   
// }

var str="codemindTechnology";
function reversString() {
    const revArray =[];
    const length1=str.length-1;
    for(let i=length1;i>=0;i--)
    {
revArray.push(str[i]);    }
return revArray.join(``);
}
reversString();