// 23. Write a program to check that the number 
// given by the user is a prime number or not.


let num = 5, i = 2;

while(i<num) {
    if( num%i == 0) 
        {
            console.log('not a prime');
            break;
        }
    i ++;
}

if(i == num)
    console.log('prime');
// if((num % 2 !== 0) ||(num % 3 !==0))
// {

//     console.log(`${num} is not a prime num`);
// }
// else {
//     console.log('prime');
// }


