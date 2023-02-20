console.log("=========Function with No arguments and No return=========");
function myChoice() {
    console.log('"Hello"');
}
myChoice();

function myMsg() {
    console.log('"How are you?"');
}
myMsg();


function personalDetails(firstName, lastName, collegeName) {
    console.log(firstName, lastName, collegeName);
}
personalDetails("Mitul", "Borda", "VNSGU");

console.log("=========Function with arguments and No return=========");

function swapValuesDude(value1, value2) {
    console.log("=========Before Swap=========");
    console.log(value1, value2);
    console.log("=========After Swap=========");
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log(value1, value2);
}
swapValuesDude("virat", "anushka");
swapValuesDude("1000", "2000");

console.log("=========Function with arguments and return=========");

function addThreevalues(value1, value2, value3) {
    var sum = value1 + value2 + value3;
    return sum;
}
var sumResult = addThreevalues(10.23, 600, 40)
console.log(sumResult);

var sumResult = addThreevalues("Hello ", "Good ", "Morning ")
console.log(sumResult);