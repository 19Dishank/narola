let text = "Hello World \uD800";
let text2 = 'hii my name is "Dishank" Dishank';
let saprateText = "Hii,How are you? | Hello User"
let multiLineString = `hey,
this is me,
im writing an email                  `;
let fName = "Dishank";
let lName = "Patel"
let age = 21;
console.log(text)
console.log(text2)
console.log(multiLineString)
console.log(`Good morning ${fName} ${lName}! and you are ${age} years old.`)
console.log(text2.length); // length of string
console.log(text2.charAt(2)); // character on defined index
console.log(text2.charCodeAt(0)); //code of character at the idexed position
console.log(text2.codePointAt(0)); //code of character at the idexed position
console.log(text2.at(2)); // get letter at index
console.log(text2[2]); // property access
console.log(fName.concat(" ",lName)); // first one is saprator
console.log("hello".concat(" ",fName)); // concate directly 
console.log(text2.slice(1,3)); // ignore index before 1 and after 3
console.log(text2.slice(1)); // ignore index before 1 and print all till end 
console.log(fName.toUpperCase()); // 
console.log(fName.toLowerCase()); // 
console.log(text.isWellFormed()); // 
console.log(text.toWellFormed()); // 
console.log(multiLineString.trim()); // 
console.log(lName.padStart(6,"1")); // add one untill stting length reach to 6
console.log(lName.padEnd(7,".")); // add . to end ultill string reach to lemgth 7
console.log(typeof(age.toString().padStart(4,"0")) + " "+age.toString().padStart(4,"0"));
console.log(fName.repeat(2));
console.log(text2.replace("Dishank","Patel")); // replace only if whole word match incluing case (Only First occurrence)
console.log(text2.replace(/dishank/i,"Patel")); // replace word,ignore case
console.log(text2.replace(/Dishank/g,"Patel")); // replace all Occurence
console.log(text2.replaceAll(/Dishank/g,"User")); // must use global flag
console.log(saprateText.split("|")); // saprate stings using '|'
console.log(saprateText.split("?")); // saprate stings using '?'
console.log(saprateText.split(",")); // saprate stings using ','
console.log(fName.split("")); // saprate stings in characters

// search Methods

let searchText = "Please locate where 'locate' occurs!";

//indexOf()
console.log(searchText.indexOf("locate")); // return index of specified word retirn -1 if no match found
console.log(searchText.lastIndexOf("locate")); // return index of specified word
console.log(searchText.indexOf("locate",10)); // starts fiding from 10th index
console.log(searchText.lastIndexOf("locate",15)); // starts finding backward from 15th index

// search() - same as indxOf but it can take regx values and can not take index as second parameter
console.log(searchText.search("locate"));
console.log(searchText.search(/locate/));

// match() - return array contining matches in strings 
let matchText = "The rain in SPAIN stays mainly in the plain";
console.log(matchText.match("ain"));
console.log(matchText.match(/ain/));
console.log(matchText.match(/ain/g));
console.log(matchText.match(/ain/gi));
let newMatchText = matchText.matchAll("rain");
let newMatchTextG = matchText.matchAll(/rain/g);
console.log(Array.from(newMatchText));
console.log(Array.from(newMatchTextG));

// include() - checks if word is present in the sentence // case sensitive
console.log(matchText.includes("rain"));
console.log(matchText.includes("rain",20)); // find after 20th index

//startsWith() - checks if sentence is stating with the expression // case sensitive
console.log(matchText.startsWith("The")); 
console.log(matchText.startsWith("rain",4)); 
console.log(matchText.endsWith("plain")); 
console.log(matchText.endsWith("The",3)); 