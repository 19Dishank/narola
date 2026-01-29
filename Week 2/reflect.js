//reflect.apply()
function greet(msg) {
    return msg + ", " + this.name;
}

const person = { name: "Dishank" };
let msg = Reflect.apply(greet, person, ["hello"]);
console.log(msg);

//reflect.construct()
const arr = Reflect.construct(Array, ["A", "B", "C"]);

//Reflect.defineProperty() - modifies or defines a property
const user = {};
const user1 = {
    name:"dishank",
};
user.name = "John";
console.log(user.name);
Reflect.defineProperty(user, "id", {
    value: 123,
    writable: false
});

console.log(user.id);

//Reflect,deleteProperty
let isDeleted = Reflect.deleteProperty(user, "name");
if (user.name == undefined) {
    console.log(true);
}
else {
    console.log(false);
}
console.log(user.name);
//Reflect.get()
const userID = Reflect.get(user, "id");
console.log(userID);
//Reflect.has()
const ans = Reflect.has(user, "name");
const ans1 = Reflect.has(user, "id");
console.log(ans);
console.log(ans1);

const isExtensibleAns = Reflect.isExtensible(user1);
console.log(isExtensibleAns);

//Reflect.set()
const newAge = Reflect.set(user,"age",22);
console.log(user.age);
