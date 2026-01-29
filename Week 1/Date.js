const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

const d = new Date("Oct 13, 2014");
console.log("error in date: " + d);

const d1 = new Date(2025,1,18,8,30); // year,month,date,hour,minute
console.log(d1);

const d2 = new Date(2018, 11);
console.log("Date: " + d2);

console.log("Date in String: " + date.toString());
console.log("Date in to date String: " + date.toDateString());
console.log("Date in toUTC String: " + date.toUTCString());
console.log("Date in toISO String: " + date.toISOString());

//convert date to miliseconds

const msec =  Date.parse("1 jan ,2024");
console.log("date: " + msec);
//convert date1 to original date 
const date2 =new Date(msec);
console.log("date: " + date2);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const getmonth = new Date("2025-06-20");
console.log("month: " + months[getmonth.getMonth()]);

const m =new Date();
console.log("month: " + months[m.getMonth()]);
console.log("month: " + Date.now());


//set time 
const setdate = new Date("2025-06-20");
setdate.setFullYear(2100)
setdate.setMonth(0)
setdate.setDate(20)
setdate.setHours(20)
setdate.setMinutes(5)
setdate.setSeconds(5)
setdate.setMilliseconds(5)
console.log(setdate)