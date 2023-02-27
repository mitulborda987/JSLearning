console.log(`============STEP 1============`);
function cheakEvenOdd(num) {
    if (num % 2 == 0) {
        return `Even`
    }
    if (num % 2 !== 0) {
        return `Odd`
    }
}
var result = cheakEvenOdd(45)
console.log(`45 is ${result} Number.`);
var result = cheakEvenOdd(70)
console.log(`70 is ${result} Number.`);
var result = cheakEvenOdd(67)
console.log(`67 is ${result} Number.`);
var result = cheakEvenOdd(98)
console.log(`98 is ${result} Number.`);

console.log(`============STEP 2============`);


function voteEligibility(age) {
    if (age >= 18) {
        return `You are eligible for Votting.`
    }
    if (age<18) {
        return `You are not eligible for Votting.`
    }
}
var result = voteEligibility(18)
console.log(`Your age is 18 and ${result}`);
var result = voteEligibility(20)
console.log(`Your age is 20 and ${result}`);
var result = voteEligibility(17)
console.log(`Your age is 17 and ${result}`);
var result = voteEligibility(40)
console.log(`Your age is 40 and ${result}`);

console.log(`============STEP 3============`);


function characterCheak(char) {
    if (char.length>10) {
        return `Given string "JavaScript-ES6" Contains more than 10 character`
    }
}
var result = characterCheak("JavaScript-ES6")
console.log(result);

console.log(`============STEP 4============`);

function stringCheak(string) {
    if (string.startsWith("Java")) { 
        return `Yes string start with "Java".`
    }
    // if ((string.startsWith("Java"))) {
    //     return `No string  dose not start with Java`
    // }
}
var result = stringCheak("JavaScript Language")
console.log(result);