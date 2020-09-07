//1
let myArray = (arr) => {
  let myArray = arr;
  let resultSum = 0;
  let resultProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    resultSum += arr[i];
    resultProduct *= arr[i];
  }
  console.log(`my array sum is: ${resultSum}`);
  console.log(`my array product is: ${resultProduct}`);
};
myArray([3, 5, 7, 2, 9]);

//2

function myStars() {
  let str = "";
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j < i; j++) {
      str = str + " " + "*";
    }
    console.log(str);
    str = " ";
  }
}
myStars();

//3

let myArrayIs = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
for (let i = 0; i < myArrayIs.length; i++) {
  console.log(`"row ${i}"`);
  for (let j = 0; j < myArrayIs[i].length; j++) {
    console.log(`${myArrayIs[i][j]}"`);
  }
}
//4
function repeatNumber() {
  let result = "";
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 3; j++) {
      result += " " + i;
    }
  }
  console.log(result);
}
repeatNumber();
//5
function repeatNumber2() {
  let result = "";
  for (let i = 1; i <= 3; i++) {
    for (let j = 0; j <= 4; j++) {
      result += " " + j;
    }
  }
  console.log(result);
}
repeatNumber2();
