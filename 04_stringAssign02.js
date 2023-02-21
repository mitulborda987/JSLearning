// // console.log(stringHandsOnn);

function stringHandsOn() {

    console.log("============1.NAME============");
    var givenString = "   Hey you are doing good, keep it up    ";
    console.log(givenString);

    console.log("============2.LENGTH============");
    var StringLenth = givenString.length;
    console.log("Total number of character in string:", StringLenth);

    console.log("============3.REMOVE SPACE============");
    var stringTrim = givenString.trim();
    console.log(stringTrim);

    console.log("============4.EXTRA SPACE COUNT============");
    var afterTrimLength = stringTrim.length
    console.log("String length After Trim:", afterTrimLength);

    console.log("============5.FIRST AND LAST CHARACTER============");
    var firstchar = stringTrim.charAt(0);
    var lastchar = stringTrim.charAt(afterTrimLength - 1);
    console.log("String first character: ", firstchar, "String Last character: ", lastchar);

    console.log("============6.TOTAL WORDS============");
    var countWord = stringTrim.split(" ");
    console.log(countWord);
    console.log("Total words: ", countWord.length);

    console.log("============7.INDEXOF WORDS============");
    var indexOfWord =stringTrim.indexOf("good")
    console.log("Good index of word is:",indexOfWord);

    console.log("============8.SUBSTRING============");
    var subString = stringTrim.substring(22)
    console.log("Substring Starting from:",subString);

    console.log("============8.1 slice============");
    var stringSlice = stringTrim.slice(22)
    console.log("Slice Starting from:",stringSlice);

    console.log("============9.SUBSTRING============");
    var stringIncludes = stringTrim.includes("up")
    console.log("String end with up word after step 3 or not: ",stringIncludes);

    console.log("============10.SUBSTRING============");
    var stringIncludes = stringTrim.includes("Hey")
    console.log("String start with Hey word after step 3 or not: ",stringIncludes);

}
stringHandsOn();


