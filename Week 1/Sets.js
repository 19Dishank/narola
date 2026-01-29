// creation of set 
const myset = new Set(["a","b","c"]);

const mySet2 = new Set();
mySet2.add("a");
mySet2.add("b");
mySet2.add("c");

//display elements of set
let ele = "";
for(let i of myset){
    ele += i + "\n";
}
console.log(ele);
console.log(typeof(mySet2)); //sets are objects

//methods
// new Set() - used to create set
// add() - used to add element in set
// size - get size
console.log(mySet2.size);
// has() - checck occurence 
console.log(mySet2.has("a"));
console.log(mySet2.has("d"));
// forEach() - used to invoke function
let setEle = "";
myset.forEach(mySetFun);
function mySetFun(value){
    setEle += value + "\n";
}
console.log(setEle);

//values() - used to return values 
let setVals = "";
const setValArr = myset.values();
for(let i of setValArr){
    setVals += i + ", ";
}
console.log(setVals);

// keys() - does same as calues() since sets contain values only
// entries() - retun key-value pairs as value,value
let setEnt = "";
const setEntArr = myset.entries();
for(let i of setEntArr){
    setEle += i + "\n";
}
console.log(setEle);

// sets logic methods
//union() - returns unions with unique values
const U = new Set([1,2,3,4,5,6,7]);
const A = new Set([1,2,3,4]);
const B = new Set([4,5,6,7]);
const C = A.union(B);
console.log(C);
// intersection() - return unique values from 2 sets only 
console.log(A.intersection(B));
// diffrence() - retun diffrence bw two sets 
console.log(A.difference(B));

// symmetricDifference() - retun unique values only from 2 sets ;will not retun values that repeat
console.log(A.symmetricDifference(B));

// isSubsetOf() - checks if set is subset of another set
console.log(A.isSubsetOf(B));
console.log(B.isSubsetOf(A));
console.log(A.isSubsetOf(U));
console.log();

// isSupersetOf() - 
console.log(A.isSupersetOf(U));
console.log(A.isSupersetOf(B));
console.log(B.isSupersetOf(A));
console.log(U.isSupersetOf(A));
console.log();

//isDisJointFrom() -
console.log(B.isDisjointFrom(A));
console.log(mySet2.isDisjointFrom(A));



