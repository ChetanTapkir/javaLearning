class bank{
constructor(bankName,location,accountNo,ifsc,interestRate){
this.bankName=bankName;
this.location=location;
this.accountNo=accountNo;
this.ifsc=ifsc;
this.interestRate=interestRate;
}
}
const axisbank= new bank("Axis Bank","PCMC",1001000045275,"AXB00050",8.5);
const hdfcBank= new bank("Hdfc bank","Chinchwad",50010006001,"HDFC000437",8.4);
const KotakBank = new bank("Kotak Mahindra","Shivaji Nagar",30023231001,"KBK4004123",8.75);
const sbiBank = new bank("SBI","Shivaji Nagar",40023231001,"KBK4004123",9);
const iciciBank = new bank("ICICI","Shivaji Nagar",50023231001,"KBK4004123",9.5);

console.log("============log bank objects on console using for in  travers");
for (const key in axisbank) {
    if (Object.hasOwnProperty.call(axisbank, key)) {
        const element = axisbank[key];
        console.log(key , element);
        
    }
}

const arrayofobjects =[axisbank,hdfcBank,KotakBank];
console.log("============log bank objects on console using array travers");
for (const bank of arrayofobjects) {
console.log(`Bank details of all banks ${bank.accountNo} : ${bank.bankName} : ${bank.ifsc} : ${bank.interestRate} : ${bank.location}`);    
}


// for (const iterator of arrayofobjects) {
//     console.log(iterator);
// }

const setofBanks =new Set();
setofBanks.add(sbiBank);
setofBanks.add(KotakBank);
setofBanks.add(axisbank);
setofBanks.add(iciciBank);
console.log("============log set of banks on console using for of ");

for (const iterator of setofBanks) {
    console.log(iterator);
}
console.log("============lets create map using set ========");
const mapofbanks=new Map();
mapofbanks.set();
mapofbanks.set();
mapofbanks.set();
console.log("=========== lets print map on console ========")

console.log(mapofbanks);




// for (const key in axisbank) {
//     if (Object.hasOwnProperty.call(axisbank, key)) {
//         const element = axisbank[key];
//         console.log(element);
        
//     }
// }

