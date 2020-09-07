// 07.09.2020
// EXERCISE 1
// Write a program to compute the sum and product of an array of integers.

let sum = [
    [ 5, 2, 87, 23]
];

let product = 0;
for (let i = 0; i < sum.length; i++) {
    let arr = sum[i];
    for (let j = 0; j < arr.length; j++){
        product += arr[j];
    }
    console.log(product); // 117
}

// EXERCISE 2
// Write a program to create the following pattern:

// *  
// * * 
// * * *  
// * * * *  
// * * * * *  

// let pattern = "";
// for (let i = 0; i <= pattern; i++){
//     for (let j = 0; j <= pattern; j++) {
//     console.log(i, j);
// }   
// }

for (let i = 5; i >= 1; i--) {
    let str = "";
    for (let  j = i; j <= 5; j++) {
    str += " * ";
       }
   console.log(str);
  }

//   * 
//   *  * 
//   *  *  * 
//   *  *  *  * 
//   *  *  *  *  *

// EXERCISE 3
// Write a program which prints the elements of the following array: let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]; Sample Output: "row 0" " 1" " 2" " 1" " 24" "row 1"

let arr = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27], 
    [7, 4, 28, 14], 
    [3, 10, 26, 7]
];

let totalScore = 0;
for (let i = 0; i < arr.length; i++) {
    console.log(`"row ${i}"`);
    for(let j = 0; j < arr[i].length; j++){
        console.log(`${arr[i][j]}`)
    }
}
console.log(totalScore);

// "row 0"
// 1
// 2
// 1
// 24
// "row 1"
// 8
// 11
// 9
// 4
// "row 2"
// 7
// 0
// 7
// 27
// "row 3"
// 7
// 4
// 28
// 14
// "row 4"
// 3
// 10
// 26
// 7


// EXERCISE 4
// Write a program that will output the following using loops:
// 1 1 1 2 2 2 3 3 3 4 4 4

for(let i = 111; i <=444; i+= 111) {
    console.log(i);
}

// 111
// 222
// 333
// 444

// EXERCISE 5
// Write a program that will output the following using loops:
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

for(let ii = 1; ii <= 3; ii++){
    for (jj = 0; jj <= 4; jj++){ 
    console.log(jj);
}
}
// 0
// 1
// 2
// 3
// 4
// 0
// 1
// 2
// 3
// 4
// 0
// 1
// 2
// 3
// 4