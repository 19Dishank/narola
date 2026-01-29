const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
function demoFun(a,b,c,d){
    return "hello";
}
// apply()
let name = person.fullName.apply(person1);
console.log(name);
//bind()
let name2 = person.fullName.bind(person1)
console.log(name2());
//call()
let name3 = person.fullName.call(person1);
console.log(name3);

//length - return the length of parameter (count of parametr)
let f1 = person.fullName.length;
let f2 = demoFun.length;
console.log(f1);
console.log(f2);
//name
console.log(person.fullName.name);
console.log(demoFun.name);
//toString
console.log(person.fullName.toString());
console.log(demoFun.toString());
//valueOf()
console.log(person.fullName.valueOf());
console.log(demoFun.valueOf());

console.log(foo());
var foo = function(){
  return "var foo"
}
function foo(){
  return "function foo"
}
console.error("oh no")