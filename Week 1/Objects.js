// creating objects
const person1 = {
    firstName : "Dishank",
    lastName : "Patel",
    age : 21,
    dept : "JS",
    fullName : function(){return this.firstName + " " + this.lastName}
}
console.log(person1.fullName());
const person2 ={};
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 22;
person2.dept = "Python";
console.log(person2.firstName + " Works in " + person2.dept + " department");

//constructor
function Person(fName,lName,age,dept){
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.dept = dept;
}
const user = new Person("Dev","Stans",33,"C++");
console.log("name: " + user.firstName);
console.log("name: " + user["firstName"]);

//adding proerties
function Users(fName,lName,age,dept){
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.dept = dept;
    this.middleName = "Undefined"
}
console.log(Users.middleName);

//deleting property

const person3 ={};
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 22;
person2.dept = "Python";
delete person3.age;
console.log(person3.age);

const person4 = {
    firstName : "Dishank",
    lastName : "Patel",
    age : 21,
    dept : "JS"
}
// person4.fullName = function(){return this.firstName + " " + this.lastName};
// console.log(person4.fullName());

//displaying objects using for loop
let text = "";
for (let x in person4){
    text += person4[x] + "\n";
};
// console.log(text);

//using array object.values()
const ArrPer = Object.values(person4);
let text2 = ArrPer.toString();
console.log(text2);

// using json.stingyfy()
let text3 = JSON.stringify(person4);
console.log(text3);

//using object.entries
let text4 = "";
for(let [key,value] of Object.entries(person4)){
    text4 += key + ":" + value + "\n";
}

console.log(text4);

//object.create() - creates object from existing obj
const person = {
  firstName: "NAME",
  lastName: "SURNAME"
};
const man = Object.create(person);
man.lastName = "Doe"
console.log(man.firstName);
console.log(man.lastName);

// fromEntries() - to create object from key/value pairs
const fruits = [
["apples", 300],
["pears", 900],
["bananas", 500]
];
const fruit = Object.fromEntries(fruits);
console.log(fruit.apples);

//object.assign()
const person10 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person20 = {firstName: "Anne",lastName: "Smith"};
Object.assign(person10,person20);
let display = Object.entries(person10)
console.log(display);

// constructor 
function Person (fName,lName,age,eyeColor){
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.eyeColor = eyeColor;
}
const father = new Person ("john","Doe", 50,"black");
const mother = new Person ("sally","Doe", 45,"black");
console.log(father.firstName);
console.log(mother.firstName);
Person.prototype.city = "Surat";
console.log(mother);