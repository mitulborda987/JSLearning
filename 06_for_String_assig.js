
console.log(`================COUNT VOWELS AND LAST WORD CHARACTER LENGTH ================`);

console.log(`================STEP:1================`);
var countVowel = function (str) {
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index);
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
            || char == "A" || char == "E" || char == "O" || char == "U" || char == "I") {
            count = count + 1;
        }
    }
    return count
}
var count = countVowel("JavaScript is the language Of internet")
console.log("JavaScript is the language Of internet && Total count of vowels in String: ", count);
var count = countVowel("I am Angular Developer")
console.log("I am Angular Developer && Total count of vowels in String: ", count);
var count = countVowel("Hard work and commitment is the key of success")
console.log("Hard work and commitment is the key of success && Total count of vowels in String: ", count);


console.log(`================STEP:2================`);

var reverseStr = function (str) {
    var reverse = "";

    for (let index = str.length - 1; index >= 0; index--) {
        var char = str.charAt(index);
        if (char == " ") {

            break;
        }
        reverse = reverse + char;
        stringLength = reverse.length
    }
    // console.log(reverse);
    return [`${reverse} & total character ${stringLength}`];

}
var result = reverseStr("JavaScript is the language Of internet");
console.log(`last word : ${result}`);
var result = reverseStr("I am Angular Developer");
console.log(`last word : ${result}`);
var result = reverseStr("Hard work and commitment is the key of success");
console.log(`last word : ${result}`);