const text = "aaaabb Hello! My user_id is admin_007. I was born on 1995-12-30. Please contact me at dev-test@example.com or visit regex101.com. (Note: $100.00 != €100.00) #LearningRegex #2026.";

// /d
let result1 = text.match(/(aa)(bb)/d);
console.log(result1);

// /g global
let result2 = text.match(/com/g);
console.log(result2);

// /i - ignore case
let result3 = text.match(/hello/i);
console.log(result3);

// /m - multiline search
let textMultiline = `Is this
all there
is`;

let result4 = textMultiline.match(/^is/mgi);
console.log(result4);

// /s - dotAll 
let result5 = text.match(/0./sg);
console.log(result5);
console.log(text.charAt(35));

// [a] - matches characters between bracket
let result6 = text.match(/[A-Z0-5]/g);
console.log(result6);

let result7 = text.match(/[^a-zA-Z0-9]/g);
console.log(result7);
// | - OR
let result8 = text.match(/admin|born/gi);
console.log(result8);
// . 
let result9 = text.match(/a...n|a....b/gi);
console.log(result9);
// \w - word
let result10 = text.match(/\w/g);
console.log(result10);

// \W - not a word
let result11 = text.match(/\W/g);
console.log(result11);

// \d - digit
let result12 = text.match(/\d/g);
console.log(result12);

// \D -Not a digit
let result13 = text.match(/\D/g);
console.log(result13);

// \s - space
let result14 = text.match(/\s/g);
console.log(result14);

// \s - space
let result15 = text.match(/\S/g);
console.log(result15);

// {n}
let result16 = text.match(/\w{6}/g);
console.log(result16);

// {n,m}
let result17 = text.match(/\w{5,9}/g);
console.log(result17);
// {n,}

let result18 = text.match(/\w{5,}/g);
console.log(result18);