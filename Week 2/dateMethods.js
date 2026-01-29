const date1 = new Date();
const date2 = new Date("feb 01,2021");
const date3 = new Date(1708005549511);
const date4 = new Date(2021,11,21,12,12,12,12);
console.log(date1);
console.log(date2);
console.log(date3);
date4.setDate(22);
console.log(date4);
console.log();

//methods 
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();
let miliseconds = date1.getMilliseconds();
let time = date1.getTime();
let now = Date.now();

console.log(year);
console.log(month);
console.log(date);
console.log(hour);
console.log(minute);
console.log(second);
console.log(miliseconds);
console.log(time);// return tine in miliseconds
console.log(now); 