var jstring ="I Am Learning, The Language of Internet"
var jstring2 ="MY favourite Movie Is Logan"
var ab =jstring.length;

var count =0

var countCharA =function()
{
for (let index=0 ; index<jstring.length; index++)
{
var char =jstring.charAt(index);
if (char==`a`|| char==`A`)
{
    console.log(char);
    count =count+1;
    // return count;
    // var b=char.length;
    // console.log(b);
}

}
console.log(`total letters are: ${count}`);
}
countCharA();

var countCharA =function()
{
for (let index=0 ; index<jstring2.length; index++)
{
var char =jstring2.charAt(index);
if (char==`a`|| char==`A`)
{
    console.log(char);
    count =count+1;
    // return count;
    // var b=char.length;
    // console.log(b);
}

}
console.log(`total letters are: ${count}`);
}
countCharA();