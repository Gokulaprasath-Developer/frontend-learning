//functions
//-normal,we need to call,reusability

//function declaration
function add(a,b){
    console.log(a + b)
}
add(1,22);
add(23,7);
//console.log is used to print the value else use return

function sub(a,b){
    console.log("gokul")
    return a - b
    console.log("apple")
}
sub(12,4);
//code after return won't execute
//code will be executed to print use console function

console.log(sub(12,4));

//function expression

//let > var : because var doesn't throw error but let will do.

var age = 12;
var age = 14;
var age = 36;
console.log(age)

//here i declared several times but doesnt throw any error


// let agee = 12;
// agee = 34;
// let agee = 35;
// console.log(agee);

//here this is thrown the error so the code will be safer.

const birthyear = 2000;
birthyear = 2003;
console.log(birthyear);

//var-declare,reassign,redeclare
//let-declare,reassign
//const-declare.
