// 1. Write a program to compute the sum and product of an array of integers.

function sum(myArr) {

    let sum = 0;
    for (let i = 0; i < myArr.length; i++) {
          sum = sum + myArr[i];
    } 
    console.log(sum);
}  

sum([2,4,6]); // 12

// 2. Write a program to create the following pattern: 
// ```
// *  
// * * 
// * * *  
// * * * *  
// * * * * *  
// ```

function patternProg() {

    let x = [];
    for (let i = 0; i <= 5; i++) {        
        x += [i];         
        console.log(x);
    } 
}

patternProg();

// 0
// 01
// 012
// 0123
// 01234
// 012345

// 3. Write a program which prints the elements of the following array: 
// let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output: 
// "row 0" 
// " 1" 
// " 2" 
// " 1"
// " 24"
// "row 1"

let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i = 0; i < arr.length; i++) {

    console.log(`row ${i}`);

    for (let x = 0; x < arr[i].length; x++) {

        console.log(`${arr[i][x]}`);
    }
}

//   row 0
//   1
//   2
//   1
//   24
//   row 1
//   8
//   11
//   9
//   4
//   row 2
//   7
//   0
//   7
//   27
//   row 3
//   7
//   4
//   28
//   14
//   row 4
//   3
//   10
//   26
//   7

// 4. Write a program that will output the following using loops: 
// >1 1 1 2 2 2 3 3 3 4 4 4

function loopsProg(){

    let line = '';

    for (let i = 1  ; i <= 4; i++) {
    
    for (let j = 0; j < 3; j++) {
        
        line += i + ' '
        }
    }
    console.log(line)
}

loopsProg() // 1 1 1 2 2 2 3 3 3 4 4 4 

	
// 5. Write a program that will output the following using loops: 
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

function loopsProg2(){

    let line2 = '';

    for (let i = 1  ; i <= 3; i++) {
    
        for (let x = 0; x <= 4; x++) {
        
        line2 += (i,x) + ' '
        }
    }
    console.log(line2);
}

loopsProg2() // 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 