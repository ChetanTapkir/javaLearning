// let isNotesPrepared =false;
// let primisetoshareNotes =new Promise(function(success,reject){
//     if(isNotesPrepared){
//         success("hey guys take this notes please...")
//     }else{
//         reject("Sorry guys ,I didint get time today ");
//     }
// });
// primisetoshareNotes.then( function success(fullfilled){
//     console.log("promise full filled");
//     console.log(fullfilled);
// }).catch(function failure(rejected){
//     console.log("sir why do u have not provided notes");
//     console.log(rejected);
// }).finally(function(){
//     console.log("=============================");
//     console.log("I must have notes -whether sir will give or not");
//     console.log("in case sir shared notes i will use it");
//     console.log("in case sir will not shared notes - I will prepare my own");
// });

let isNotesPrepared =false;
let primisetoshareNotes =new Promise((success,reject)=>{
    if(isNotesPrepared){
        success("hey guys take this notes please...")
    }else{
        reject("Sorry guys ,I didint get time today ");
    }
});
primisetoshareNotes.then( function success(fullfilled){
    console.log("promise full filled");
    console.log(fullfilled);
}).catch(function failure(rejected){
    console.log("sir why do u have not provided notes");
    console.log(rejected);
}).finally(function(){
    console.log("=============================");
    console.log("I must have notes -whether sir will give or not");
    console.log("in case sir shared notes i will use it");
    console.log("in case sir will not shared notes - I will prepare my own");
});




