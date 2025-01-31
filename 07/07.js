//Declare an array containing the multiple values and use lastIndexOf to determine
//  the position of the first and last occurrence of a word "pw skills".

let array = ['Hello', 'Diana', 'pw skills', 'How', 'are', 'pw skills', 'pw skills', 'you'];

console.log(`first occurence of word \"pw skills\": ${array.indexOf('pw skills')}`);
console.log(`Last occurence of word \"pw skills\": ${array.lastIndexOf('pw skills')}`);