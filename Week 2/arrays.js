// array[] - creates array
const myArr1 = ["a","b","c","d"];    // array with values
const myArr2 = ["e","f","g","h"];    // array with values
const myEmptyArr = [];              // array with empty values we can add values later
const fruits = ["Banana", "Orange", "Apple", "Mango","Kiwi","Papaya"];

// new Array() - using array constructor
const carsArr = new Array(["saab","bmw","audi"]); 
const emptyCarsArr = new Array();

// at() , [i] - used to access values
const getFirstChar = myArr1.at();    // value of 0th index
const getCharBtIndex = myArr1.at(1);    // value of 1st index
const getLastChar = myArr1.at(-1);    // value of last index
console.log(getFirstChar , getCharBtIndex, getLastChar);
const getCar = myArr1[1];
console.log(getCar);

//concate() - used to join arrays
const newArr = myArr1.concat(myArr2);
console.log(newArr);

//constructor 
let arrConstructor = myArr1.constructor;
console.log(arrConstructor);

//copyWithin() - 
console.log(fruits.copyWithin(1,0));
console.log(fruits.copyWithin(2,0,2));

// entries() - return object with key value pairs
let text = "";
for(let i of fruits.entries()){
    text += i + "\n";
}
console.log(text);


//every() - checks every element fullfiling condition if any ne fails it returs false
const ages = [32, 33, 12, 40, 20];
function checkAge(age){
    return age > 18
}
console.log(ages.every(checkAge));

//fill() - override array values using value passed in argument
console.log(ages.fill(18));
console.log(ages.fill(180,1,3));

// filter() - return new array witl element that passed test from function
const empAges = [12, 33, 12, 40, 20];
function isAdult(age){
    return age >=21
}
const adultList = empAges.filter(isAdult);
console.log(adultList);

const aa = empAges.filter((age) => age >= 21);
console.log(aa);isAdult

//find() - return first element that pass the test
const findMethod = empAges.find(isAdult);
const findMethod2 = empAges.find(function(age,){
    return age >35
});
console.log(findMethod);
console.log(findMethod2);

//findIndex() - will return index of element that passes the test
const findIndexMethod = empAges.findIndex(isAdult);
console.log(findIndexMethod);

//findLast() - return last element that passes the test
const findLastMethod = empAges.findLast(isAdult);
console.log(findLastMethod);

//findLastIndex() - return index of last element that passes the test
const findLastIndexMethod = empAges.findLastIndex(isAdult);
console.log(findLastIndexMethod);

//flat() - concates subarray elements 
const myArrForFlat = [1, 2, [3, [4, 5, 6], 7], 8];
const array1AfterFlat = myArrForFlat.flat();
const array2AfterFlat = myArrForFlat.flat(2);
console.log(array1AfterFlat);
console.log(array2AfterFlat);

//flatMap() - maps all array and ewturn new array after flatting
const arrayForMapFlat = array2AfterFlat.slice(0,6);
const newFlatMapArr = arrayForMapFlat.flatMap((x) => [x, x * 10]);
console.log(newFlatMapArr);

//forEach() - perform action on each items in array
let sum = 0;
function sumFun(value){
    sum += value;
}
function mulFun(value,index,arr){
    arr[index] = value * 10
}
const arrayForEach = arrayForMapFlat.forEach(sumFun);
arrayForMapFlat.forEach(mulFun);
console.log(sum);
console.log(arrayForMapFlat);

//Array.from() - creates array
let alphabets = "ABCDEF";
const alphabetsArray = Array.from(alphabets);
console.log(alphabetsArray);

//inclueds() - finds id element is exist in array 
console.log(fruits.includes("Kiwi"));
console.log(fruits.includes("Banana",4));

//indexOf() - retun index of value retun -1 if not found
console.log(fruits.indexOf("Mango"));
console.log(fruits.indexOf("Mango",5)); // starts finding from index 5

//Array.isArray() - check if object is an array or not 
console.log(Array.isArray(fruits));
console.log(Array.isArray(text));

//join() - used to join values inside the array 
let joinText = fruits.join(" and ");
let joinText2 = fruits.join(", ");
console.log(joinText);
console.log(joinText2);

//keys() - used to return keys of array
let keysText = "";
for(let i of fruits.keys()){
    keysText += i + "\n";
}
console.log(keysText);

//lastIndexOf() - return last index where value occured
console.log(fruits.lastIndexOf("Banana"));
console.log(fruits.lastIndexOf("Banana",4)); // starts searching from 4th position
console.log(fruits.lastIndexOf("Banana",-2)); // start searching from second last position

// length - uses to get the size of array
console.log("Length of array: " + fruits.length);
fruits.length = 3;  // length of array set to 3 now it will return only first 3 ele 
console.log(fruits.length , fruits);

//map() - used to creates new array from calling function on each element

const _a = array2AfterFlat.map(function(x){
    return x * 10;
})
console.log(_a);

//Array.of() - creates array using argument values
const _arr = Array.of(1,2,3,4,5);
const _arr1 = Array.of("a","b","c");
console.log(_arr1);

// pop() - removes last elem
_arr.pop();
console.log(_arr);

// prototype() - used to change the prototype of arrray or object
Array.prototype.myUppCase = function(){
    for(let i = 0; i < this.length;i++){
        this[i] = this[i].toUpperCase();
    }
};
_arr1.myUppCase();
console.log(_arr1);

function person(name,age){
    this.name = name;
    this.age = age;
}
person.prototype.nationality = "indian" ;

//push() - used to add array at last 
_arr1.push("D");
_arr1.push("E","F","G");
console.log(_arr);

//reduce() - returns a single array
let sum1 = 0;
const reducedArray = _arr.reduce(function(sum1,x){
    return sum1 - x;
});
console.log(reducedArray);

//reduceRight() - executes from right
function redRig(total,value){
    return total - value;
}
const redrig = _arr.reduceRight(redRig);
console.log(redrig)

//rest operator - used to assign rest of the values 
let a,bb,rest 
[a,bb,...rest] = _arr1;
console.log(a);
console.log(bb);
console.log(rest);

//reverse() - used to reverse the array
console.log(_arr.reverse());
console.log(_arr1.reverse());

//shift() - removes the first item of array 
_arr.shift();
console.log(_arr);

//some() - checks if some elemets pass the test
function CheckSome(age){
    return age > 18;
}
console.log(ages.some(CheckSome));


// spread
console.log(Math.max(..._arr))
console.log(Math.min(..._arr))
const _arr2 = [..._arr,..._arr1];
console.log(_arr2);

// toreversed() 
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
const fruits4 = fruits3.toReversed();
console.log(fruits4);

// toSorted
const fruits5 = fruits3.toSorted();
console.log(fruits5);

//sort() 
console.log(_arr1.sort());
function sortNum(a,b){
    return a - b
}
console.log( _arr.sort(sortNum));

//values() - return the values of array
let ft = "";
for(let i of fruits3.values()){
    ft += i + ", "
}
console.log(ft);

//valuesOf() - directly returns value of array
console.log(fruits3.valueOf());

//with() - update 
const newFruits = fruits3.with(1,"Kiwi");
console.log(newFruits);

const a1 =[1];
const a2 =[1];
console.log (a1 === a2);