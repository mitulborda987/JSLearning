

function factorialofWordsCount(str) {
    if (str == null) {
        console.log(`Given String ${str}. Please Enter valid Data`);
        return
    }
    let count = 1
    let facter = 1
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == " ") {
            count = count + 1
            facter = facter * count
        }
    }
    console.log(`The String ${str} Total Word: ${count}`);
    console.log(`Factorial of given string is: ${facter}`);
    return count;
}
console.log(`---------------------------------------------------------------------`);
factorialofWordsCount("Revision is the mother of Success")
console.log(`---------------------------------------------------------------------`);
factorialofWordsCount("We naver fail, We always learn")
console.log(`---------------------------------------------------------------------`);
factorialofWordsCount(null)
console.log(`---------------------------------------------------------------------`);
factorialofWordsCount("")
console.log(`---------------------------------------------------------------------`);
factorialofWordsCount("Borda Mitul K")

// console.log(`---------------------------------------------------------------------`);

// let Result2 = factorialofWordsCount("We naver fail, We always learn")
// console.log(`The String "We naver fail, We always learn" Total Word: ${Result2}`);

// console.log(`---------------------------------------------------------------------`);

// let Result3 = factorialofWordsCount(null)
// console.log(`${Result3}`);

// console.log(`---------------------------------------------------------------------`);

// let Result4 = factorialofWordsCount("")
// console.log(`The String "" Total Word: ${Result4}`);

// console.log(`---------------------------------------------------------------------`);

// let Result5 = factorialofWordsCount("Borda Mitul K")
// console.log(`Borda Mitul K" Total Word: ${Result5}`);




// function factorialofWordsCount(str) {
//     if (str == null) {
//         return (`Given String ${str}. Please Enter valid Data`);
//     }
//     let count = 1
//     let facter = 1
//     for (let index = 0; index < str.length; index++) {
//         let char = str.charAt(index);
//         if (char == " ") {
//             count = count + 1
//             facter = facter * count
//         }
//     }
//     console.log(`The String ${str} Total Word: ${count}`);
//     console.log(`Factorial of given string is: ${facter}`);
//     return count;
// }
// factorialofWordsCount(`"Revision is the mother of Success"`)