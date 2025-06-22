//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

let arr = [12, 13, 14]  ;

for(let i = 0; i<arr.length ; i++) {
    if( arr[i] % 2 == 0) {
        console.log(`${arr[i]} is even`);
    } else {
        console.log(`${arr[i]} is odd`);
    }
}
