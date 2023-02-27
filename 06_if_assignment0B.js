function maleMarriageEligibility(gender, age, boyName) {
    if (gender == "Male" && age >= 18) {
        var str = `Hey ${boyName} You are Eligible for Marriage.`
        return str
    } else {
        var str = `Hey ${boyName} You are not Eligible for Marriage.`
        return str
    }
}
var result = maleMarriageEligibility("Male", 25, "Billgates")
console.log(result);
var result = maleMarriageEligibility("Male", 17, "Stew Jobs")
console.log(result);

function femaleMarriageEligibility(gender, age, girlName) {
    if (gender == "feMale" && age >= 18) {
        var str = `Hey ${girlName} You are Eligible for Marriage.`
        return str
    } else {
        var str = `Hey ${girlName} You are Eligible for Marriage.`
        return str
    }
}
var result = femaleMarriageEligibility("feMale", 16, "Jenifer")
console.log(result);
var result = femaleMarriageEligibility("feMale", 27, "Malinda Gates")
console.log(result);