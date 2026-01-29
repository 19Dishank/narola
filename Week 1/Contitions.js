let age = 12;
if(age < 18){
    console.log("you can not vote because youre " , age);
}else{
    console.log("you can vote!!");
}

// nested if with multiple condition
let country = "india";
if (country == "india" && age > 18){
    console.log("you can ride!!");
}else{
    console.log("you can not ride because youre " , age);
}

// else if 
let marks = 45;
if (marks >= 80){
    console.log("Distintion");
}else if(marks >= 60){
    console.log("First Class");
}else if(marks >= 50){
    console.log("Second class");
}else{
    console.log("Fail");
}

// ternary 
let price = 100;
let isMember = false
let discount = isMember ? 0.5 : 0;
let bill = price - (price * discount);
console.log("ypur bill is",bill);

// Switch
let weekDay = 5;
let day;
switch(weekDay){
    case 1:
        day = "sunday";
        break;
    case 2:
        day = "monday";
        break;
    case 3:
        day = "tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    case 5:
        day = "tuesday";
        break;
    case 6:
        day = "sunday";
        break;
    default:
        day = "not valid day"
}
console.log(day)

// logical conditions
// AND '&&' of both true then true
if(country == "india" && age >= 18){
    console.log("condition is true!");
}
else{
    console.log("condition is False!");
}

// OR '||' if any one condition true then true
if(country == "india" || age >= 18){
    console.log("condition is true!");
}else{
    console.log("condition is False!");
}
// NOT '!' operator returns true if epression is false
if(!(country == "canada") ){
    console.log("condition is true..");
}else{
    console.log("condition is False..");
}
//Nullish Coalescing Operator (??) assigne value to null values
let name ;
let ulterName = "Unknown";
let displayName = name ?? ulterName;
console.log(displayName);