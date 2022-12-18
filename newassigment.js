
console.log(`========check age ass1========`);
var checkage = function(age)
{
if (age>18 && age<120)
{console.log(`age is ${age} eligible for vote`); }
if (age<18 && age >0)
{console.log(`age of ${age} is not eligible for vote`);}
if (age<=0 || age >120)
{console.log(`given age ${age}is invalid data`);}
}
checkage(47);
checkage(17);
checkage(8);
checkage(20);
checkage(-10);
checkage(200);
checkage(0);
console.log(`========grade system ass2========`);
var checkgrade = function(marks)
{
    if (marks>90)
    {console.log(`fantastick marks ${marks} your grade is A+`);}
    if (marks>75 && marks<90)
    {console.log(`Excellent marks ${marks} your grade is A`);}
    if (marks>50 && marks<75)
    {console.log(`good  marks ${marks} your grade is B`);}
    if (marks>35 && marks<50)
    {console.log(` marks is  ${marks} your grade is C need to Improve`);}


    if (marks<=0 || marks>100)
    {console.log(`Please provide valid marks  ${marks} `);}

}
checkgrade(98);
checkgrade(80);
checkgrade(90);
checkgrade(0);
checkgrade(150);
checkgrade(-7);
checkgrade(35);
checkgrade(29);
checkgrade(64);
checkgrade(49);