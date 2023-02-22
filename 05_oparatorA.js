
console.log(`*********************String Length And Square**********************`);

function squareOfWorldLength(language) {
    console.log(`String name: ${language}`);
    var Length = language.length
    console.log(`String length is: ${Length}`);
    var LengthSquare = Length ** 2;
    return (`Square of length: ${LengthSquare}`);
}
var result = squareOfWorldLength(`JavaScript`);
console.log(result);
console.log(`*******************************************`);
var result = squareOfWorldLength(`Google Chrome`);
console.log(result);
console.log(`*******************************************`);
var result = squareOfWorldLength(`Devloper Smart`);
console.log(result);

console.log(`************Function with no arguments and no return value*************`);

function gretting() {
    var str = "I am Angular Developer"
    console.log(`String Name: ${str}`);
    var StringLenth = str.length
    console.log(`String Length: ${StringLenth}`);
    var division = StringLenth / 4;
    console.log(`String Divided: ${division}`);
    var multiplication = StringLenth * 4;
    console.log(`String Multiplication: ${multiplication}`);
}
gretting();

