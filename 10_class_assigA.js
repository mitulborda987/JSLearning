console.log(`===============================================Task 1==============================================`);
class Vehicle {
    constructor(BikeName, Colour, Price, BikeWeight,Engine){
        this.BikeName = BikeName
        this.Colour = Colour
        this.Price = Price
        this.BikeWeight = BikeWeight
        this.Engine = Engine
    }
}
const suzukiAvenis = new Vehicle ("Suzuki Avenis","gray","50K","170 Kg","170 CC")
// console.log(suzukiAvenis);

const matterAERA = new Vehicle ("Matter AERA","Red","40K","180 Kg","200 CC")
// console.log(matterAERA);

const Hunter = new Vehicle ("Hunter","Black","66K","110 Kg","350 CC")
// console.log(Hunter);

const yamahaR15 = new Vehicle ("Yamaha R15","Blue","75K","120 Kg","125 CC")
// console.log(yamahaR15);

const tvsApache = new Vehicle ("TVS Apache","White","90K","150 Kg","300 CC")
// console.log(tvsApache);

arrayOfVehicles = [suzukiAvenis, matterAERA, Hunter, yamahaR15, tvsApache]


// Using For of Loop
for (const element of arrayOfVehicles) {
    console.log(`BikeName: ${element.BikeName}, Bike Colour: ${element.Colour}, Bike Price: ${element.Price}, Bike Weight: ${element.BikeWeight}, Engine Size: ${element.Engine}`);     

}
// // Using For IN  Loop
// for (const key in arrayOfVehicles) {
//     if (Object.hasOwnProperty.call(arrayOfVehicles, key)) {
//         const element = arrayOfVehicles[key];
//     console.log(`BikeName: ${element.BikeName}, Bike Colour: ${element.Colour}, Bike Price: ${element.Price}, Bike Weight: ${element.BikeWeight}, Engine Size: ${element.Engine}`);     
//     }
// }
console.log(`===============================================Task 2==============================================`);

class College  {
        constructor(CollegeName, Location, University,Principal  ){
        this.CollegeName = CollegeName
        this.Location = Location
        this.University = University
        this.Principal = Principal
    }
}
const navyug = new College ("Navyug Science","Rander","VNSGU","Ashwin Tank")
console.log(navyug);

const pdpu = new College ("PDPU","Ahemdabad","GTU","DK Narayan")
console.log(pdpu);

const jzShah = new College ("J.z. Shah","Vesu","VNSGU","Naresh Purohit")
console.log(jzShah);

const svs = new College ("SVS","Baroda","GTU","Shiv Nayak")
console.log(svs);


// let nameofCollege =[navyug];
// console.log(nameofCollege);
// for (let index = 0; index < navyug.length; index++) {
//     const element = navyug[index];
//     console.log(`${element.CollegeName},${element.Location},${element.University},${element.Principal}`);
// }
// for (const key in nameofCollege) {
//   if (Object.hasOwnProperty.call(nameofCollege, key)) {
//     const element = nameofCollege[key];
//     console.log(key, element);
//   }
console.log(`===============================================Task 3==============================================`);
function traverseObject(navyug) {
    for (const key in navyug) {
        if (Object.hasOwnProperty.call(navyug, key)) {
            const element = navyug[key];
            console.log(`${key}: ${element}`);
            
        }
    }
}
console.log(`=====College Object 1=====`);
traverseObject(navyug)
console.log(`=====College Object 2=====`);
traverseObject(pdpu)
// console.log(`=====College Object 3=====`);
// traverseObject(jzShah)
// console.log(`=====College Object 4=====`);
// traverseObject(svs)
console.log(`===============================================Task 4==============================================`);
function isPrime(num) { // returns boolean
    if (num <= 1) return false; // negatives
    if (num % 2 == 0 && num > 2) return false; // even numbers
    const s = Math.sqrt(num); // store the square to loop faster
    for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
        if(num % i === 0) return false; // modulo shows a divisor was found
    }
    return true;
  }
let result = isPrime(11);
console.log(`Given Number 11 is Prime Number.`);
















// const employee = {
//     id: 124567,
//     name: "Elon Musk",
//     country: "US",
//     city: "Silicon Valley",
//   };



// console.log("===== Object traversing =====");

// for (const key in employee) {
//   if (Object.hasOwnProperty.call(employee, key)) {
//     const element = employee[key];
//     console.log(key, element);
//   }
// }