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


// num1 = 10;
// num2 = 1;
// num3 = 3;
// num4 = 2;
// // num5 = 4;

// function myFunction(num1,num2,num3,num4) {
//   var cal = num1 - num2 / num3 * num4;
//   return cal
// }
// var result = myFunction(num1,num2,num3,num4);
// console.log(result);

// function mathRandom() {
//   var math = Math.round(Math.random() * (100 - 1) + 1);
//   console.log(math);
//   var evenOdd = math % 2 ? `Even` : `ODD`
//   return evenOdd;
// }
// var result = mathRandom();
// console.log(result);

// function stringCut() {
//   var open = `i_am_talking_about_our_future_idea's.:_5G_Broadbend`;
//   var stringLenth = open.length;
//   var stringNumber = stringLenth % 2 == 0 ?`we will get EVEN Number`:`we will get ODD Number`;
//   console.log(stringNumber);
//   var SubString = open.substring(15);
//   return SubString;
// }
// var result = stringCut();
// console.log(result);

// // console.log(Math.floor(Math.random() * 10));
// var result = Number('324e-5');
// console.log(result);// Result = 32.4


// var num = 56
// var resul = num.toString()
// console.log(resul); // Result = 0
// console.log(typeof resul );
// console.log(typeof 56 );

// // Defining a function expression
// const mk = function(x, y) {
//   return x * y;
// };

// // Using the function expression
// console.log(mk(2,5)); // Output: 5




// console.log(`How to find prime number`);
// var primeNumber = function (num) {
//   for (let index = 2; index < num; index = index + 1) {
//     if (num % index == 0) {
//       console.log(`given ${num} is not a prime number`);
//       break;
//     }else{
//       console.log(`given ${num} is a prime number`);

//     }
//   }
// }
// primeNumber(2)
// primeNumber(3)
// primeNumber(4)
// primeNumber(5)
// primeNumber(6)
// primeNumber(7)
// primeNumber(8)
// primeNumber(9)
// primeNumber(10)
// primeNumber(15)
// primeNumber(16)
// primeNumber(17)
// primeNumber(0)
// primeNumber(-1)

// for (let index = 2; index <= 10; index = index + 1) {
//   if (index % 2 == 0) {
//     console.log(`given ${index} is not a prime number`);

//   } else {
//     console.log(`given ${index} is a prime number`);
//   }

// }
// var num = 15
// for (let index = 2; index < 15; index++) {
//   if (num % index == 0) {
//     console.log(`${index} that is prime number.`);
//   }
//   else {
//     console.log(`${index} that is Not prime number.`);
//   }
// }

// function isPrime(n) {
// 	// Check if n=1 or n=0
// 	if (n <= 1)
// 		return false;
// 	// Check if n=2 or n=3
// 	if (n == 2 || n == 3)
// 		return true;
// 	// Check whether n is divisible by 2 or 3
// 	if (n % 2 == 0 || n % 3 == 0)
// 		return false;
// 	// Check from 5 to square root of n
// 	// Iterate i by (i+6)
// 	for (var i = 5; i <= Math.sqrt(n); i = i + 6)
// 		if (n % i == 0 || n % (i + 2) == 0)
// 			return false;

// 	return true;
// }

// // Driver Code
// isPrime(2)
// isPrime(3)
// isPrime(5)
// isPrime(7)
// isPrime(15)
// isPrime(11)
// isPrime(13)
// isPrime(17)
// isPrime(19)


// 	? console.log("true")
// 	: console.log("false");


let count = 0
let i, j
for (j = 2; j <= 10; j++) {

  for (i = 1; i <= j; i++) {
    if (j % i == 0)
      count++
  }
  if (count == 2)
    console.log(j)
  count = 0
}


var num1 = 10
var num2 = num1 + 1
console.log(`num1:${num1} , num2:${num2}`); // num1:10 , num2:11

// Post increament  
var num1 = 10
var num2 = num1++ //num1 = num1 + 1 // 11
console.log(`num1:${num1} , num2:${num2}`);// num1:11 , num2:10

var num1 = 10
var num2 = ++num1
console.log(`num1:${num1} , num2:${num2}`);// num1:11 , num2:11

