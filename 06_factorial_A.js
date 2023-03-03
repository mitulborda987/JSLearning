
function factorialOfNum(num) {
    count = 1;
    if (num == undefined || num == null || isNaN(num)) {
        return (`Given number ${num} that is In valid data. `);

    }
    for (let index = num; index > 0; index--) {
        count = count * index;
    }
    return count;
}
let result1 = factorialOfNum(5)
console.log(`Given number 5 and  its factorial is ${result1}`);
console.log(`---------------------------------------------------------------------`);

let result2 = factorialOfNum(3)
console.log(`Given number 3 and  its factorial is ${result2}`);
console.log(`---------------------------------------------------------------------`);

let result3 = factorialOfNum(null)
console.log(`${result3}`);
console.log(`---------------------------------------------------------------------`);

let result4 = factorialOfNum(8)
console.log(`Given number 8 and  its factorial is ${result4}`);
console.log(`---------------------------------------------------------------------`);

let result5 = factorialOfNum(undefined)
console.log(`${result5}`);
console.log(`---------------------------------------------------------------------`);

let result6 = factorialOfNum(9)
console.log(`Given number 9 and  its factorial is ${result6}`);
console.log(`---------------------------------------------------------------------`);

let result7 = factorialOfNum(0)
console.log(`Given number 0 and  its factorial is ${result7}`);
