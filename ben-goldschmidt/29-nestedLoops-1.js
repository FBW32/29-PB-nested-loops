console.log("")
console.log("QUESTION 1")
// Write a program to compute the sum and product of an array of integers.

let sumProduct = (array) => {
    sum1 = 0;
    product1 = 1;
    for (let i = 0; i < array.length; i++) { // The array length doesn't start at 0, so when you cont by index it starts with 
        sum1 += array[i];
        product1 *= array[i];

    }
    console.log(`Array Sum => ${sum1}`)
    console.log(`Array Product => ${product1}`)

}
sumProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


console.log("")
console.log("QUESTION 2")
// Write a program to create the following pattern:

// *  
// * * 
// * * *  
// * * * *  
// * * * * *  

let stars = [];
let Q2loop = () => {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 1; j++) {
            stars += "*" + " "
            console.log(stars)
        }
    }
}
Q2loop();
// Array Sum => 55
// Array Product => 3628800



console.log("")
console.log("QUESTION 3")
// Write a program which prints the elements of the following array: let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]; Sample Output: "row 0" " 1" " 2" " 1" " 24" "row 1"

let arrQ3 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

let innerArray;
function elementPrint(...arrayInput) {
    for (let i = 0; i < arrayInput[0].length; i++) {
        console.log(`"Row ${i}"`)
        for (let j = 0; j < arrayInput[0][i].length; j++) {
            innerArray = arrayInput[0][i][j];
            console.log(`"${innerArray}"`);
        }
    }
}

elementPrint(arrQ3);
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 



console.log("")
console.log("QUESTION 4")
// Write a program that will output the following using loops:

// 1 1 1 2 2 2 3 3 3 4 4 4

let repeatNum = [];
let Q4loop = (integerInputQ4) => {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j < 3; j++) {
            repeatNum += i + " ";
        }
    }
    console.log(repeatNum)
}
Q4loop();
// "Row 0"
// "1"
// "2"
// "1"
// "24"
// "Row 1"
// "8"
// "11"
// "9"
// "4"
// "Row 2"
// "7"
// "0"
// "7"
// "27"
// "Row 3"
// "7"
// "4"
// "28"
// "14"
// "Row 4"
// "3"
// "10"
// "26"
// "7"



console.log("")
console.log("QUESTION 5")
// Write a program that will output the following using loops:
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

let zeroFour = [];
let Q5loop = (integerInputQ5) => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j <= integerInputQ5; j++) {
            zeroFour += j + " "
        }
    }
    console.log(zeroFour)
}
let integerQ5 = 4;
Q5loop(integerQ5);
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4