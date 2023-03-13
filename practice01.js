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

// let str = "JavaScript is the language Of internet"
// charAT = str.charAt(15)
// console.log(charAT);

// strIndexOf = str.indexOf("i")
// console.log(strIndexOf);

// strIndexOf = str.toLocaleUpperCase()
// console.log(strIndexOf);

// let totalNumber = [0,2,4,5,8,4,0,8]
// console.log(totalNumber);
// console.log(totalNumber.length);
// console.log(totalNumber.includes(8));

// var arrayOfNumber = [10,20,25,15,30,5]
// console.log(arrayOfNumber);
//  arrayOfNumber[3] = 35;
// console.log(arrayOfNumber);

// arrayOfNumber[1] = 50;
// console.log(arrayOfNumber);

// var arrayOfNumbers = [10, 20, 25, 15, 30, 5, 40, 45];
// console.log(arrayOfNumbers);

// console.log("==== slice(startIndex) === ");
// let show = arrayOfNumbers.slice(3);
// console.log(show);

// var arrayOfNumbers = [10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26];

// index = 0;
// while (index <= arrayOfNumbers.length) {
//     console.log(arrayOfNumbers.index);
//     index++;
// }

// var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

// const evenNumbers = [];
// for (let index = 0; index < arrayNumber.length; index++) {
//   if (arrayNumber[index] % 2 == 0) {
//     evenNumbers.push(arrayNumber[index]);
//   }
// }
// console.log(`4. Given Array in Even Numbers: ${evenNumbers}`);

// const shiv = {
//     firstName: "Shivam",
//     lastName:"borda",
//     college: "Dharuka"
// }

// console.log(shiv.college);
// // shiv.lastName = "Patil"
// // delete shiv.college
// shiv.Address = "Maruti Nandan"
// console.table(shiv)

// function isPrime(num) { // returns boolean
//     if (num <= 1) return false; // negatives
//     if (num % 2 == 0 && num > 2) return false; // even numbers
//     const s = Math.sqrt(num); // store the square to loop faster
//     for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
//         if(num % i === 0) return false; // modulo shows a divisor was found
//     }
//     return true;
//   }
// let result = isPrime(11);
// console.log(`Given Number 11 is Prime Number.`);

// const number = [1,5,9,2,4,3,6,1]
// console.log(typeof number);

// const student = {
//   firstName: "Elon",
//   lastName: "Musk",
//   age: 54,
// };
// const address = {
//   country: "US",
//   city: "Silicon Valley",
//   PIN: "QA2345",
//   friends : []
// };
// address.code = `001`
// console.log(address);

// let frd = ["mk","kk","ck","bg"]
//  address.friends.push(frd)
// console.log(address.friends);
// console.log(address.friends[0]);
// delete address.PIN
// address.country = "india"
// console.log(address);

// const mergedObject = Object.assign({},student,address)
// console.table(mergedObject);

// const newObject = {}
// Object.assign(newObject,student,address)
// console.table(newObject);

// Object.assign(student,address)
// console.table(student);

// Object.assign(address,student)
// console.table(address);
// console.log(address);

// JavaScript program to add array into
// an object using push() function

// Creating a JS object to add array into it

// const student1 = {
//   firstName: "Elon",
//   lastName: "Musk",
//   age: 54,
//   address: {
//     country: "US",
//     city: "Silicon Valley",
//     PIN: "QA2345",
//   },
// };

// const student2 = {
//   firstName: "Gautam",
//   lastName: "Adani",
//   age: 60,
//   address: {
//     country: "India",
//     city: "Mumbai",
//     PIN: "123456",
//   }
// };

// let arrayOfStudent = [student1, student2];

// function studentDetails() {
// for (const key in arrayOfStudent) {
//   if (Object.hasOwnProperty.call(arrayOfStudent, key)) {
//     const element = arrayOfStudent[key];
//     console.log(`firstName:${element.firstName},lastName:${element.lastName},age:${element.age},
//     country:${element.address.country},City:${element.address.city},PIN:${element.address.PIN}`);
//   }
// }
// }
// studentDetails()

// class StudentDetail {
// constructor(firstName,lastName,collegeName){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.collegeName = collegeName
// }
// }
// const school = new StudentDetail( "Shiv","Patel","SVS")
// console.log(school);


var firstName;
firstName = "virat";

var lastName = "kohli";
firstName = "King Kohli"

 var lastName;
 console.log(lastName);

var num = 10
 if (num = 10) {
    var gret = "Good morning"
 }
 console.log(gret);

 function greet() {
  
 }