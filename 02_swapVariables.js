console.log('----------Before Swapping----------');

var sweety = "Sweety";
var cutie = "Cutie"
console.log(sweety, cutie);

console.log('----------After Swapping----------');

var temp = sweety
var sweety = cutie
cutie = temp;
console.log(sweety, cutie);


console.log('----------Before Swapping----------');
var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log(num1, num2, num3);

console.log('----------After Swapping----------');

var temp = num1
var num1 = num2;
num1 = temp;

var temp = num2 
var num2 = num3;
num3 = temp;

var temp = num3
var num3 = num1;
num1 = temp;

console.log(num1, num2, num3);



// console.log("Swapping variables");
// var num1 = 100;
// var num2 = 200;
//  var temp =num1
// num1=num2 