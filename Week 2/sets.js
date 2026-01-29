const UnionSet = new Set(["A","B","C","D","E"]);
const letters = new Set(["A","B","C"]);
const lettersSubset = new Set(["C","D","E"]);
// letters.add("F");
// letters.add("G");
// letters.add("H");
// letters.delete("H");
console.log(letters);

// difference() - will not return common values of sets
let diff = letters.difference(lettersSubset);
console.log(diff);

// intersection() - retun common value of sets
let inter = letters.intersection(lettersSubset);
console.log(inter);

// isDisjointFrom() - if both sets have diffrent values it will return true if any one is same then false
let disjoint = letters.isDisjointFrom(lettersSubset);
console.log(disjoint);

// isSupersetOf() - 
let superset = UnionSet.isSupersetOf(letters);
console.log(superset);
// isSubsetOf()
let subset = letters.isSubsetOf(UnionSet);
console.log(subset);

// symmetricDifference() - return the different values of set
let summDifd = letters.symmetricDifference(lettersSubset);
console.log(summDifd);

//union() - return concatination of two sets
let union = letters.union(lettersSubset);
console.log(union);
// letters.clear();
// console.log(letters);
const vehicles = ['mustang', 'f-150', 'expedition','a','b'];
const [car, truck, suv,...rest] = vehicles;
console.log(typeof(rest))