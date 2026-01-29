const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const person2 = {firstName: "Anne",lastName: "Smith"};
const person3 = {};

let text = Object.assign(person1,person2);  // properties of person1 assigned to person2 which person2 dosent have
let text2 = Object.assign(person1,person3);  // properties of person1 assigned to person2 which person2 dosent have
console.log(text);
console.log(text2);

//create() - create object from existing obj
let man = Object.create(person1);
man.firstName = "Dishank";
man.lastName = "Patel";
man.age = 21;
console.log(Object.assign(person1,man));

let personTxt = "";
for(let[k,v] of Object.entries(person1)){
    personTxt += k + " - " + v + "\n";
}
console.log(personTxt);
Object.seal(person1);

try {
    delete person1.age;
} catch (err) {
   console.log(err);
}
console.log(person1);
console.log(Object.isSealed(person1));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.seal(fruits);    
let txt = "";
try {
  fruits.push("Kiwi");
}
catch (err) {
  console.log(err.name);;
}
console.log(person2 instanceof Object)
console.log(person2 instanceof Array)