// // console.log(a);
// console.log(b);
// // console.log(c);
// let a = 1;
// var b = 2;
// const c = 3;
// console.log(a);
// console.log(b);
// console.log(c);

// // only var is hoisted

// // ---------------------------------------------------

// console.log(getName);
// console.log(getName());

// function getName(){
//     console.log("Ujjwal")
//     return "Pathak"
// }

// // ---------------------------------------------------

// console.log(getName);

// var getName = () => {
//     console.log("Ujjwal")
//     return "Pathak"
// }

// // ---------------------------------------------------

// var x = 10;
// if(true){
//     var x =20;
//     console.log(x);
// }
// console.log(x);

// console.log("-")

// let y = 10;
// if(true){
//     let y =20;
//     console.log(y);
// }
// console.log(y);

// console.log("-")

// const z = 10;
// if(true){
//     const z =20;
//     console.log(z);
// }
// console.log(z);

// // ---------------------------------------------------

// console.log(x)
// {
//     var x = 10;
// }
// console.log(x)

// // ---------------------------------------------------

// function x(){
//     var x = 10;
//     setTimeout(function(){
//         console.log(x);
//     }, 3000);
//     x = 20;
// }

// x();

// function x(){
//     for(var i = 0; i < 5; i++){
//         close(i);
//         function close(i){
//             setTimeout(function(){
//                 console.log(i);
//             }, i * 1000);
//         }
//     }
// }

// x();

// // ---------------------------------------------------

// const users = [
//   { firstName: "akshay", lastName: "saini", age: 26 },
//   { firstName: "donald", lastName: "trump", age: 75 },
//   { firstName: "elon", lastName: "musk", age: 50 },
//   { firstName: "deepika", lastName: "padukone", age: 26 },
// ];

// let ans = users.reduce((arr, curr) => {
//     if(curr.age < 30){
//         console.log(curr.firstName)
//         arr.push(curr.firstName)
//     }
//     return arr
// }, []);

// console.log(ans)

// // ---------------------------------------------------



// // ---------------------------------------------------
