const cars = ['bmw','audi','skoda','suzuki']; // can make array using one element
const cl = cars.length;

console.log(cars);
console.log(cars.toString());
const colors = [];
colors[0] = "red";
colors[1] = "blue";
colors[2] = "pink";
colors[3] = "orange";
console.log(colors.toString());

const numbers = new Array(1,2,3,4,5,6); // cant make array using one element


console.log(cars.length);
console.log(cars.sort());

//accessing array using for loop 
let car = "";
for(let i = 0; i < cl; i++){
    car += cars[i] + "\n";
}
console.log(car);

// acess values using forEach
let f ="";
colors.forEach(myFun);
function myFun(color){
    f += color + "\n"
}
console.log(f)

// push element in array
colors.push("yellow");
colors[colors.length] = "black"
console.log(colors);

// way to check array is array
console.log(typeof(colors));
console.log(Array.isArray(colors));
console.log(colors instanceof Array);

// nested array
const person = {
    name: "Dishank",
    age :21,
    c:[
        {company:"bmw",name:"M4"},
        {company:"Audi",name:"R8"},
        {company:"ford",name:"mustang"},
        {company:"toyota",name:"supra"},
    ]
};
let list = "";
for(let i in person.c ){
    list += person.c[i].company + " : ";
   
    for (let j in person.c[i].name){
        list += person.c[i].name[j] ;
         
    }
    list += "\n"
}

console.log(list)

// methods 
console.log(cars.length);  
// console.log(cars.length = 2); // length set to 2 
// console.log(cars);  
console.log(cars.toString());  // return array in sting
console.log(cars.at(2)); // access element using index 
console.log(cars[2]);  // access element using index

console.log(cars.join(" | "));  // saprate values using |

cars[3] = "maruti suzuki"; // change value of 4th position 

console.log(cars.pop());  // remove last element 
console.log(cars); 

console.log(cars.push("skoda"));  // at elememt at last positon; will return size afrer adding
console.log(cars);

console.log(cars.shift());  // remove first element
console.log(cars);

console.log(cars.unshift("audi"));  // add element at first index ; retun size after adding element
console.log(cars);

// delete cars[0];
// console.log(cars);

const mixArray = cars.concat(colors); // concat 2 array
const mixArray1 = cars.concat("DEMO"); //concat array with specified text
console.log(mixArray);
console.log(mixArray1);

//flat array
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

//flatmap
const flatMapArr = newArr.flatMap(x => [x,x*10]);
console.log(flatMapArr);

//splice - used to add new elemet in array
// cars.splice(2,0,"honda","fiat"); // add honda and fiat at 3rd position
// console.log(cars);

cars.splice(2,1,"honda","fiat"); // add honda and fiat at 3rd position and remove 2 elements 
console.log(cars);

cars.splice(2,1); // remove 1 element from 3rd position (index,count)
console.log(cars);

//slice - delete element and display it to anther array
const cads = cars.slice(2); // (count)
console.log(cars);
console.log(cads);


//array search methods 
console.log( "index of 'bmw' at : " + cars.indexOf("bmw"));
console.log( "last index of 'fiat' at : " + cars.indexOf("fiat")); // start searching from lst index
console.log( "cars array include BMW? : " + cars.includes("bmw")); // check existance
console.log( "cars array include honda? : " + cars.includes("honda")); // check existance

//find()
const number = [4, 9, 16, 29, 25];
let first = number.find(myFindFun);
function myFindFun (value,index,array){
    return value > 18;
}
console.log(first);

let second = number.findIndex(myfindFun);
function myfindFun(value,index,array){
    return value > 18;
}
console.log(second);

//sorting methods
//modify array
console.log(cars.sort());
console.log(cars.reverse());
//new array 
const newCars1 = cars.toSorted();
console.log(newCars1);
const newCars = newCars1.toReversed();
console.log(newCars);

//numaric sort - without function js sort numbers using alphabetically
console.log(number.sort(function(a,b){return a-b}));  // ascending
console.log(number.sort(function(a,b){return b-a}));  // descending
console.log(number[0]);// maximum number (desc)
console.log(number.length -1);// minimum number (desc)

//sorting objs
 const ccc=[
        {company:"bmw",name:"M4",year:2021},
        {company:"Audi",name:"R8",year:2025},
        {company:"ford",name:"mustang",year:2020},
        {company:"toyota",name:"supra",year:2011},
    ]
const sortedObj = ccc.sort(function(a,b){return a.year - b.year})
console.log(sortedObj);

// array for each
let result = "";
number.forEach(feFun);
function feFun(value){
    return result += value + 1 + "\n";
}
console.log(result);

//map() - creates new aray
let resultMap = "";
let number1 = number.map(mFun);
function mFun(value,index,array){
    resultMap += value*2 +"\n";
}

console.log(resultMap);


//reduce()
let resultReduce = number.reduce(rFun1);
function rFun1(total,value,index,array){
    return total + value;
}
console.log(resultReduce);
//reduceRight
let resultReduceRight = number.reduceRight(rFun2);
function rFun2(total,value,index,array){
    return total + value;
}
console.log(resultReduceRight);

//every - checks every values is grater than 18
let resultEvery = number.every(rFun3);
function rFun3(value){
    return value > 18;
}
console.log(resultEvery);

//some checks some values are graterthan 18
let resultSome = number.some(rFun4);
function rFun4(value){
    return value > 18;
}
console.log(resultSome);

let text = "DISHANK";
console.log(Array.from(text));
const nums = [1,2,3,4];
const fnum = Array.from(nums,(x)=> x *2);
console.log(fnum);
// keys()
let k = "";
const ko = colors.keys();
for(let i of ko){
     k += i +"\n";
}
console.log(k)

//entries()
let kv = "";
const kva = colors.entries();
for(let i of kva){
    kv += i + "\n";
}
console.log(kv);

// with() - used to update array without changing og array
const months = ["january","february","mar"];
const newMonths = months.with(2,"march");
console.log(newMonths);

// spread ... - used to concate arrays and copy
const q2m = ["april","mary","jun"];
const q1m = [...newMonths]; // copied newmonth array
const fullMonths = [...q1m,...q2m]; //concatination
console.log(fullMonths);

const maxNum = Math.max(...number);
console.log(maxNum);

const minNum = Math.min(...number);
console.log(minNum);

let num1,num2,rest;
[num1, num2,...rest] = number; // assigned values to num1 and num2 and rest to rest
console.log(num1);
console.log(num2);
console.log(rest);

colors.push("yellow");
// colors[colors.length] = "black"
console.log(colors);