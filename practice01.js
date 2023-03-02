// How to print reverse string 

// var str = "How Are You?"
// var reverse = ""
// for (let index = str.length - 1; index >= 0; index--) {
//     return reverse = reverse + charAt
// }

function reverceString(str) {
    var reverse = " "
    var count = 0;
    for (let index = str.length - 1; index >= 0; index--) {
        var charAt = str.charAt(index)
        reverse = reverse + charAt
        if (charAt == " ") {
            count = count + 1
            console.log(count);
        }
    }
    return reverse
}
// var result = reverceString("How Are You?")
// console.log(result);
var result = reverceString("How Are  You?")
console.log(`Total number of space in the string:${result}`);