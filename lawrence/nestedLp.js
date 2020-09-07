
// 1. Write a program to compute the sum and product of an array of integers.

let sum = 0;

function sumOfArray(nwArray) {
    
    for (let i = 0; i < nwArray.length; i++) {
          sum = sum + nwArray[i];
    } console.log(sum);
}  

sumOfArray([2,4,6]);  // 12



//2. Write a program to create the following pattern: 


function PatternSlope() {
    pat = 0;
    for (let i = 0; i <= 5; i++) {
        
        pat = pat + [i];
        
        console.log(pat);
    } 
}

   PatternSlope();
   /*
00
001
0012
00123
001234
0012345
*/

// 3. Write a program which prints the elements of the following array: 
//let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];



function SimpleOut() {
    let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    let row = 0;

    for (let i = 0; i < arr.length; i++) {
        row = row + arr.splice(0,1);
        return row  
    } 
}
  console.log(SimpleOut()); // 01,2,1,24


// 4. Write a program that will output the following using loops: 

let strLine = "";

for (let i = 1  ; i <= 4; i++) {
    
    for (let j = 0; j < 3; j++) {
        
        strLine += i + " "
    }
}
console.log(strLine);  //  1 1 1 2 2 2 3 3 3 4 4 4 

//5. Write a program that will output the following using loops: 



let strLine2 = "";

for (let i = 1  ; i <= 3; i++) {
    
    for (let j = 0; j <= 4; j++) {
        
        strLine2 += (i,j) + " "
    }
}
console.log(strLine2);  // 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 