var great = '   How are you    '
console.log(great)

var greatLenth = great.length
console.log('Total string length: ', greatLenth)

var characterAtindex = great.charAt(0)
console.log('String last index number: ', characterAtindex)

var lastcharacter = great.charAt(greatLenth - 1)
console.log('last character in this string: ', lastcharacter)

var indexOfR = great.indexOf('r')
console.log('R character index number in this string ', indexOfR)

var great = '   How are you    '
var spaceTrim = great.trim()
console.log(
  'Removing extra start and end spaces using trim(): ',
  spaceTrim,
  spaceTrim.length,
  great.length,
)

var Includes = great.includes('are')
console.log("Substring 'are' present in string: ", Includes)

var stringSlice = great.slice(2, 7)
console.log(stringSlice)
