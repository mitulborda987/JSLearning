var cheakLeapYear = function (leapyear) {
    if (leapyear == undefined, null || typeof (leapyear) !== "number" || isNaN(leapyear)) {
        console.log(`${leapyear} is invalid input,Please Enter valid data`);
        return;
    }
    if (leapyear % 4 == 0 && (leapyear % 100 != 0 || leapyear % 400 == 0)) {
        console.log(`Given Year Number ${leapyear}  is Leap Year.`)
    } else {
        console.log(`Given Year Number ${leapyear}  is Not Leap Year.`)
    }
}
cheakLeapYear(2020)
cheakLeapYear(1999)
cheakLeapYear(1600)
cheakLeapYear(2022)
cheakLeapYear(1945)
cheakLeapYear(null)
cheakLeapYear("Twenty Twenty")
cheakLeapYear(undefined)
cheakLeapYear(NaN)
cheakLeapYear(1750)

