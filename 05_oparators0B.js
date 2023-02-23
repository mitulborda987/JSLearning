console.log(`******Assignment 0B******`);
console.log(`******Step-1 Cheak Marriage Age for Male******`);

function maleMarriageEligibility(gender, age, boyName) {
    var personAge = age >= 21 ? `Hey ${boyName} You are eligible for Marriage.` : `Hey ${boyName} You are Not eligible for Marriage.`
    return personAge;
}
var result = maleMarriageEligibility("Male", "25", "Billgates")
console.log(result);

var result = maleMarriageEligibility("Male", "17", "Stew Jobs")
console.log(result);


console.log(`******Step-2 Cheak Marriage Age for Female******`);

function maleMarriageEligibility(gender, age, girlName) {
    var personAge = age >= 18 ? `Hey ${girlName} You are eligible for Marriage.` : `Hey ${girlName} You are Not eligible for Marriage.`
    return personAge;
}
var result = maleMarriageEligibility("Female", "16", "Jenifer")
console.log(result);

var result = maleMarriageEligibility("Female", "27", "Malinda Gates")
console.log(result);