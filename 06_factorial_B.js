

// function factorialofWordsCount(str) {
//     if (str == null) {
//         console.log(`Given String ${str}. Please Enter valid Data`);
//         return
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
// console.log(`---------------------------------------------------------------------`);
// factorialofWordsCount("Revision is the mother of Success")
// console.log(`---------------------------------------------------------------------`);
// factorialofWordsCount("We naver fail, We always learn")
// console.log(`---------------------------------------------------------------------`);
// factorialofWordsCount(null)
// console.log(`---------------------------------------------------------------------`);
// factorialofWordsCount("")
// console.log(`---------------------------------------------------------------------`);
// factorialofWordsCount("Borda Mitul K")

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



function factorialOfwords(str) {
    if (str == undefined || str == null || (isNaN(str) && typeof str == "number")) {
        console.log(`Given String is ${str} that is invalid data`)
        return
    }else{
        strSplit = str.split(" ")
        // console.log(strSplit);
        strLength = strSplit.length
    }
    facter = 1; 
    for (let index = strLength; index >=1; index--) {
            facter = facter * index;
        }
        console.log(`Given String ${str} and its Word length ${strLength}`);
        console.log(` factorial ${facter}`);
        return

}
// factorialOfwords(null)
// factorialOfwords(undefined)
// factorialOfwords(NaN)
// factorialOfwords("16")
factorialOfwords("Revision is the mother of Success")
