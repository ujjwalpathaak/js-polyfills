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

Array.prototype.myReduce = function (cb, value) {
    var accum = value;
    for (let i = 0; i < this.length; i++) {
        accum = accum ? cb(this[i], accum) : this[i];
    }

    return accum;
}

let arr = [1, 2, 3, 4, 5];
let cb = (curr, value) => {
    return value + curr;
}
let ans = arr.myReduce(cb, 0);

console.log(ans);

// -------------------------------------------------------------------