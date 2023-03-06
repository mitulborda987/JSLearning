

console.log(`==================Array Assignment==================`);

const arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`1. Given Array : ${arraySeasonalFruits}`);
let firstElement= arraySeasonalFruits[0]

console.log(`In the Given Array First element is: ${firstElement}`);

let lastElement= arraySeasonalFruits[arraySeasonalFruits.length- 1]
console.log(`In the Given Array Last element is: ${lastElement}`);

console.log(`====================================================`);

console.log(`2. Given Array Before addition of Papaya: ${arraySeasonalFruits}`);
arraySeasonalFruits.unshift("Papaya");
console.log(`In the Given Array After addition of Papaya: ${arraySeasonalFruits}`);
console.log(`====================================================`);
console.log(`3. Given Array Before Removing of Mango: ${arraySeasonalFruits}`);
arraySeasonalFruits.splice(4,1)
console.log(`In the Given Array After Removing of Mango: ${arraySeasonalFruits}`);
console.log(`====================================================`);
console.log(`4. Given Array Before Addition of Pineapple: ${arraySeasonalFruits}`);
arraySeasonalFruits.push("Pineapple")
console.log(`In the Given Array After Addition of Pineapple: ${arraySeasonalFruits}`);
console.log(`====================================================`);
console.log(`5. In the Given Array Before Addition of Dragon Fruit: ${arraySeasonalFruits}`);
arraySeasonalFruits.splice(4,0,"Dragon Fruit")
console.log(`In the Given Array After Addition of Dragon Fruit: ${arraySeasonalFruits}`);
console.log(`====================================================`);
console.log(`6. In the Given Array Before Replacing Orange with Kiwi: ${arraySeasonalFruits}`);
arraySeasonalFruits.splice(2,1,"Kiwi")
console.log(`In the Given Array After Replacing of Kiwi: ${arraySeasonalFruits}`);
console.log(`====================================================`);
console.log(`7. In the Given Array Before Section: ${arraySeasonalFruits}`);
let subArray = arraySeasonalFruits.splice(1,4)
console.log(`In the Given Array Selected Element from 1 to 4: ${subArray}`);
console.log(`====================================================`);
let array = ["Papaya","Banana","Kiwi","Apple","Dragon Fruit","Water Melon","Pineapple"]
console.log(`8. Given Array : ${array}`);
let last3Element = array.slice(array.length-3)
console.log(`Last Three Element in the given Array:${last3Element}`);