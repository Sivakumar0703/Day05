// 1.a) Print odd numbers in an array using anonymos function. 

let odd = function (num) {
  var a = [];
  for (let i=0; i<num.length;i++) {
      if (num[i] % 2 != 0) {
          a.push(num[i]);
      }
  }
  return a;
}
console.log(odd([1,2,3,5,15,98,21,26,27]));

/* o/p : [ 1, 3, 5, 15, 21, 27 ] */

//1.a) IIFE

// (function () {
//   let num = [1,2,3,5,15,98,21,26,27];
//   var a = [];
//   for (let i=0; i<num.length;i++) {
//       if (num[i] % 2 != 0) {
//           a.push(num[i]);
//       }
//   }
//   console.log(a);
// }) (); 

/* ************************************************************************************************* */
// 1.b) Convert all the string to title caps in a string array.

// let titleCaps = function (arr) {
//   let a = arr.join(' ').split(' ');
//   let ans = [];
//   for (let i = 0; i < a.length; i++) {
//     let seperate = a[i].split(''); //[h,e,l,l,o]
//     let cap = seperate[0].toString().toUpperCase(); // H
//     seperate = seperate.splice(1).join('');
//     let merge = cap.concat(seperate);
//     ans.push(merge);
//   }
//   return ans.join(',').split(',');
// }
// let str = ["hello", "how", "are", "you"];
// console.log(titleCaps(str));

/* o/p : [ 'Hello', 'How', 'Are', 'You' ] */

//1.b) IIFE

// (function () {
//   let arr = ["hello", "how", "are", "you"];
//     let a = arr.join(' ').split(' ');
//     let ans = [];
//     for (let i = 0; i < a.length; i++) {
//       let seperate = a[i].split(''); //[h,e,l,l,o]
//       let cap = seperate[0].toString().toUpperCase(); // H
//       seperate = seperate.splice(1).join('');
//       let merge = cap.concat(seperate);
//       ans.push(merge);
//     }
//     console.log(ans.join(',').split(','));
//   }) ();

/* ************************************************************************************************* */

// 1.c) Sum of all numbers in an array.

// let add = function (num) {
//     let sum =0;
//     for(let i=0;i<num.length;i++){
//         sum = sum + num[i];
//       }
//     return sum;
// }
// console.log(add([1,2,3,4,5]));

/* o/p : 15 */

// 1.c) IIFE

// (function () {
//   let num = [1, 2, 3, 4, 5];
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum = sum + num[i];
//   }
//   console.log(sum);
// })();


/* ******************************************************************************************* */
// 1.d) Return all the prime numbers in an array.

// let prime = function (num) {
//   let result = [];
//   for (let i = 0; i < num.length; i++) {
//     let count = 0;
//     for (let j = 1; j <= num[i]; j++) {
//       if (num[i] % j == 0) {
//         count++;
//       }
//     }
//     if (count == 2) {
//       result.push(num[i]);
//     }
//   }
//   return result;
// }
//   console.log(prime([4,8,2,6,17,11,13,15]));

/* o/p : [ 2, 17, 11, 13 ] */

// 1.d) IIFE

// (function () {
//   let num = [4,8,2,6,17,11,13,15];
//   let result = [];
//   for (let i = 0; i < num.length; i++) {
//     let count = 0;
//     for (let j = 1; j <= num[i]; j++) {
//       if (num[i] % j == 0) {
//         count++;
//       }
//     }
//     if (count == 2) {
//       result.push(num[i]);
//     }
//   }
//   console.log(result);
// }) ();

/* ******************************************************************************************* */
// 1.e) Return all the palindrome in an array.

// let palindrome = function(arr){
//   let final = [];
//   for(let i=0;i<arr.length;i++){
//       let rev = arr[i].split('').reverse().join('');
//       if(arr[i] == rev) {
//         final.push(arr[i]);
//      }
//     }
//     return final;
// }
// let check = palindrome(['malayalam','tamil','madam','guvi','dad']);
// console.log(check);

/* o/p : [ 'malayalam', 'madam', 'dad' ] */

// 1.e) IIFE

// (function(){
//   let arr = ['malayalam','tamil','madam','guvi','dad'];
//   let final = [];
//   for(let i=0;i<arr.length;i++){
//       let rev = arr[i].split('').reverse().join('');
//       if(arr[i] == rev) {
//         final.push(arr[i]);
//      }
//     }
//     console.log(final);
// }) ();

/* ************************************************************************************************ */
// 1.f) Return median of two sorted array of the same size.

// let median = function (arr1,arr2){
//   let merge = arr1.concat(arr2).sort();
//   let mid = merge.length / 2 ;
//   return ((merge[mid] + merge[(mid-1)]) / 2 );
// }
// console.log(median([1,2,3],[4,5,6]));

/* o/p : 3.5 */

// 1.f) IIFE

// (function (){
//   let arr1 = [1,2,3] ;
//   let arr2 = [4,5,6] ;
//   let merge = arr1.concat(arr2).sort();
//   let mid = merge.length / 2 ;
//   console.log((merge[mid] + merge[(mid-1)]) / 2 );
// }) ();

/* ************************************************************************************************* */
// 1.g) Remove duplicates from an array.

// let unique = function (arr){
//   return [...new Set(arr)];
// }
// console.log(unique([1,2,2,5,4,6,5]));

/*  o/p : [ 1, 2, 5, 4, 6 ] */

// 1.g) Remove duplicates from an array.

// (function (){
//   let arr = [1,2,2,5,4,6,5];
//   console.log([...new Set(arr)]);
// }) ();

/* ****************************************************************************************************** */
// 1.h) Rotate an array by K times.

// let rotate = function(n){
//   let arr = [1,2,3,4,5];
//   let first = arr.splice(arr.lenth-n , arr.length-n );    
//   return arr.concat(first);
// }
// console.log(rotate(2));

/* o/p : [ 4, 5, 1, 2, 3 ] */

// 1.h) Rotate an array by K times.

// (function(){
//   let n = 2;
//   let arr = [1,2,3,4,5];
//   let first = arr.splice(arr.lenth-n , arr.length-n );    
//   console.log(arr.concat(first));
// }) ();
/* =============================================================================================================================================================== */
// 3.a) Print odd numbers in an array.

// let odd = (arr) => {
//   let result = [];
//   for(let i=0;i<arr.length;i++){
//     if(arr[i] % 2 != 0){
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(odd([1,2,3,4,5]));

/* o/p : [ 1, 3, 5 ] */
/* ************************************************************************************* */
// 3.b) Convert all the string to title caps in a string array.

// let titleCaps = (arr) => {
//   let a = arr.join(' ').split(' ');
//   let ans = [];
//   for (let i = 0; i < a.length; i++) {
//     let seperate = a[i].split('');
//     let cap = seperate[0].toString().toUpperCase();
//     seperate = seperate.splice(1).join('');
//     let merge = cap.concat(seperate);
//     ans.push(merge);
//   }
//   return ans.join(',').split(',');
// }
// let str = ["welcome", "to", "guvi", "guys"];
// console.log(titleCaps(str));

/* o/p : [ 'Welcome', 'To', 'Guvi', 'Guys' ] */
/* ************************************************************************************* */
// 3.c)  Sum of all numbers in an array.

// let add = (num) => {
//   let sum =0;
//   for(let i=0;i<num.length;i++){
//       sum = sum + num[i];
//     }
//   return sum;
// }
// console.log(add([1,2,3,4,5]));

/* o/p : 15 */
/* *************************************************************************************** */
// 3.d) Return all the prime numbers in an array.

// let prime = (num) => {
//   let result = [];
//   for (let i = 0; i < num.length; i++) {
//     let count = 0;
//     for (let j = 1; j <= num[i]; j++) {
//       if (num[i] % j == 0) {
//         count++;
//       }
//     }
//     if (count == 2) {
//       result.push(num[i]);
//     }
//   }
//   return result;
// }
//   console.log(prime([2,4,6,7,21,26,23,56,57]));

/* o/p : [ 2, 7, 23 ] */
/* **************************************************************************************** */
// 3.e) Return all the palindrome in an array.

// let palindrome = (arr) => {
//   let final = [];
//   for(let i=0;i<arr.length;i++){
//       let rev = arr[i].split('').reverse().join('');
//       if(arr[i] == rev) {
//         final.push(arr[i]);
//      }
//     }
//     return final;
// }
// let check = palindrome(['mom','1331','chennai','pop','dad']);
// console.log(check);

/* o/p : [ 'mom', '1331', 'pop', 'dad' ] */


