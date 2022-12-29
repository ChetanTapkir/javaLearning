class Employee{
    constructor(name,id,age,city)
    {
        this.name=name;
        this.id=id;
        this.age=age;
        this.city=city;
    }
}
let empsmith =new Employee("smith",33,30,'pune');
let empjay=new Employee("jay",33,30,'pune');
let empsagar =new Employee("sagar",33,30,'pune');
console.log(empsmith);
console.log(empjay);
console.log(empsagar.age,empsagar.city,empjay.age);