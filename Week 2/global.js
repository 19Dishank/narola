let uri = "my test.asp?name=ståle&car=saab";
let encodedURI = encodeURI(uri);
let decodedURI = decodeURI(encodedURI);
console.log(encodedURI);
console.log(decodedURI);

let encodedURIComponent = encodeURIComponent(uri);
let decodedURIComponent = decodeURIComponent(encodedURIComponent);

console.log(encodedURIComponent);
console.log(decodedURIComponent);

//type conversion 
let str1 = "hello";
let str2 = "123";
let str3 = true;
let str4 = "1.023";
let str5 = 10;
let str6 = "10 fingers";
let str7;


console.log(Number(str1));
console.log(Number(str2));
console.log(Number(str3));
console.log(Number(str4));
console.log(Number(str5));
console.log(Number(str6));
console.log(Number(str7));
console.log();

console.log(parseFloat(str1));
console.log(parseFloat(str2));
console.log(parseFloat(str3));
console.log(parseFloat(str4));
console.log(parseFloat(str5));
console.log(parseFloat(str6));
console.log(parseFloat(str7));
console.log();

console.log(String(str1));
console.log(String(str2));
console.log(String(str3));
console.log(String(str4));
console.log(String(str5));
console.log(String(str6));
console.log(String(str7));
console.log();

console.log(parseInt(str1))
console.log(parseInt(str2))
console.log(parseInt(str3))
console.log(parseInt(str4))
console.log(parseInt(str5))
console.log(parseInt(str6))
console.log(parseInt(str7))
console.log();

