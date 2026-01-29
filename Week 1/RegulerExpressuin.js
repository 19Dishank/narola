var text  = "Visit W3Schools"
var result = text.search(/w3schools/i);
console.log(result);
var result = text.match(/w3schools/i);
console.log(result);
var result = text.replace(/w3schools/i,"ApnaSchool");
console.log(result);

let color = "Black, white, red, green, blue, yellow.";
var result = color.match(/white|black|green/gi);
console.log(result);

// flags
var text = "Is this all there is?";
var pattern = /is/g; // global pattern find wll occurence
var result = text.match(pattern);
console.log(result);

// i 
var pattern = /is/i; // case sensitive
var result = text.match(pattern);
console.log(result);
// d - start or end 
var text = "aaaabb";
var pattern = /(aa)(bb)/d; // global pattern find wll occurence
var result = text.match(pattern);
console.log(result);

//s 
var text = "Line\nLine.";
var pattern = /Line./gs;
var result = text.match(pattern);
console.log("result " + result);

// classes 
let classText  = "He quick brown Fox jumps very high up Above it all.1,2,3,5,7,3"
let classP1 = /[AWH]/g;
console.log(classText.match(classP1));
let classP2 = /[A-Z]/g;
console.log(classText.match(classP2));

let classP3 = /[0-9]/g;
console.log(classText.match(classP3));

let classP4 = /[a-z]/g;
console.log(classText.match(classP4));

let classP5 = /\d/g;
console.log(classText.match(classP5)); // all digits

let classP6 = /\D/g;
console.log(classText.match(classP6)); // all non digits

let classP7 = /\w/g;
console.log(classText.match(classP7)); // all characters

let classP8 = /\W/g;
console.log(classText.match(classP8)); // all non characters (symbols,space)

let classP9 = /\s/g;
console.log(classText.match(classP9)); // all spaces

let classP10 = /\S/g;
console.log(classText.match(classP10)); // all non spaces

//Assertions
var text  = "Visit W3Schoolsi"
let pattern1 = /^visit/i; // starting 
console.log(text.match(pattern1)); 

let pattern2 = /s$/i; // ending
console.log(text.match(pattern2)); 

let pattern3 = /\bsi/i; // ending
console.log(text.search(pattern3)); 