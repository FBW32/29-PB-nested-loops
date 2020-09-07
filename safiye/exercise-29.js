//1
let myArr = [0, 1, 2, 3, 4];
function sum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sum(myArr));
//2
function pattern(symbol) {
  let output = "";

  for (i = 1; i <= 5; i++) {
    output = output + symbol + " ";
    console.log(output);
  }
}
pattern("*");

//3
let arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
function printArray(array) {
  for (i = 0; i < array.length; i++) {
    console.log(`"row ${i}"`);
    for (k = 0; k < array[i].length; k++) {
      console.log(`"${array[i][k]}"`);
    }
  }
}
printArray(arr);
//4
function basicloop() {
  output = "";
  for (k = 1; k <= 4; k++) {
    output = output + k + " " + k + " " + k + " ";
  }
  return output;
}
console.log(basicloop());
//5
function anotherloop() {
  output = "";
  for (i = 1; i <= 3; i++) {
    for (k = 0; k <= 4; k++) {
      output = output + k + " ";
    }
  }
  return output;
}
console.log(anotherloop());
