// ## 1
console.log('----------QUESTION 1 ----------');

let array =[1,2,3,4,5];
let sumArray = array.reduce(function(a,b) {
    return a + b;} );
console.log(sumArray);
//----------XXXXX----------
// ## 2
console.log('----------QUESTION 2 ----------');

let quat = " ''' ";
let star = ""
for(i=1; i <= 1; i++){
    console.log(quat);
    for(j=1; j<=5; j++) {
        star += " *";
        console.log(star);
    }console.log(quat);
}
//----------XXXXX----------
// ## 3
console.log('----------QUESTION 3 ----------');

let arr = [[1,2,1,24], [8,11,9,4], [7,0,7,27], [7, 4, 28, 14], [3,10,26,7]];
for(i=0; i<= arr.length-1; i++) {
    console.log(`row ${i}`);
    for (j=0; j<= arr[i].length-1; j++) {
        console.log(arr[i][j]);
    }
}

//----------XXXXX----------
// ## 4
console.log('----------QUESTION 4 ----------');
// Write a program that will output the following using loops: 
// >1 1 1 2 2 2 3 3 3 4 4 4
let result = "";
for (i=1; i<5; i++) {
    for (j=1; j<4; j++) {
        result += i + " ";
    }  
} 
console.log(result);

// ## 5
console.log('----------QUESTION 5 ----------');
// 5. Write a program that will output the following using loops: 
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
let result2 = "";
for (i=1; i<4; i++) {
    for (j=0; j<5; j++) {
        result2 += j + " ";
    }  
} 
console.log(result2);
