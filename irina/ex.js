//Nested Loops
//https://www.khanacademy.org/computing/computer-programming/programming/looping/pt/nested-for-loops (practical usage)


// Write a program to compute the sum and product of an array of integers.

//With multi-line arroy function
let sum_product = (array) => {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        product *= array[i];
    }
    return `Sum : ${sum} Product :  ${product}`
}
console.log(sum_product([1, 2, 3, 4, 5, 6])); //Sum : 21 Product :  720

//OR

const array = [1, 2, 3, 4, 5, 6];
let sum = 0;
let product = 1;
for (let i = 0; i < array.length; i += 1) 
   {
    sum += array[i];
    product *= array[i];
    }
console.log(`Sum : ${sum} Product :  ${product}`); // Sum : 21 Product :  720

// Write a program to create the following pattern:

let pattern;
for (let i = 0; i <= 4; i++) {
    pattern = '';
    for (let j = 0; j <= i; j++) {
     pattern += ' *'
    }
    console.log(pattern);
}
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

//OR

let x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+(" *");        
      }
 console.log(chr);
 chr='';    
}


// Write a program which prints the elements of the following array: let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]; Sample Output: "row 0" " 1" " 2" " 1" " 24" "row 1"

let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i = 0; i < arr.length; i ++) {

    console.log(`row ${i} ${arr[i]}`);
}
/*
row 0 1,2,1,24
row 1 8,11,9,4
row 2 7,0,7,27
row 3 7,4,28,14
row 4 3,10,26,7
*/

//OR
// IN OPERATOR https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
//The in operator returns true if the specified property is in the specified object or its prototype chain.
// FOR ... IN STATEMENT https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
//The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties. --> isso que dizer que vai acessar um elemento de cada vez, a partir de i. 

let arr2 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (let i in arr2) 
{
   console.log("row " + i);
   for (let j in arr2[i]) 
     {
      console.log(" " + arr2[i][j]);
     }
}


for (let i = 0; i < 3; i++) {
    x = i -i;
    console.log(x);
    for (let j = 1; j < 3; j++) {
        x = j;
        console.log(j);
    }
}

//OR

let array3 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]; 
let result = "";
for (let i = 0; i < array3.length; i++) {
    console.log(`row ${i}`);
     for(var j = 0; j < array3[i].length; j++){
            console.log(`${array3[i][j]}`);
        }
}
console.log(result);
// Write a program that will output the following using loops:

// 1 1 1 2 2 2 3 3 3 4 4 4

let num1 = '';
for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < 3; j++) {
        num1 += i + ' ';
    }
  }
console.log(num1);

// Write a program that will output the following using loops:
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
let num2 = '';
for (let j = 0; j < 3; j++) {
    for (let i = 0; i <= 4; i++) {
        num2 += i + ' ';
    }
  }
console.log(num2); 