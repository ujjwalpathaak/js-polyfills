// The arrow function (cb) => {} does not bind this correctly.
// this.length will be undefined inside the function because
// arrow functions do not have their own this. They inherit it
// from the surrounding scope, which is the global object
// (or undefined in strict mode).

// -------------------------------------------------------------------

// Polyfill for map()

// Array.prototype.myMap = function (cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i]));
//     }

//     return temp;
// }

// let arr = [1, 2, 3, 4, 5];
// let cb = (curr) => {
//     return curr * 2;
// }
// let ans = arr.myMap(cb);

// console.log(ans);

// -------------------------------------------------------------------

// Polyfill for filter

// Array.prototype.myFilter = function (cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         if(cb(this[i])) temp.push(this[i]);
//     }

//     return temp;
// }

// let arr = [1, 2, 3, 4, 5];
// let cb = (curr) => {
//     return curr % 2 == 0;
// }
// let ans = arr.myFilter(cb);

// console.log(ans);

// -------------------------------------------------------------------

// Polyfill for reduce()

// Array.prototype.myReduce = function (cb, value) {
//     var accum = value || 0;
//     for (let i = 0; i < this.length; i++) {
//         accum = cb(this[i], accum);
//     }

//     return accum;
// }

// let arr = [1, 2, 0, 1, 3];
// let cb = (curr, value) => {
//     return value + curr;
// }
// let ans = arr.myReduce(cb, );

// console.log(ans);

// -------------------------------------------------------------------

// let person1 = {
//     firstName: "Ujjwal",
//     secondName: "Pathak"
// }

// let person2 = {
//     firstName: "Harshit",
//     secondName: "Kapoor"
// }

// function getFullName (...args) {
//     return this.firstName + " " + this.secondName + " " + JSON.stringify([...args]);
// }

// Function.prototype.customCall = function (context = {}, ...args){
//     context.fn = this;
//     return context.fn(...args);
// }

// custom call
// console.log(getFullName.customCall(person1, 1, 2, 3))
// console.log(getFullName.customCall(person2, 1, 2, 3))

// call func
// console.log(getFullName.call(person1))
// console.log(getFullName.call(person2))

// Polyfill for Apply()

// Function.prototype.customApply = function (context = {}, args = []){
//     context.fn = this;
//     return context.fn(...args);
// }

// custom call
// console.log(getFullName.customApply(person1, [3, 4, 5]))
// console.log(getFullName.customApply(person2, [3, 4, 5]))

// Polyfill for Bind()

// Function.prototype.customBind = function (context = {}, ...args1){
//     context.fn = this;
//     return function (...args2) {
//         return context.fn(...args1, ...args2);
//     }
// }

// custom bind
// const bindFunctionPerson1 = getFullName.customBind(person1, 3, 4, 5)
// console.log(bindFunctionPerson1(1, 2, 3));

// -------------------------------------------------------------------

// Polyfill for once()

// let obj = {
//     name: "Ujjwal"
// }
// let obj2 = {
//     name: "Pathak"
// }

// function once (func) {
//     let ran = false;
//     return function () {
//         if(!ran){
//             func.call(...arguments)
//             ran = true;
//             return;
//         }

//         console.log("Already ran once");
//     }
// }

// const hello = once(function () {
//     console.log(this.name);
// });
// const hello2 = once(function () {
//     console.log(this.name);
// });

// hello(obj)
// hello(obj2)
// hello2(obj2)

// -------------------------------------------------------------------

// Polyfill for memoize

// function memoize (func, context) {
//     let cache = new Map();
//     return function (...args) {
//         let key = JSON.stringify(args)
//         console.log(key)
//         if(!cache.has(key)){
//             let result = func(...args);
//             cache.set(key, result);
//         }
//         return cache.get(key);
//     }
// }

// const f = memoize(function (a, b){
//     console.log(a, b)
//     for (let i=1; i <= 100000000; i++){}
//     return a * b;
// })

// console.time("First call");
// console.log(f(9467, 7649));
// console.timeEnd("First call");

// console.time("Second call");
// console.log(f(9467, 7649));
// console.timeEnd("Second call");

// -------------------------------------------------------------------

// Polyfill for promise

// function MyPromise(executor) {
//     let onResolve,
//       onReject,
//       isFullfilled = false,
//       isRejected = false,
//       isCalled = false,
//       value;
  
//     function resolve(val) {
//       isFullfilled = true;
//       value = val;
  
//       if (typeof onResolve === "function") {
//         onResolve(value);
//         isCalled = true;
//       }
//     }
  
//     function reject(val) {
//       isRejected = true;
//       value = val;
  
//       if (typeof onReject === "function") {
//         onReject(value);
//         isCalled = true;
//       }
//     }
  
//     this.then = function (cb) {
//       onResolve = cb;
//       if (isFullfilled && !isCalled) {
//         isCalled = true;
//         onResolve(value);
//       }
//       return this;
//     };
  
//     this.catch = function (cb) {
//       onReject = cb;
//       if (isRejected && !isCalled) {
//         isCalled = true;
//         onReject(value);
//       }
//       return this;
//     };
  
//     try {
//       executor(resolve, reject);
//     } catch (err) {
//       reject(err);
//     }
//   }
  
//   const examplePromise = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         // reject(2);
//         resolve(2);
//     }, 1000)
//   });
  
//   examplePromise
//     .then((res) => {
//       console.log("Resolved:", res);
//     })
//     .catch((err) => {
//       console.error("Rejected:", err);
//     });