// console.log(Math.PI); // value of pi
// console.log(Math.E); // value of euler.s number
// console.log(Math.SQRT2); // squre root of 2
// console.log(Math.SQRT1_2); // squre root of half
// console.log(Math.LN2); // natural logarithm of 2
// console.log(Math.LN10); //natural logarithm of 10
// console.log(Math.LOG2E); // base logarithm of 2
// console.log(Math.LOG10E); //base logarithm of 10

//methods() 

//round() - will return nearest integer
console.log(Math.round(1.5));
console.log(Math.round(1.2));
console.log(Math.round(-1.2));
console.log();

//celi() - return up to nearest rounded integer 
console.log(Math.ceil(1.5));
console.log(Math.ceil(1.2));
console.log(Math.ceil(-1.2));
console.log();

//floor() - retun down to nearest integer
console.log(Math.floor(1.5));
console.log(Math.floor(1.2));
console.log(Math.floor(-1.2));
console.log();

//trunc() - retutn the integer part of number
console.log(Math.trunc(5.5));
console.log(Math.trunc(5.2));
console.log(Math.trunc(-5.2));
console.log();

//sign() - return 1 if positive; -1 if negetive; 0 if zero
console.log(Math.sign(10));
console.log(Math.sign(-8));
console.log(Math.sign(0));
console.log();

//pow() - return power using x,y args
console.log(Math.pow(2,2));
console.log(Math.pow(2,5));
console.log(Math.pow(5,2));
console.log();

//sqrt() - squre root of number
console.log(Math.sqrt(4));
console.log(Math.sqrt(144));
console.log(Math.sqrt(64));
console.log();

//abs() - return absolute(positive) value
console.log(Math.abs(-7));
console.log(Math.abs(-1.2));
console.log(Math.abs(2.3));
console.log();

//sin() - 
console.log(Math.sin(90 * Math.PI / 180));
console.log();

//cos() - 
console.log(Math.cos(0 * Math.PI / 180));
console.log();

//min() max()
console.log(Math.max(1,2,5));
console.log(Math.min(1,-1,2,5));
console.log();

//random() - return random number bw 0 and 1
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));

//random function
function randomNum(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(randomNum(1,3));