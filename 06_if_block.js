console.log(`Start`);
var num = 10;
if (num > 0) {
    console.log(`inside if`);
    console.log(`Number is positive ${num}`);
}
console.log(`End`);

var ageForVote = 10;
if (ageForVote >= 18) {
    console.log("You are eligible for voting");
    console.log(`Age is: ${ageForVote}`);
}
console.log("End of next if block");


function cheakEvenOdd(num) {
    if (num % 2 == 0) {
        return "EVEN"
    }
    if (num % 2 !== 0) {
        return "ODD"
    }
}
var result = cheakEvenOdd(45)
console.log(`Given number 45 is ${result}.`);
var result = cheakEvenOdd(70)
console.log(`Given number 70 is ${result}.`);

var num1 = 5;
if (num1>0) {
    console.log(`Number ${num1} is positive`);
}else{
    console.log(`Number ${num1} is negative`);

}

function maleMarriageEligibility(gender, age,boyName){
    if (gender=="Male" && age>=21) {
        console.log("You are eligible");
    } else {
        console.log("Not Eligible");
    }
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Anil");