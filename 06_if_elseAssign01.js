function ageCheak(age) {
    if (age >= 18) {
        return `He is Eligible for Voting.`
    } 
    else if (age>0 && age<=18) {
        return `He is Not Eligible for Voting.`
    }
    else {
        return `in valid data.`
    }
}
var result = ageCheak(45)
console.log(result);
var result = ageCheak(17)
console.log(result);
var result = ageCheak(8)
console.log(result);
var result = ageCheak(20)
console.log(result);
var result = ageCheak(-10)
console.log(result);
var result = ageCheak(200)
console.log(result);
var result = ageCheak(0)
console.log(result);