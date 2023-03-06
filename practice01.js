// How to print reverse string 

// var str = "How Are You?"
// var reverse = ""
// for (let index = str.length - 1; index >= 0; index--) {
//     return reverse = reverse + charAt
// }

// function reverceString(str) {
//     var reverse = " "
//     var count = 0;
//     for (let index = str.length - 1; index >= 0; index--) {
//         var charAt = str.charAt(index)
//         reverse = reverse + charAt
//         if (charAt == " ") {
//             count = count + 1
//             console.log(count);
//         }
//     }
//     return reverse
// }
// // var result = reverceString("How Are You?")
// // console.log(result);
// var result = reverceString("How Are  You?")
// console.log(`Total number of space in the string:${result}`);

// IF ELSE IF ASSIGNMENT  

// function marriageEligibility(gender, age) {
//     if (gender = "Male" && age >= 21 && age <35) {
//         console.log(`You are ${age} year old Male so, you are Eligible for Marriage.`);
//         // console.log(`Your age is ${age} and you are Eligible for Marriage.`);
//         return
//     } else if (gender = "female" && age >= 18 && age <35) {
//         console.log(`You are ${age} year old Female so, you are Eligible for Marriage.`);
//         return
//     }else if (gender = "other" && age>=35) {
//         console.log(`Your age is ${age} and you are Not Eligible for Marriage.`);
        
//     }
//     else{
//         // console.log(`You are ${age} year old ${gender} so, you are Not Eligible for Marriage.`);
//         console.log(`Your age is ${age}  and you are Not Eligible for Marriage.`);
//     }
// }
// marriageEligibility("Male", 17)     // male>=21
// marriageEligibility("Male", 25)     // female>=18
// marriageEligibility("female", 28)
// marriageEligibility("female", 16)
// marriageEligibility("other", 35)
// marriageEligibility("other", 41)


let str = "JavaScript is the language Of internet"
charAT = str.charAt(15)
console.log(charAT);

strIndexOf = str.indexOf("i")
console.log(strIndexOf);

strIndexOf = str.toLocaleUpperCase()
console.log(strIndexOf);



