var sentence ="yes we can do it AND WE WILL DO IT";
var count=0;

for (let index = 0; index < sentence.length; index++) {
    var char = sentence.toLowerCase();
    var charcopy =char.charAt(index);    
    if(charcopy=="a"||charcopy=="e"||charcopy=="i"||charcopy=="o"||charcopy=="u")
    {
        console.log(`owels find in given string ${charcopy}`);
        count=count+1;
    }   
}console.log(`no of owels find in string ${count}`);