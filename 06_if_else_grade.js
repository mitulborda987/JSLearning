// function gradeCalculation(marks) {
//     // if marks is 0 or less than 0 or greater than 100 or not in valid number format 
//     // ex. “56” or “Seventy” then log the msg→ Please provide the valid marks
//     if (marks <= 0 || marks > 100 || (typeof marks != "number")) {
//         console.log(`Please provide the valid marks - ${marks}`);
//     }

// }
// gradeCalculation(0);
// gradeCalculation(150);
// gradeCalculation(-7);
// gradeCalculation("91");
// gradeCalculation("Seventy One");
// gradeCalculation(NaN);
// gradeCalculation(undefined);
// gradeCalculation(null);

console.log(`=====================voteEligibility=====================`);

function voteEligibility(age) {
    if (age <= 0 || age >= 120 || age == undefined || age == null) {
        console.log(`Hey Your age ${age} is In valid data`);
        return;
    }
    if (age >= 18) {
        console.log(`Yes, Your age is ${age}. You are Eligible for Voting.`);
    } else {
        console.log(`No, Your age is ${age}. You are Not Eligible for Voting.`);
    }
}
voteEligibility(45)
voteEligibility(17)
voteEligibility(8)
voteEligibility(20)
voteEligibility(-10)
voteEligibility(200)
voteEligibility(0)
voteEligibility(undefined)
voteEligibility(null)

console.log(`=====================gardeCalculation=====================`);

function gardeCalculation(marks) {
    if (marks <= 0 || marks > 100 || (typeof marks != "number")||(marks >=0 && marks <30)||(marks == null,undefined)) {
        console.log(`Your Marks is ${marks}.please provide the valid marks.`); 
        return
    }
    if (marks >= 90) {
        console.log(`Funstastic marks:${marks},Your Grade is A+`);
    }
    if (marks >= 75 && marks < 90) {
        console.log(`Excellent marks:${marks},Your Grade is A`);
    }
    if (marks >= 50 && marks < 75) {
        console.log(`Good marks:${marks},Your Grade is B`);
    }
    if (marks >= 35 && marks < 50) {
        console.log(`Marks is marks:${marks},Your Grade is C,Need improvment`);
    }

}
gardeCalculation(98)
gardeCalculation(80)
gardeCalculation(90)
gardeCalculation(0)
gardeCalculation(150)
gardeCalculation(-7)
gardeCalculation(35)
gardeCalculation(29)
gardeCalculation(64)
gardeCalculation(49)
gardeCalculation("91")
gardeCalculation("Eighty")
gardeCalculation(NaN)
gardeCalculation(null)
gardeCalculation(undefined)

