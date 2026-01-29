const fruits = new Map([
    ["apples",100],
    ["banana",300],
    ["mango",700],
]);
fruits.set("kiwi",200);
fruits.delete("apples");
console.log(fruits);

// fruits.clear();
let me = fruits.entries();
let text = "";
for(let i of me){
    text += i + "\n";
}
console.log(text);
let txt = "";
fruits.forEach(function(key,value){
    txt += key + " = " + value + "\n";
})
console.log(txt);

console.log(fruits.get("kiwi"));
// Create an Array
const fruits1 = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

const result = Map.groupBy(fruits1, myCallback);
console.log(result);

console.log(fruits.has("apples"));
console.log(fruits.has("kiwi"));

let fk = fruits.keys();
let fTxt = "";
for (let i of fk){
    fTxt += i + "\n"
}
console.log(fTxt);
console.log(fruits.size);

let fv = fruits.values();
let vTxt = "";
let total = 0;
for(let i of fv){
    vTxt += i + "\n";
    total += i;
}
console.log(vTxt);
console.log(total);