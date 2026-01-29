// creation of map
const myMap = new Map([
    ["John",100],
    ["Doe",200],
    ["Dev",300]
]);
// set() - used to add or update value
const myMap1 = new Map();
myMap1.set("banana",500);
myMap1.set("apple",600);
myMap1.set("mango",700);

//get() - used to get value
console.log(myMap.get("John"));

// maps are objets
console.log(typeof(myMap));

//size method
console.log(myMap.size)

// has()
console.log(myMap.has("Dev"));

//delete ()
myMap.delete("Dev");
console.log(myMap)

//dclear ()
myMap.clear();
console.log(myMap)
console.log(myMap.has("Dev"));

//entries()
let ele = "";
for(let i of myMap1.entries()){
    ele += i + "\n";
}
console.log(ele);

//keys() 
let eleKeys = "";
for(let i of myMap1.keys()){
    eleKeys += i +"\n"
}
console.log(eleKeys);
//values()
let eleVals  ="";
for (let i of myMap1.values()){
    eleVals += i + "\n";
}
console.log(eleVals);

//objects in map
const apple = {name:"apple"};
const banana = {name:"banana"};
const orange = {name:"orange"};

const fruit = new Map();
fruit.set(apple,100);
fruit.set(banana,200);
fruit.set(orange,500);

console.log(fruit.get(apple));

//generator
function* myStream(){
    yield 1;
    yield 2;
    return 3;
}
let myGenerator = myStream();
let text = "";
for (let i of myGenerator){
    text += i + "\n";
}
console.log(text);