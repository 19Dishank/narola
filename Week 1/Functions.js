// // noarmal function
// function calc (a,b){
//     if (b === undefined){
//         b = 100;
//     }
//     return a + b; 
// }
// console.log(calc(5))


// // local variables - only accesible inside
// function myFun(){
//     let greet = "Good morning";
//     console.log(greet); // acessible
// }
// myFun();
// // console.log(greet);//error

// // function with parameters arguments
// function greet(name,age = 21){ //parameters
//     console.log(`hello ${name}, youre ${age} years old!`);
// }
// greet("Dishank"); // arguments

// // functions pass as value
// function funVal(name){
//     return name;
// }
// console.log("your name is " + funVal("Dishank") + " Right?");

// //rest parameter (...)
// function sum(...args){
//     sum = 0;
//     for (let arg of args) {
//         sum += arg;
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9));

// //argument object
// function findMax(){
//     let max = 0;
//     for(let i = 0;i < arguments.length;i++){
//         if(arguments[i]>max){
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(1,0,30,4,5,6,7,8,9));

// function sumAll(){
//     let sum = 0;
//     for(let i = 0;i < arguments.length;i++){
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(sumAll(10,2,3,4,5,6,7,8,9));

// //function expresion - pass function inside variable or expression

// let x = function(a,b) {return a + b};
// console.log(x(1,2));
// let z = x(4,3);
// console.log(z);

// // Arrow function
// myFunction = (a,b) => a * b;
// console.log(myFunction(5,2))

// userGreet = (name) => {"hello " + name;}
// console.log(userGreet("Dishank"));

// // IIFE (self invoking functions)
// (function(){
//     console.log("i invoked myself");
// })();
// // with parameter
// (function(name){
//     console.log(name);
// })("Dishank");

// // arrow function
// (() => {
//     console.log("hello")
// })();
// //with param
// ((name) => {
//     console.log(name);
// })("arrow");

// // call()
// const person ={
//     fullName : function(city,country){
//         return this.firstName + " " + this.lastName + ", " + city + ", " + country ;
//     }
// }
// const person1 = {
//     firstName : "John",
//     lastName : "Doe"
// }
// const person2 = {
//     firstName : "Steve",
//     lastName : "Rogers"
// }
// console.log(person.fullName.call(person1));
// const aa = person.fullName.call(person2, "Oslo", "Norway");
// console.log(aa);

// // apply() 
// const user = {
//     intro : function(){
//         return this.fName + " is " + this.age + " years old" ;
//     }
// }
// const user1 = {
//     fName : "Jonny",
//     age: 21
// }
// const uu = user.intro.apply(user1);
// console.log(uu);


// const user2 = {
//     intro : function(city,country){
//         return this.fName + " is " + this.age + " years old and lives in " + city + ", " + country;
//     }
// }
// const user3 = {
//     fName : "Jonny",
//     age: 21
// }
// const uuu = user2.intro.apply(user3,["surat","india"]);
// console.log(uuu);

// // bind() - used to borrow 
// const cars = {
//     details: function(){
//         return this.carName + ", " + this.carCompany;
//     }
// };
// const cars1 = {
//     carName: "M4",
//     carCompany: "BMW"
// };
// const ccc = cars.details.bind(cars1);
// console.log(ccc())

// (function () {
//     console.log("This runs immediately!");
// })();

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();