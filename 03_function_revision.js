function funName(arg1, arg2, arg3) {
    var add = arg1 + arg2 + arg3
    console.log(`Addition is:${add}`);
}


function addFun(num1, num2) {
    var add = num1 + num2
    return add;
}
var sum = addFun(20, 30);
console.log(`Addition of 20 and 30 is ${sum}`);

function greaterNumber(num1, num2) {
    var result = num1 > num2 ? num1 : num2
    console.log(`Greater number amongst ${num1},${num2} is: ${result}`);
}
greaterNumber(10, -10)
greaterNumber(800, 899)

// sir Code

// function greaterNumber(num1, num2) {
//     var result = num1 > num2 ? num1 : num2;
//     console.log(`Greater number amongst ${num1}, ${num2} is: ${result} `);
// }
// greaterNumber(10, -10);
// greaterNumber(800, 899);


console.log("--------is even or odd number--------");
function isEvenOrOddNum(num) {
    var result = num % 2 == 0? true : false
    return result
}
var result = isEvenOrOddNum(29);
console.log(`29 is Even or Odd --> true - Even, False - Odd: ${result}`);
// var result = ;
console.log(`44 is Even or Odd --> true - Even, False - Odd: ${isEvenOrOddNum(44)}`);


function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "Even": "?Odd";
    return result
}
var result = wordLength("JavaScript");
console.log(`word 'javaScript' has length: ${result}`);