var chetan="           Hey you are doing good,keep it up        ";
console.log("1]The String Is   :",chetan);
var leg = chetan.length;
console.log("2]The String length Is  :",leg);
var a=chetan.trim();
console.log("3]after removing spaces using trim()  :",a);
var b=a.length;
var c=leg-b;
console.log("4] total spaces   :",c);
var d=a.trimStart();
console.log("After remove space starting of  string is ",a.charAt(0),"and Ending of string is",a.charAt(b-1));
console.log(`the index of word good in trim string is  ${a.indexOf("good")}`);
console.log(`Sustring Using Index22 using substring : ${a.substring(22)}`);
console.log(`Sustring Using Index22 using slice : ${a.slice(22)}`);
console.log(`is string end with "up" after trim : ${a.endsWith("up")}`);
console.log(`is string starts  with "hey" after trim : ${a.startsWith("Hey")}`);
