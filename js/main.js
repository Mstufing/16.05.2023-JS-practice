
// todo ----- VERY EASY -----

// ? Task #1
// ? Product Divisible by Sum?
// todo Whats wrong with code ? Function works properly but user gets wrong result in HTML !!!

// function divisible(arr) {
//     let productArr = arr.reduce((acc, cur) => acc * cur);
//     let sumArr = arr.reduce((acc, cur) => acc + cur);

//     let psArr = [productArr, sumArr];
//     return psArr.reduce((acc, cur) => acc % cur == 0 ? true : false)
// }

// let myBtn = document.querySelector('.btn');

// myBtn.onclick = () => {
//     let myInp = document.querySelector('.inp');
//     let myResult = document.querySelector('.result');

//     myResult.innerHTML = divisible(myInp.value.trim().split(","));
// }

// ? Task #2
// ? Where is Bob!?!

// function findBob(names) {
//     let a = 'Bob';
//     return names.indexOf(a);
// }

// let myBtn = document.querySelector('.btn');

// myBtn.onclick = () => {
//     let myInp = document.querySelector('.inp');
//     let myResult = document.querySelector('.result');

//     myResult.innerHTML = findBob(myInp.value.trim().split(" "));
// }

// ? Task #3
// ? Find the Largest Number in an Array

// function findLargestNum(arr) {
//     return Math.max(...arr);
// }

// let myBtn = document.querySelector('.btn');

// myBtn.onclick = () => {
//     let myInp = document.querySelector('.inp');
//     let myResult = document.querySelector('.result');
//     let myArr = myInp.value.trim().split(" ");
//     myResult.innerHTML = findLargestNum(myArr);
// }

// ? Task #4
// ? Typing Game

// function correctStream(user, correct) {
//     return user.map(elem => {
//         for (let i = 0; i < correct.length; i++)
//             if (elem === correct[i])
//                 return 1;
//         return -1;
//     })
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let secondInp = document.querySelector('.inp2');
//     let myResult = document.querySelector('.result');

//     let userArr = firstInp.value.trim().split(" ");
//     let correctArr = secondInp.value.trim().split(" ");

//     myResult.innerHTML = correctStream(userArr, correctArr);
// }

// ? Task #5
// ? Next Element in Arithmetic Sequence

// function nextElement(arr) {
//     return +arr[arr.length - 1] + +(arr[arr.length - 1] - arr[arr.length - 2]);
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let myResult = document.querySelector('.result');

//     let myArr = firstInp.value.trim().split(" ");

//     myResult.innerHTML = nextElement(myArr);
// }

// ? Task #6
// ? Capture the Rook

// function canCapture([yourRook, opponentsRook]) {
//     return yourRook[0] === opponentsRook[0] ||
//         yourRook[yourRook.length - 1] === opponentsRook[opponentsRook.length - 1];
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let myResult = document.querySelector('.result');

//     let myArr = firstInp.value.trim().split(" ");

//     myResult.innerHTML = canCapture(myArr);
// }

// ? Task #7
// ? Fix the Error: Value vs. Reference Types

// // Fix this broken code!
// function checkEquals(arr1, arr2) {
//     if (arr1.join('') === arr2.join('')) {
//         return true
//     } else {
//         return false
//     }
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let secondInp = document.querySelector('.inp2');
//     let myResult = document.querySelector('.result');

//     let firstArr = firstInp.value.trim().split(" ");
//     let secondArr = secondInp.value.trim().split(" ");
//     myResult.innerHTML = checkEquals(firstArr, secondArr);
// }

// ? Task #8
// ? Fix the Error / Comparing Arrays (Part #2)

// // Fix this code
// function checkEquals(arr1, arr2) {
//     if (arr1.sort().join(" ") === arr2.sort().join(" ")) {
//         return true
//     } else {
//         return false
//     }
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let secondInp = document.querySelector('.inp2');
//     let myResult = document.querySelector('.result');

//     let firstArr = firstInp.value.trim().split(" ");
//     let secondArr = secondInp.value.trim().split(" ");
//     myResult.innerHTML = checkEquals(firstArr, secondArr);
// }

// ? Task #9
// ? Word Endings

// function addEnding(arr, ending) {
//     let myArray = [];
//     myArray = arr.map(elem => (elem + ending))
//     return myArray;
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let secondInp = document.querySelector('.inp2');
//     let myResult = document.querySelector('.result');

//     let myArr = firstInp.value.trim().split(" ");
//     myResult.innerHTML = addEnding(myArr, secondInp.value);
// }

// ? Task #10
// ? Negate the Array of Numbers

// function negate(arr) {
//     return arr.map(elem => elem * (-1));
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let myResult = document.querySelector('.result');

//     let myArr = firstInp.value.trim().split(" ");
//     myResult.innerHTML = negate(myArr);
// }



// todo ----- EASY -----

// ? Task #1
// ? Find the Smallest and Biggest Numbers

// function minMax(arr) {
//     let a = Math.min(...arr);
//     let b = Math.max(...arr);
//     return [a, b];
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let myResult = document.querySelector('.result');

//     let myArr = firstInp.value.trim().split(" ");
//     myResult.innerHTML = minMax(myArr);
// }

// ? Task #2
// ? Check if One Array can be Nested in Another

// function canNest(arr1, arr2) {
//     return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let secondtInp = document.querySelector('.inp2');
//     let myResult = document.querySelector('.result');

//     let firstArr = firstInp.value.trim().split(" ");
//     let secondArr = secondtInp.value.trim().split(" ");
//     myResult.innerHTML = canNest(firstArr, secondArr);
// }

// ? Task #3
// ? Sum of Resistance in Series Circuits

// function seriesResistance(arr) {
//     let myArr = arr.reduce((accumulate, curr) => Number(accumulate) + Number(curr));
//     if (myArr <= 1.0)
//         return `${myArr} ohm`;
//     return `${myArr} ohms`;
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let myInp = document.querySelector('.inp');
//     let myResult = document.querySelector('.result');
//     let myArr = myInp.value.trim().split(" ");

//     myResult.innerHTML = seriesResistance(myArr);
// }

// ? Task #4
// ? Filter out Strings from an Array
// ! ???

// function filterArray(arr) {
//     return arr.filter(elem => typeof elem === 'number')
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let myInp = document.querySelector('.inp');
//     let myResult = document.querySelector('.result');
//     let myArr = myInp.value.trim().split(" ");

//     myResult.innerHTML = filterArray(myArr);
// }

// ? Task #5
// ? Sort by String Length
// todo How the way Sort() Method works with parameters ???

// function sortByLength(arr) {
//     return arr.sort((a, b) => a.length - b.length)
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let myInp = document.querySelector('.inp');
//     let myResult = document.querySelector('.result');
//     let myArr = myInp.value.trim().split(" ");

//     myResult.innerHTML = sortByLength(myArr);
// }

// ? Task #6
// ? Sum of Cubes

// function sumOfCubes(nums) {
//     let newArr = nums.map(elem => Math.pow(elem, 3));
//     if (newArr.length === 0)
//         return 0;
//     return newArr.reduce((acc, cur) => acc + cur);
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let myInp = document.querySelector('.inp');
//     let myResult = document.querySelector('.result');
//     let myArr = myInp.value.trim().split(" ");

//     myResult.innerHTML = sumOfCubes(myArr);
// }

// ? Task #7
// ? Even All the Way

// function getOnlyEvens(nums) {
//     return nums.filter((elem, index) => elem % 2 === 0 && index % 2 === 0)
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let myInp = document.querySelector('.inp');
//     let myResult = document.querySelector('.result');
//     let myArr = myInp.value.trim().split(" ");

//     myResult.innerHTML = getOnlyEvens(myArr);
// }

// ? Task #8
// ? Sort an Array by String Length

// function sortByLength(arr) {
//     return arr.sort((a, b) => a.length - b.length)
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let myInp = document.querySelector('.inp');
//     let myResult = document.querySelector('.result');
//     let myArr = myInp.value.trim().split(" ");

//     myResult.innerHTML = sortByLength(myArr);
// }

// ? Task #9
// ? Burglary Series (10): Calculate Difference

// function calculateDifference(obj, limit) {
//     let myArr = Object.values(obj);
//     let sumArr = myArr.reduce((acc, cur) => Number(acc) + Number(cur));
//     return sumArr - limit;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let inp2 = document.querySelector(".inp2");
//     let res = document.querySelector(".result");

//     let myArr = inp1.value.trim().split(" ");

//     res.innerHTML = calculateDifference(myArr, inp2.value);
// }

// ? Task #10
// ? Is the Average of All Elements a Whole Number?

// function isAvgWhole(arr) {
//     let sum = arr.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue));
//     return sum % arr.length === 0;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let res = document.querySelector(".result");

//     let myArr = inp1.value.trim().split(" ");

//     res.innerHTML = isAvgWhole(myArr);
// }