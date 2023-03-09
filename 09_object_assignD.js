const professor = {
  firstName: "Mohit",
  lastName: "Shah",
  college: "SVS Patel",
  id: 123545,
  age: 35,
  city: "Baroda",
  degree: {
    engineeering: "CSC",
    PHD: "Adv Computing",
    degree1: "Micro computer",
  },
  certificates: [
    "Haker Rank Participation",
    "Certificate in IFE course",
    "Certificate in Adv Programming",
  ],

  show: function () {
    return `Teacher degree are total degree are: ${this.degree.engineeering}, ${this.degree.PHD}, ${this.degree.degree1}`;
  },
};
console.log(`=====================Concate All Degree=====================`);

let result = professor.show();
console.log(result);
console.log(`=====================Add Total Experience=====================`);
// Add new Property
let addTotalExp = professor.totalExperiance = "14 years";
console.log(`Total Experiance: ${addTotalExp}`);
console.log(`=====================Modify College Property=====================`);
// Modify Property
console.log(professor);
professor.college = "Shanti Niketan";
console.log(professor);

console.log(`=====================Add New Certificate=====================`);
// Add New Certificate
professor.certificates[3] = "Oracle Certified";
console.table(professor.certificates);

console.log(`=====================Log the last element of Array=====================`);
console.log(`Last Element of Array: ${professor.certificates[professor.certificates.length - 1]}`);
