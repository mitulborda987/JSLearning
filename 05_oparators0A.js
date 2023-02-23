console.log(`******Assignment 0A******`);

console.log(`******1.Find the greatest number******`);
function greaterNumber(num1, num2) {
    console.log(numberCheak = num1 > num2 ? `True:Number 10 is more than -10` : `False:Number 800 is not more than 899`);
}
greaterNumber(10, -10)
greaterNumber(800, 899)

console.log(`******2.Cheak the number EVEN or ODD******`);
function isEvenOrOddNum(num) {
    var evenOdd = num % 2 == 0 ? `EVEN` : `ODD`
    return evenOdd;
}
var result = isEvenOrOddNum(29)
console.log(`29 is ${result} Number`);
var result = isEvenOrOddNum(44)
console.log(`44 is ${result} Number`);
var result = isEvenOrOddNum(0)
console.log(`0 is ${result} Number`);
var result = isEvenOrOddNum(101)
console.log(`101 is ${result} Number`);

console.log(`******3.Cheak EVEN or ODD Length******`);
function wordLength(word) {
    var javaScript = word.length;
    var result = javaScript % 2 == 0 ? "EVEN" : "ODD"
    return result
}
var result = wordLength("JavaScript")
console.log(`JavaScript length is ${result} number`);
var result = wordLength("developer")
console.log(`devloper length is ${result} number`);
var result = wordLength("Google")
console.log(`Google length is ${result} number`);







