// 1

let sum = [1, 2, 3, 4],
    x = 0,
    y = 1,
    i;
for (i = 0; i < sum.length; i += 1) 
   {
    x += sum[i];
    y *= sum[i];
    }
console.log(`Sum : ${x}  Product : ${y}`); // Sum : 10  Product : 24

// 2

let q,w,inPut;
for(q=1; q <=6; q++)
{
   for (w=1; w < q; w++)
     {
    inPut += ('*');        
      }
 console.log(inPut);
 inPut='';    
} 
// undefined
// *
// **
// ***
// ****
// *****

// 3


//4

let num = 4;
let b = 3;

for (let i = 1; i <= num;i++){
    console.log(i);


for (let j = 1; j< b; j++){
     console.log(i);
}
}
// 1
// 1
// 1
// 2
// 2
// 2
// 3
// 3
// 3
// 4
// 4
// 4

// 5

let num2 = 4;

for (let i = 0; i <= num2;i++){
    // console.log(i);


 for (let j = 0; j<= num2; j++){
      console.log(j);
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