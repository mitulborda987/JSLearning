// // DIFFRENCE BETWEEN == AND ===

// var num1 = 10;
// var num2 = "10"; // impliciat conversion
// console.log(num1 == num2); // 10 == "10" String convert into number then compare value; Result = True;

// var num1 = 10;
// var num2 = "10";
// console.log(num1 === num2); // 10 == "10" Strickly cheak Type and Number; Result = False;

// // + oparator Using by 3 TYPE

// //1.Addition of Numbers
// var num1 = 10;
// var num2 = 20;
// var num3 = 30;
// num = num1 + num2 + num3;
// console.log(num);

// // 2.String concatenation

// var myName1 = "Amit"
// var myName2 = "Shah"
// var fullName = myName1 + myName2
// console.log(`My fullName is: ${fullName}`);

// // 3. How to Convert string to number [TYPE CONVERSION]
// // Explicit conversion : Explicit type conversion
// var myName = "10"
// var myNumber = +myName; // "10"===> 10 that is implicit conversion : Automatic type conversion
// console.log(`${myNumber} and it's type ${typeof myNumber}`);

// // Not a Number (NAN) DATA TYPE is Number
// var myName = "Mitul" // String convert in to number by using + oparator
// var result = +myName  // "Mitul" Not convert into number why beacuse of "mitul" is not number but result show that NAN
// console.log(`${result} and it's type is:${typeof result}`);  // Result : NaN and it's type is:number

// // implicit conversion : Automatic type conversion

// console.log(10 + true); // True   = 1
// console.log(10 - false);// False  = 0

// // Implicit conversion to String

// var result = '3' + 2;
// console.log(result); // Result = 32

// var result = '3' + true;
// console.log(result); // Result = 3true

// var result = '3' + undefined;
// console.log(result);// Result = 3undefined

// var result = '3' + null;
// console.log(result);// Result = 3null

// // Implicit Boolean Conversion to Number
// var result;

// var result = '4' - true;
// console.log(result);// Result = 3

// var result = 4 + true;
// console.log(result);// Result = 5

// var result = 4 + false;
// console.log(result);// Result = 4

// // Implicate String Conversion to Number

// var result = '4' - '2';
// console.log(result); // Result = 2
// var result = '4' - 2;
// console.log(result); // Result = 2
// var result = '4' * 2;
// console.log(result); // Result = 8
// var result = '4' / 2;
// console.log(result); // Result = 2

// // Undefined used with number ,booolean or null given NAN
// var result;

// var result = 4 + undefined
// console.log(result);// Result = NaN

// var result = 4 - undefined
// console.log(result); // Result = NaN

// var result = true + undefined;
// console.log(result); // Result = NaN

// var result = null + undefined
// console.log(result); // Result = NaN

// // Explicit conversion : Convert number,string and boolean values to number,in that case we can use Number();

// //String to number
// var result = Number('324');
// console.log(result);// Result = 324

// var result = Number('324e-1');
// console.log(result);// Result = 32.4

// var result = Number(true);
// console.log(result);// Result = 1

// var result = Number(false);
// console.log(result);// Result = 0

// // Explicit Conversion: Invalid String to Number Return NaN

// var result = Number('hello');
// console.log(result); // Result = NaN

// var result = Number(undefined);
// console.log(result); // Result = NaN

// var result = Number(NaN);
// console.log(result); // Result = NaN

// // Explicit conversion : String to number using + operaor

// var numberInString = "100";
// console.log(typeof numberInString); // String

// var myNumber = +numberInString;
// console.log(typeof myNumber); // Number

// // Explicite Conversion: number to string data type conversion using String() Method
// var myNumber = 100;
// console.log(typeof myNumber); // number

// var afterConversion = myNumber.toString();
// console.log(typeof afterConversion); // string

// var num1 = 10
// var num2 = num1 + 1
// console.log(`num1:${num1} , num2:${num2}`); // num1:10 , num2:11

// // Post increament   Postpaid
// var num1 = 10
// var num2 = num1++ //num1 = num1 + 1 // 11
// console.log(`num1:${num1} , num2:${num2}`); // num1:11 , num2:10

// // Pre increament   Prepaid
// var num1 = 10
// var num2 = ++num1
// console.log(`num1:${num1} , num2:${num2}`); // num1:11 , num2:11

// // Three Type of Scope [Globle Scope ,Function Scope ,Block Scope]

// // [1] Globle Scope
// function countWord() {
//     var star ="Good Morning"
//     console.log(star); // "star" variable not allow to access outsaid function
// }
// countWord()

// {
// var myFrd

// }
// console.log(myFrd);

// let myFrd

// console.log(myFrd);
// //👉  🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩

// // 🙋‍👨‍🏫 Daily Lecture 🙋‍👨‍🏫
// // 🙋‍👨‍🏫 06/03/2023  🤩 Session-16 🤩 Topic: Array Collection 🙋‍👨‍🏫

// let totalNumber = [0, 2, 4, 5, 8, 4, 0, 8];
// console.log(totalNumber); // ANS: [0, 2, 4, 5, 8, 4, 0, 8]

// console.log(totalNumber.length); // ANS: 8

// console.log(totalNumber.includes(8)); // ANS: True

// var arrayOfNumber = [10, 20, 25, 15, 30, 5];
// console.log(arrayOfNumber); // ANS: [10, 20, 25, 15, 30, 5]

// arrayOfNumber[3] = 35;
// console.log(arrayOfNumber); // ANS: [10, 20, 25, 35, 30, 5]

// arrayOfNumber[1] = 50;
// console.log(arrayOfNumber); // ANS: [10, 50, 25, 35, 30, 5]

// var arrayOfNumbers = [10, 20, 25, 15, 30, 5];
// console.log("==== Adding element in the last using push() === ");
// arrayOfNumbers.push(40);
// console.log(arrayOfNumbers); // ANS: [10, 50, 25, 35, 30, 5,40]
// console.log("==== Adding element in the first using unshift() === ");
// arrayOfNumbers.unshift(5);
// console.log(arrayOfNumbers); // ANS: [5, 10, 20, 25, 15, 30, 5, 40]

// var arrayOfNumbers = [10, 20, 25, 15, 30, 5];
// console.log(arrayOfNumbers); // ANS: [10, 20, 25, 15, 30, 5]
// console.log("==== Removing last element using pop() === ");
// arrayOfNumbers.pop();
// console.log(arrayOfNumbers); // ANS: [10, 20, 25, 15, 30]
// console.log("==== Removing first element using shift() === ");
// arrayOfNumbers.shift();
// console.log(arrayOfNumbers); // ANS: [20, 25, 15, 30]

// var arrayOfNumbers = [10, 20, 25, 15, 30, 5, 40, 45];
// console.log("==== slice(startIndex) === ");
// const arrayFromIndex3 = arrayOfNumbers.slice(3);
// console.log(arrayFromIndex3); // ANS: [15, 30, 5, 40, 45]

// console.log("==== slice(startIndex, endIndex) === ");
// const subArray = arrayOfNumbers.slice(2, 5);
// console.log(subArray); // ANS: [25, 15, 30]

// console.log("============================");
// var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
// console.log("==== splice(startIndex) === ");
// const splicedArray = arrayOfNumbers.splice(3);
// console.log(`Removed elements from array is: ${splicedArray}`); // ANS: Removed elements from array is: 15,40,45
// console.log(arrayOfNumbers); // ANS: [10, 20, 25]

// var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
// console.log("==== splice(startIndex, deleteCount) === ");
// const splicedArrayWithDeleteCount = arrayOfNumbers.splice(2, 2);
// console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount}`); // Removed elements using deleteCount is: 25,15
// console.log(arrayOfNumbers);// ANS : [10, 20, 40, 45]

// var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
// console.log("==== splice(startIndex, deleteCount) === ");
// const splicedArrayWithDeleteCount15 = arrayOfNumbers.splice(3, 1);
// console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount15}`);//Removed elements using deleteCount is: 15
// console.log(arrayOfNumbers); // [10, 20, 25, 40, 45]

// var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
// const splicedArrayWithDeleteCount2025 = arrayOfNumbers.splice(1, 2);
// console.log(arrayOfNumbers); // ANS : [10, 15, 40, 45]

// var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
// arrayOfNumbers.splice(3, 1);
// console.log(`After removing 15: ${arrayOfNumbers}`); // ANS: After removing 15: 10,20,25,40,45

// console.log("=====splice() to insert one elements without replacing existing element ====================");
// var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
// arrayOfNumbers.splice(2, 0, 22);
// console.log(arrayOfNumbers);// ANS : [10, 20, 22, 25, 15, 40, 45]

// console.log("=====splice() to insert one elements without replacing existing element ====================");
// var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
// // 5, 35, 55
// arrayOfNumbers.splice(4, 0, 5, 35, 55);
// console.log(arrayOfNumbers); // ANS: [10, 20, 25, 15, 5, 35, 55, 40, 45]

// console.log("=====splice() to insert one elements without replacing existing element ====================");
// var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
// arrayOfNumbers.splice(4, 0, 5, 35, 55);
// console.log(arrayOfNumbers);

// console.log("=====splice() to replace one elements ====================");
// var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
// arrayOfNumbers.splice(2, 2, 50, 60);
// console.log(arrayOfNumbers);// ANS: [10, 20, 50, 60, 40, 45]


// 🙋‍👨‍🏫 08/03/2023  🤩 Session-17 🤩 Topic: Array Traversing and Object 🙋‍👨‍🏫
// console.log(`===================Array Traversing=====================`);
// var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
// for (let index = 0; index < arrayOfNumbers.length; index++) {
//     const element = arrayOfNumbers[index];
//     console.log(element); // result : All element set in one column    
// }

// // 06_while_loop.js

// // WAP to print numbers from 0 to 10
// var index=0; // initialization
// while (index<=10) { // condition
//     console.log(index);
//     index++; // Update Expression
// }


// // var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
// // var index = 0
// // while (index<arrayOfNumbers.length) {
// //     console.log(arrayOfNumbers[index]);
// //     index++; 
// // }


// console.log("Even numbers");
// const arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];

// var index=0; // initialization
// let sum = 0;
// while (index<arrayOfNumbers.length) { // condition
//     const element = arrayOfNumbers[index];
//     if(element%2==0) {
//         console.log(element);
//         sum = sum + element;
//     }
//     index++; // Update Expression
// }

// 09_object.js

// Object literals
// let student = {
//     firstName: "Prashant",
//     lastName: "Deshmukh",
//     isWorking: true,
//     age: 22,
//     collegeName: "ABC",
//     id: 123456,
//     address: {
//       street: "Wakad",
//       city: "Pune",
//       PIN: "431204",
//     },
//     school: "Podar School",
//     friends: ["Bill", "Stew", "Elon"],
//     show: function () {
//       console.log("I am show() function");
//     },
//     addressDetails: function () {
//       return `Address is: Street ${this.address.street}, City ${this.address.city}, PIN ${this.address.PIN}`;
//     },
//   };
//   // . Dot Notation
//   console.log(student.firstName); // ANS : Prashant
//   console.log(student.age);// ANS : 22
//   // [] Notation
//   console.log(student["lastName"]);
  
//   // Update property
//   student.collegeName = "COEP PUNE";
//   student.age = "25"
  
//   // Add new property city = "Mumbai"
//   student.city = "Mumbai";
//   student.country = "India";
  
//   // Delete the property
//   delete student.isWorking;
  
//   console.table(student);
  
//   //Empty Object
//   let teacher = {};
//   // firstName = "Mohit"
  
//   const array = [];
  
//   const arrayOfNumbers = [10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26];
//   for (let index = 0; index < arrayOfNumbers.length; index++) {
//     const element = arrayOfNumbers[index];
//     if (element % 2 == 0) {
//         array.push(element);
//     }
//   }
//   console.log(array);



//   let resultAddress = student.addressDetails();
//   console.log(resultAddress);
  
//   student.show();
  
//   console.log(student.friends);
//   console.log(student.friends[student.friends.length - 1]);
  
//   student.address.PIN = 431205;
//   // 431205
//   console.log(student.address.city);
  
//   student.marks = {
//     math: 80,
//     physics: 60,
//     drawing: 70,
//   };
//   student.school = "ABC";
//   console.log(student.marks);
//   console.log((student.address.city = 431205));
//   console.log(student);
//   console.log(typeof student);

// 🙋‍👨‍🏫 08/03/2023  🤩 Session-18 🤩 Topic: Object and Object Traversing 🙋‍👨‍🏫

// Object literals
let student = {
    firstName: "Prashant",
    lastName: "Deshmukh",
    isWorking: true,
    age: 22,
    collegeName: "ABC",
    id: 123456,
    address: {
      street: "Wakad",
      city: "Pune",
      PIN: "431204",
    },
    school: "Podar School",
    friends: ["Bill", "Stew", "Elon"],
    show: function () {
      console.log("I am show() function");
    },
    addressDetails: function () {
      return `Address is: Street ${this.address.street}, City ${this.address.city}, PIN ${this.address.PIN}`;
    },
  };

  student.address.PIN = "123233"
  console.log(student.address);

  let result = student.friends[2]
console.log(result);