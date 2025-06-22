//Write a program which can give grades to students according to theirs scores:
    // - 80-100, A
    // - 70-89, B
    // - 60-69, C
    // - 50-59, D
    // - 0-49, F


const arr = [85, 35, 45, 69]

for(let i = 0 ; i< arr.length ; i++)
{
    switch(true)
    {
        case ((arr[i] >= 80) && (arr[i] <= 100)): console.log(`${arr[i]} Grade A`); break;
        case ((arr[i] >= 70) && (arr[i] <= 79)): console.log(`${arr[i]} Grade B`); break;
        case ((arr[i] >= 60) && (arr[i] <= 69)): console.log(`${arr[i]} Grade C`); break;
        case ((arr[i] >= 50) && (arr[i] <= 59)): console.log(`${arr[i]} Grade D`); break;
        case ((arr[i] >= 0) && (arr[i] <= 49)): console.log(`${arr[i]} Grade F`); break;
    }
}