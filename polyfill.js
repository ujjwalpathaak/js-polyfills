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
//     var accum = value;
//     for (let i = 0; i < this.length; i++) {
//         accum = accum ? cb(this[i], accum) : this[i];
//     }

//     return accum;
// }

// let arr = [1, 2, 3, 4, 5];
// let cb = (curr, value) => {
//     return value + curr;
// }
// let ans = arr.myReduce(cb, 0);

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