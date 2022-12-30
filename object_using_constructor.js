class vehicle {
constructor(brand,fuelType,color,wheeler,speed){
    this.brand=brand;
    this.fuelType=fuelType;
    this.color=color;
    this.wheeler=wheeler;
    this.speed =speed;
}


}
let tataobject = new vehicle("tata","Diesel","Tomatored","fourwheeler",140);
let marutiobject = new vehicle("maruti","Diesel","Tomatored","fourwheeler",160);
let mahindraobject = new vehicle("mahindra","Diesel","Tomatored","fourwheeler",200);
let hyuindaiobject = new vehicle("hyuindai","Diesel","Tomatored","fourwheeler",250);
let ferraryobject = new vehicle("ferrary","Diesel","Tomatored","fourwheeler",360);
let jaguarobject = new vehicle("jaguar","Diesel","Tomatored","fourwheeler",280);

console.log(tataobject);
console.log(marutiobject);
console.log(mahindraobject);
console.log(hyuindaiobject);
console.log(jaguarobject);

class college{
constructor(PRNNO,CLGNAME,CLGTYPE,LOCATION)
{
this.CLGNAME=CLGNAME;
this.PRNNO=PRNNO;
this.CLGTYPE=CLGTYPE;
this.LOCATION=LOCATION;

}
Details(){
console.log(this.CLGNAME,this.PRNNO,this.CLGTYPE,this.LOCATION);
}
}

let JSPM = new college("JSPM",1001,"unipune","PCMC");
let PCCOE = new college("PCCOE",1002,"unipune","wakad");
let FC = new college("FC",1003,"unipune","swarget");
let Modern = new college("Modern",1004,"unipune","shivajinagar");
 
JSPM.Details();
PCCOE.Details();
FC.Details();
Modern.Details();

class student {

constructor(Stud_name,Stud_RollNO,age,graduation){
this.Stud_RollNO=Stud_RollNO;
this.Stud_name=Stud_name;
this.age=age;
this.graduation=graduation;
}

}
let stud1 =new student("chetan",103,23,"MCA")
let stud2 =new student("sonali",105,20,"BE")
var Stud_name="ABC";
console.log(stud1);
console.log(stud2);

// class laptop{
function laptop(brand,Ram,Storage,Body_color)
{
    this.brand=brand;
    this.Ram=Ram;
    this.Storage=Storage;this.Body_color=Body_color;

}
// Details(){
//     console.log(acer);
//     console.log(Hp);
// }
// }

let acer = new laptop("acer",'8gb','1TB',"Black");
let Lenovo = new laptop("acer",'8gb','1TB',"Black");
let Hp = new laptop("acer",'8gb','1TB',"Black");
let dell = new laptop("acer",'8gb','1TB',"Black");
console.log(acer);
console.log(Lenovo);
console.log(Hp);

// let inst1 = inst1 instanceof laptop;
// console.log(inst1);

const arrayofnum =[2,3,4,5,6,7,];
let arraylength =arrayofnum.length;
arrayofnum.push(10);
arrayofnum.pop(20);
console.log(arraylength);
console.log(arrayofnum);