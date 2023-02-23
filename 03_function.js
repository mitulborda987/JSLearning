
var num1 = 100;
var num2 = 200;
function swapVariables(value1, value2) {
    //var value1 = num1, value = num2
    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2
    value2 = temp;
    console.log("After Swap: ", value1, value2);
}
swapVariables(num1, num2); // Function call or Function invoke


// Function with no arguments and no return value
function showFullName() {
    console.log("My Full Name is: Borda Mitul");

}
showFullName(); //Function call or Function invoke 

// Function with arguments and no return value
function showAge(age) {
    console.log("My age is: ", age);
}
showAge(24);

// Function with no arguments and return value
function fullName() {
    var name = "Mitul Borda";
    return name;
}
var fName = fullName();
console.log(fName);

// Function with arguments and return value
function sumOfNumbers(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    return sum;
}
var sumResult = sumOfNumbers(10, 45, 79);
console.log(sumResult);




var num1 = 100;
var num2 = 200;

var str1 = "Sweety"; // Cutey
var str2 = "Cutey"; // Sweety

var name1 = "Billgates";
var name2 = "Stew Jobs";

function swapVariables(value1, value2) {
    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, value2);
    // return "Swapping variables successfully completed";
}
var swapResult = swapVariables(num1, num2); // Function call or Function invoke
console.log(swapResult);

var swapResult2 = swapVariables(str1, str2);
console.log(swapResult2);

var swapResult2 = swapVariables(name1, name2);
console.log(swapResult2);




