class employee1 {
constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
this.emp_id=emp_id;
this.emp_name=emp_name;
this.emp_dept=emp_dept;
this.emp_salary=emp_salary;
this.emp_company=emp_company;
}
}
let  emp_anil =new employee1(22,"Anil","IT",5000,"TCS");
let  emp_radha =new employee1(33,"Radha","HR",74000,"Wipro");
let emp_rishi =new employee1(55,"Rishi","Finance",45000,"TCS");
let emp_sonali =new employee1(66,"Sonali","Finance",45000,"Wipro");
let emp_monika=new employee1(77,"Monika","IT",40000,"Wipro");
let emp_viny =new employee1(88,"Vinayak","IT",75000,"TCS");
let emp_mahi=new employee1(99,"Mahesh","HR",85000,"Infy");

const array123=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

array123.forEach((dept) => {
if(dept.emp_company=="TCS"){
    console.log(dept.emp_name);
}    
});

array123.forEach(dept => {
    if(dept.emp_salary>=50000){
        console.log(dept.emp_id,dept.emp_company,dept.emp_name,dept.emp_salary);
    }    
    });

