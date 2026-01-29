// toString() - convert number => string
const a = 100;
let b = 100.8646;
console.log(a.toString());
console.log(typeof(a));
console.log(typeof(a.toString()));
console.log(b.toFixed(0)); // return numbers after decimal
console.log(b.toFixed(2)); // return numbers after decimal
console.log(b.toPrecision(4)); // return numbers after decimal
console.log(b.valueOf());

// type concersion 

//Number()
let c = "10";
let d = "10.123";
let e = "Dishank";
console.log(Number(c));
console.log(typeof(parseInt(c)));
console.log(Number(d));
console.log(Number(e)); // return NaN

//parseInt()
let f = "-54.5"
let g = "-54"
console.log(parseInt(c));
console.log(typeof(parseInt(c)));
console.log(parseInt(f));
console.log(parseInt(g));
console.log(parseInt(d));

//parseFloat
console.log(parseFloat(b));
console.log(typeof(parseFloat(b)));

// number object method
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.54));
console.log(Number.isFinite(10.54));
console.log(Number.isFinite(10));
console.log(Number.isNaN(10));
console.log(Number.isNaN(NaN));
console.log(typeof(10n));
const num = a.toString(2)
console.log(num);

