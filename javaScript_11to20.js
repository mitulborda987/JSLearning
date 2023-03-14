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
    },ction () {
      return `Address is: Street ${this.address.street}, City ${this.address.city}, PIN ${this.address.PIN}`;
    },
    addressDetails: fun

  };

  student.address.PIN = "123233"
  console.log(student.address);



  let result = student.friends[student.friends.length - 1]
console.log(result);