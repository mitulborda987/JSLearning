
console.log(`******Assignment 0C******`);
console.log(`******TCS interview Eligibility******`);
function jobTakeing(gradScore, hscScore, sscScore, candidateName) {
    console.log(candidateName = gradScore >= 70 || hscScore > 80 || sscScore > 90 ? `Congrates, ${candidateName} you are eligible for TCS interview` : `${candidateName} Unfortunately you are not eligible for interview`
    );
}
jobTakeing("80", "86", "90", "Mitul")
jobTakeing("70", "65", "55", "Mohit")
jobTakeing("60", "79", "88", "Rohit")
