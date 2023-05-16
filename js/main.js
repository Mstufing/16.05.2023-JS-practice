
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
