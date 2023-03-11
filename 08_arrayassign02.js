var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let totalElements = arrayNumber.length
console.log(`1. Total Elements available in array : ${totalElements}`);
console.log(`===========================================================`);
let firstElement = arrayNumber[0]
let lastElement = arrayNumber[arrayNumber.length - 1]
console.log(`2.First Element in Array: ${firstElement} and Last Element in Array: ${lastElement}`);
console.log(`===========================================================`);
let thirdlastElement = arrayNumber[arrayNumber.length - 3]
console.log(`3.ThirdLast Element in Array: ${thirdlastElement}`);
console.log(`===========================================================`);
const evenNumbers = [];
for (let index = 0; index < arrayNumber.length; index++) {
  if (arrayNumber[index] % 2 == 0) {
    evenNumbers.push(arrayNumber[index]);
  }
}
console.log(`4. Given Array in Even Numbers: ${evenNumbers}`);
console.log(`===========================================================`);
const oddNumbers = [];
for (let index = 0; index < arrayNumber.length; index++) {
  if (arrayNumber[index] % 2 !== 0) {
    oddNumbers.push(arrayNumber[index]);
  }
}
console.log(`5. Given Array in Odd Numbers: ${oddNumbers}`);
console.log(`===========================================================`);
let evenIndexNumbersElement = [];
let sumOfEvenElements = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    if (index % 2 == 0) {
        element = arrayNumber[index];
        evenIndexNumbersElement.push(element);
        sumOfEvenElements = sumOfEvenElements + element;
    }
}
console.log(
    `6. Given Array in Even Position (Even Index Number) Element: ${evenIndexNumbersElement}`
);
console.log(`Sum of Odd Position Element: ${sumOfEvenElements}`);
 console.log(`===========================================================`);
let oddIndexNumbersElement = [];
let sumOfOddElements = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    if (index % 2 !== 0) {
        const element = arrayNumber[index];
        oddIndexNumbersElement.push(element);
        sumOfOddElements = sumOfOddElements + element;
    }
}
console.log(`7. Given Array in Odd Position (Odd Index Number) Element: ${oddIndexNumbersElement}`);
console.log(`Sum of Odd Position Element: ${sumOfOddElements}`);
// const evenIndexNumbersElement = [];
// let sumOfEvenElements = 0;
//  for (let index = 0; index < arrayNumber.length; index = index + 2) {
//    const element = arrayNumber[index];
//    evenIndexNumbersElement.push(arrayNumber[index]);
//    sumOfEvenElements = sumOfEvenElements + element;
//  }
//  console.log(`6. Given Array in Even Position (Even Index Number) Element: ${evenIndexNumbersElement}`);
// console.log(`Sum of Odd Position Element: ${sumOfEvenElements}`);
//  console.log(`===========================================================`);
// const oddIndexNumbersElement = [];
// let sumOfOddElements = 0;
// for (let index = 1; index < arrayNumber.length; index = index + 2) {
//   const element = arrayNumber[index];
//     oddIndexNumbersElement.push(arrayNumber[index]);
//     sumOfOddElements = sumOfOddElements + element;
// }
// console.log(`7. Given Array in Odd Position (Odd Index Number) Element: ${oddIndexNumbersElement}`);
// console.log(`Sum of Odd Position Element: ${sumOfOddElements}`);
 console.log(`===========================================================`);
let sum = 0;
for (let index = 0; index < arrayNumber.length; index++) {
  let Element = arrayNumber[index];
  sum = sum + Element;
}
console.log(`8. Sum of All Elements: ${sum}`);
 console.log(`===========================================================`);
let multiple = [];
for (let index = 0; index < arrayNumber.length; index++) {
  var givenElement = arrayNumber[index]
  if (givenElement % 5 == 0) {
      multiple.push(arrayNumber[index])
  }
}
console.log(`9. Numbers which are the multiple of 5 is: ${multiple} `);
 console.log(`===========================================================`);

let is115 = arrayNumber.includes(115)
console.log(`10. 115 Number is Available in Array:${is115}`);
console.log(`===========================================================`);

let is23 = arrayNumber.includes(23)
console.log(`11. 23 Number is Available in Array:${is23}`);
 console.log(`===========================================================`);
 arrayNumber.splice(3,0,55,66)
  console.log(`12. Inserting 55 and 66 element Before index3: ${arrayNumber} `);
 console.log(`===========================================================`);
arrayNumber.splice(4,3)
console.log(`13. Delete 3 Elements from index 4: ${arrayNumber}`);
