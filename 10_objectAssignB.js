const banksbi = {
    bankName : "SBI Bank",
    accountNo:123456,
    ifsc : "SBI0001",
    interestRate : "9.5%"
}
const bankLocation ={
    street: "Wakad",
    city : "Pune",
    pinCode : "010203"
}
console.log(`=================Object.assign=================`);
let cloneObject = Object.assign(banksbi,bankLocation)
console.table(cloneObject);
// console.table(`Two objects  sbiBank  and bankLocation colne:${cloneObject}`);
// let objectSpread = [...banksbi,...bankLocation]
// console.log(objectSpread);


const rateOfinterest = {
    homeLoaninterest : "7%",
    personalLoaninterest:"12%",
    dueinterest:"5%",
}
// //  object merge using by spred method 
//  let mergeobject = {...banksbi,...bankLocation,...rateOfinterest}
//  console.table(mergeobject);
console.log(`=================Merge Object=================`);


// merge three object by using object.assign
const sbiDetails = {};
Object.assign(sbiDetails, banksbi, bankLocation,rateOfinterest);
console.table(sbiDetails);

console.log(`==================Traversing sbiDetails merged object==================`);

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key} : ${element}`);
    }
}
