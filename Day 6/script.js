// Task 1
// const is_array=(testArray)=>{
//     if(Array.isArray(testArray)){
//         console.log("It's array")
//     }
//     else{
//         console.log("not an array");
//     }
// }
// console.log(is_array("String"));

// Task 2
//  var arrayOne=[1,2,4,0];
// const arrayTwo=arrayOne.slice(0,arrayOne.length);
// console.log(arrayTwo);
// Or
// for(let i =0;i<arrayOne.length;i++){
//  arrayTwo.push(arrayOne[i]);
//  }

// Task 3
// let n=3;
// let arrayOne=[7, 9, 0, -2];
// let arrayTwo=arrayOne.slice(0,n);
// console.log(arrayTwo);

// Task 4
// const myColor = ["Red", "Green", "White", "Black"];
// const newColor=myColor.join();
// console.log(newColor);

// Task 5
// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var mainCount=1;
// var count=0;
// var item;
// for(let i=0;i<arr1.length;i++){
//     for(let j=i;j<arr1.length;j++){
//         if(arr1[i]==arr1[j]){
//             count++;
//         }
//         if (mainCount<count){
//             mainCount=count;
//             item=arr1[i];
//         }
//     }
//     count=0;
// }
// console.log(`The character ${item} occured ${mainCount} times`)