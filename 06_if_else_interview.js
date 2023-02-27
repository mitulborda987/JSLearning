
console.log(`******Assignment 02******`);
console.log(`******TCS interview Eligibility******`);
function jobTake(gradScore, hscScore, sscScore, candidateName) {
    if (gradScore >= 70 || hscScore > 80 || sscScore > 90) {
        console.log(`Conrates ${candidateName} you are eligiblr for TCS interview.`); 
    }else{
        console.log(`unfortunately you are not eligible for interview`); 
    }
}
jobTake("80", "86", "90", "Mitul")
jobTake("70", "65", "55", "Mohit")
jobTake("60", "79", "88", "Rohit")