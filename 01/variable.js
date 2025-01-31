// 01. Create a variable.js file and declare variables 
// and assign string, boolean, undefined and null data types,
//  Display all the value with their data type.

var str, boolValue;
boolValue = false;
var undefinedVar;
var nullVar = null;
console.log(`boolValue: ${boolValue}`);
console.log(`undefinedVar value: ${undefinedVar} `);
console.log(`nullVar value: ${nullVar}`);
str = "hi";
if(true)
{
    var str = "Hello World";
    console.log(`strign value inside block: ${str}`);
}

console.log(`strign value outside block: ${str}`);