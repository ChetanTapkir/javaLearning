let str ="jkj";
let emtysrt ="";

for(let i=str.length-1;i>=0;i--)
{
    let char=str.charAt(i);
    emtysrt=emtysrt+char;
}
console.log(emtysrt);
if(str==emtysrt)
{
    console.log(`given str is polindrom :${str}`);
}else{
    console.log(`given str is not polindram:${str}`);
}