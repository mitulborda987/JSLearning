// 🙋‍👨‍🏫 14/03/2023  🤩 Session-21 🤩Topic: Shallow and Deep clone with memory management 🙋‍👨‍🏫

let n1 = 100;// 200
let n2 = n1;  // Deep clone
console.log(n2);// 100
n1 = 200;
console.log(n2);//

let s1 = "Hey JS";
let s2 = s1; // Deep clone

let b1 = true;
let b2 = b1; // Deep clone

console.log(`---------------------------------------`);
const person = {
    fullName: "MS Dhoni",
    age: 38
}
const player = person; // Shallow clone
// player.fullName = "Captain cool Dhoni";
console.log(player); // Ans: {fullName: 'MS Dhoni', age: 38}
console.log(person); // Ans: {fullName: 'MS Dhoni', age: 38}
// Discreption🙋‍👨‍🏫: palayer and person object ma valu same rahe 

console.log("Deep clone using spread operator");
const newPlayer = { ...person }; // Deep clone using spread operator
console.log(newPlayer);
newPlayer.age = 42;
console.log(`newPlayer ==> ${newPlayer.fullName} ${newPlayer.age}`);// Ans: newPlayer ==> MS Dhoni 42
console.log(`person ==> ${person.fullName} ${person.age}`);// Ans: person ==> MS Dhoni 38
// Discreption🙋‍👨‍🏫: new object ni valu ma change karvathi new object ni value j change thashe and
//              old object ni valu same j rahe. 

console.log(`---------------------------------------`);
// Nested objec  (Object in object)
const student = {
    fullName: "Virat Kohli",
    age: 33,
    address: {
        street: "AS CLUB",
        city: "PUNE",
        PIN: 431202
    }
}
const newStudent = { ...student }; // Deep clone using spread operator for nested object
newStudent.fullName = "King Kohli";
newStudent.address.city = "Mumbai";

console.log(`newStudent==> ${newStudent.address.city}`); //newStudent==> Mumbai                                                   
console.log(`student==> ${student.address.city}`);      //    student==> Mumbai
/* Discreption🙋‍👨‍🏫: ahi newstudent object ma city nu name change karvathi, newstudent object ma j 
                     object nu name change thvu joiye, but ahi banne object ma name change thay che 
                     mate ahi (...)Spread operator fail thay che. */

/* Why fail (...)Spread operator? (object ma object che mate )
==> ahi new object newStudent ma rahel address object ae original object ma rahela 
   address ne point kari le che mate city ni value same aape che. aa problem sort karva stringfy method no use thay.*/

   /* jyare newstudent object ma fullname change karva ma aave tyare te newstudent ma j change thay che 
    original object ma nai.  */

console.log(`newStudent==> ${newStudent.fullName}`); //newStudent==> King Kohli
console.log(`student==> ${student.fullName}`);      //student==> Virat Kohli
console.log(`---------------------------------------`);

console.log("Deep clone using spread String.json()");
const bank = {
    bankName: "SBI Bank",
    accountNo: 3456789,
    bankAddress: {
        city: "Banglore",
        PIN: 5556677
    }
}
const newBank = JSON.parse(JSON.stringify(bank));
newBank.bankAddress.PIN = 999999;
console.log(`bank==> ${bank.bankAddress.PIN}`);// 
console.log(`newBank==> ${newBank.bankAddress.PIN}`);// 

const array = [5, 6, 3, 2, 1]
const clonedArray = [...array]
clonedArray.pop()
console.log(clonedArray);
