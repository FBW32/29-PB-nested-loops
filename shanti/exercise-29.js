/* 1. Write a program to compute the sum and product of an array of integers. */
let sumAndProduct = (array) => {
    let s = 0;
    let p = 1;
    for (let i = 0; i < array.length; i++) {
        s += array[i];
        p *= array[i];
    }
    console.log(`Sum of the array: ${s}`);
    console.log(`Product of the array: ${p}`);
}
sumAndProduct([1, 2, 3, 4, 5, 6]); // Sum of the array: 21
                                   // Product of the array: 720

/* 2. Write a program to create the following pattern:
    *  
    * * 
    * * *  
    * * * *  
    * * * * *  
*/
let design = "";
for ( let i = 1; i <= 6; i++) {
   
    for (let j = 1; j < i; j++) {
         design = design + " " + ("*");
    }
    console.log(design);
    design = " ";
}
/*
    *
    * *
    * * *
    * * * *
    * * * * *
*/

/* 3. Write a program which prints the elements of the following array: let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]; Sample Output: "row 0" " 1" " 2" " 1" " 24" "row 1" */
let array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]; 
let result = "";
for (let i = 0; i < array.length; i++) {
    console.log(`"row ${i}"`);
     for(var j = 0; j < array[i].length; j++){
            console.log(`${array[i][j]}"`);
        }
}
console.log(result);
/*
    "row 0"
    1"
    2"
    1"
    24"
    "row 1"
    8"
    11"
    9"
    4"
    "row 2"
    7"
    0"
    7"
    27"
    "row 3"
    7"
    4"
    28"
    14"
    "row 4"
    3"
    10"
    26"
    7"
*/

/* 4. Write a program that will output the following using loops:
1 1 1 2 2 2 3 3 3 4 4 4
*/
let num = "";
for (let i = 1; i <= 4; i++) {
    for (let g = 0; g < 3; g++) {
        num += i + " ";
    }
  }
console.log(num);  // 1 1 1 2 2 2 3 3 3 4 4 4 

/* 5. Write a program that will output the following using loops:
0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
*/
let num1 = "";
for (let g = 0; g < 3; g++) {
    for (let i = 0; i <= 4; i++) {
        num1 += i + " ";
    }
  }
console.log(num1);  // 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 
