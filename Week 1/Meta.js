const person = {name: "John", lastname: "Doe"};

// reflect has() 
const reflectHas = Reflect.has(person,"name");
let reflectHas2 = "name" in person;
console.log(reflectHas);
console.log(reflectHas2);

// reflect deleteProperty()
const reflectDel = Reflect.deleteProperty(person, "name");
console.log(reflectDel);

//set()
const setLname = Reflect.set(person, "lastname","Hero");
console.log(setLname);

// get()
const getLname = Reflect.get(person, "lastname");
console.log(getLname);

//construct 
const colors = Reflect.construct(Array,["red","green","blue"]);

//defineProperty()
const user = {};
Reflect.defineProperty(user,"id",{
    value: 1,
    writable: false
})
console.log(user)
