// var great = '   How are you    '
// console.log(great)

// var greatLenth = great.length
// console.log('Total string length: ', greatLenth)

// var characterAtindex = great.charAt(0)
// console.log('String last index number: ', characterAtindex)

// var lastcharacter = great.charAt(greatLenth - 1)
// console.log('last character in this string: ', lastcharacter)

// var indexOfR = great.indexOf('r')
// console.log('R character index number in this string ', indexOfR)

// var great = '   How are you    '
// var spaceTrim = great.trim()
// console.log(
//   'Removing extra start and end spaces using trim(): ',
//   spaceTrim,
//   spaceTrim.length,
//   great.length,
// )

// var Includes = great.includes('are')
// console.log("Substring 'are' present in string: ", Includes)

// var stringSlice = great.slice(2, 7)
// console.log(stringSlice)


// //Function with no argument and no return

// function gretting() {
//   console.log(`How are you?, What do you mean?`);
// }
// gretting();


// //Function with arguments and no return 
// function gret(what) {
//   console.log(`Meaning full msg ${what}`);
// }
// gret(`Good Morning`);


// //function with no argument and return

// function personalDetails() {
//   var myName = `  Nelson mandela   `
//   return myName
// }
// var fname = personalDetails()
// console.log(fname);

// //function with argument and return 
// // var num1 = 10;
// // var num2 = 15;
// // var num3 = 20;

// function greatt(num1, num2, num3) {
//   var calculation = num1 * num2 * num3;
//   return calculation;
// }
// var multiplication = greatt(10, 15, 20);
// console.log(multiplication);



// function india() {
//   var string = `JavaScript strings are for storing and manipulating text.`
//   console.log(`Given string: ${string}`);

//   var stringLenth = string.length
//   console.log(`String leanth is: ${stringLenth}`);

//   var stringType = string.search(`text`)
//   console.log(`stringType: ${stringType}`);

//   var stringValue = string.valueOf().substring(17, 25);
//   console.log(`String Value: ${stringValue}`);
// }
// india();


// function star() {
//   var numberofcolumn = 5;
//   for (let i = 1; i <= numberofcolumn; i++) {
//     // const element = array[`*`];
//     console.log('*');
//   }
// }
// star();


num1 = 10;
num2 = 1;
num3 = 3;
num4 = 2;
// num5 = 4;

function myFunction(num1,num2,num3,num4) {
  var cal = num1 - num2 / num3 * num4;
  return cal
}
var result = myFunction(num1,num2,num3,num4);
console.log(result);





















