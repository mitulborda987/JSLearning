console.log(`=====================Assignment 0A=====================`);
function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`${monthNumber} is the January`);
            break;
        case 2:
            console.log(`${monthNumber}nd is the February`);
            break;
        case 3:
            console.log(`${monthNumber} is the March`);
            break;
        case 4:
            console.log(`${monthNumber} is the April`);
            break;
        case 5:
            console.log(`${monthNumber}th is the May`);
            break;
        case 6:
            console.log(`${monthNumber} is the June`);
            break;
        case 7:
            console.log(`${monthNumber} is the July`);
            break;
        case 8:
            console.log(`${monthNumber} is the August`);
            break;
        case 9:
            console.log(`${monthNumber} is the September`);
            break;
        case 10:
            console.log(`${monthNumber} is the October`);
            break;
        case 11:
            console.log(`${monthNumber} is the November`);
            break;
        case 12:
            console.log(`${monthNumber}th is the December`);
            break;
        default:
            console.log(`This is In valid data ${monthNumber}`);
            break;
    }
}
monthOfYear(2)
monthOfYear(5)
monthOfYear(12)
monthOfYear(15)
monthOfYear(100)
monthOfYear(undefined)
monthOfYear(null)


