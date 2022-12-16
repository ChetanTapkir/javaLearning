
// if ssc mark >=35 
var sscMark = 34;
var resPF = sscMark>=35 ?"pass":"fail";
console.log(`result is ${resPF}`);

var sscMark = 36;
var resPF = sscMark>=35 ?"pass":"fail";
console.log(`result is ${resPF}`);

var sscRes = function(sscMark)
{
    // var resPF = sscMark>=35 && !(sscMark>100) ?"pass":"fail";
    var resPF = (0<sscMark>100)?"invalid Data":(sscMark>=35 && !(sscMark>100) ?"pass":"fail")
    return resPF;
};


console.log(`result for 40 ${sscRes(40)}`);
console.log(`result for 23 ${sscRes(23)}`);
console.log(`result for 60 ${sscRes(60)}`);
console.log(`result for 1200 ${sscRes(1200)}`);
console.log(`result for "ashj" ${sscRes("ashj")}`);
console.log(`result for -12 ${sscRes(-12)}`);