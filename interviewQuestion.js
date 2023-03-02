
// DIFFRENCE BETWEEN == AND ===

var num1 = 10;
var num2 = "10";
console.log(num1 == num2); // 10 == "10" String convert into number then compare value; Result = True;

var num1 = 10;
var num2 = "10";
console.log(num1 === num2); // 10 == "10" Strickly cheak Type and Number; Result = False;


// + oparator Using by 3 TYPE

//1.Addition of Numbers
var num1 = 10;
var num2 = 20;
var num3 = 30;
num = num1 + num2 + num3;
console.log(num);

// 2.String concatenation 

var myName1 = "Amit"
var myName2 = "Shah"
var fullName = myName1 + myName2
console.log(`My fullName is: ${fullName}`);

// 3. How to Convert string to number [TYPE CONVERSION]
// Explicit conversion : Explicit type conversion 
var myName = "10"
var myNumber = +myName; // "10"===> 10 that is implicit conversion : Automatic type conversion 
console.log(`${myNumber} and it's type ${typeof myNumber}`);

// Not a Number (NAN) DATA TYPE is Number 
var myName = "Mitul" // String convert in to number by using + oparator 
var result = +myName  // "Mitul" Not convert into number why beacuse of "mitul" is not number but result show that NAN 
console.log(`${result} and it's type is:${typeof result}`);  // Result : NaN and it's type is:number

// implicit conversion : Automatic type conversion 

console.log(10 + true); // True value  = 1 
console.log(10 - false);// False value = 0 

// Implicit conversion to String 

var result = '3' + 2;
console.log(result); // Result = 32

var result = '3' + true;
console.log(result); // Result = 3true

var result = '3' + undefined;
console.log(result);// Result = 3undefined

var result = '3' + null;
console.log(result);// Result = 3null

// Implicit Boolean Conversion to Number
var result;

var result = '4' - true;
console.log(result);// Result = 3

var result = 4 + true;
console.log(result);// Result = 5

var result = 4 + false;
console.log(result);// Result = 4

// Implicate String Conversion to Number 

var result = '4' - '2';
console.log(result); // Result = 2
var result = '4' - 2;
console.log(result); // Result = 2
var result = '4' * 2;
console.log(result); // Result = 8
var result = '4' / 2;
console.log(result); // Result = 2

// Undefined used with number ,booolean or null given NAN
var result;

var result = 4 + undefined
console.log(result);// Result = NaN

var result = 4 - undefined
console.log(result); // Result = NaN

var result = true + undefined;
console.log(result); // Result = NaN

var result = null + undefined
console.log(result); // Result = NaN

// Explicit conversion : Convert number string and boolean values to number,in that case we can use Number();

//String to number 
var result = Number('324');
console.log(result);// Result = 324

var result = Number('324e-1');
console.log(result);// Result = 32.4

var result = Number(true);
console.log(result);// Result = 1

var result = Number(false);
console.log(result);// Result = 0

// Explicit Conversion: Invalid String to Number return NaN

var result = Number('hello');
console.log(result); // Result = NaN

var result = Number(undefined);
console.log(result); // Result = NaN

var result = Number(NaN);
console.log(result); // Result = NaN

// Explicit conversion : String to number using + operaor

var numberInString = "100";
console.log(typeof numberInString); // String 

var myNumber = +numberInString;
console.log(typeof myNumber); // Number

// Explicite Conversion: number to string data type conversion using String() Method 
var myNumber = 100;
console.log(typeof myNumber); // number

var afterConversion = myNumber.toString();
console.log(typeof afterConversion); // string 
 


var num1 = 10
var num2 = num1 + 1
console.log(`num1:${num1} , num2:${num2}`); // num1:10 , num2:11

// Post increament   Postpaid 
var num1 = 10
var num2 = num1++ //num1 = num1 + 1 // 11
console.log(`num1:${num1} , num2:${num2}`);// num1:11 , num2:10

// Pre increament   Prepaid 
var num1 = 10      
var num2 = ++num1
console.log(`num1:${num1} , num2:${num2}`);// num1:11 , num2:11

