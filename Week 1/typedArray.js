const myArr1 = new Uint8Array(5);
const myArr2 = new Uint8Array([0,1,2,3,4]);
const myArr3 = Uint8Array.of(0,1,2,3,4);
const myArr4 = Uint8Array.from([0,1,2,3,4]);
console.log(myArr1.constructor.name);

//methods 
//from()
const myArr5 = Int16Array.from("1234567890");
const myArr6 = Uint16Array.from([0,1,2,3,4]);
console.log(myArr5);
console.log(myArr6);
//of()
const myArr7 = Uint16Array.of(0,1,2,3,4,5,6);
console.log(myArr7);
console.log(myArr7.constructor.name);
console.log(myArr7.BYTES_PER_ELEMENT);
console.log(myArr1.BYTES_PER_ELEMENT);
// fill()
const myArr8 =  Uint16Array.from("123456789");
console.log(myArr8.fill(0));
console.log(myArr8.fill(11,1,5));

// arrayBuffer - is fix block of memory used to store typed array
const myBuff = new ArrayBuffer(8);
const myArr9 = new Uint8Array(myBuff);

myArr9[0] = 10;
myArr9[1] = 20;
myArr9[2] = 30;
myArr9[3] = 40;
myArr9[4] = 50;
myArr9[5] = 60;
myArr9[6] = 70;
myArr9[7] = 80;
console.log(myArr9[0])
console.log(myArr9[1])
console.log(myArr9[2])
console.log(myArr9[3])
console.log(myArr9[4])
console.log(myArr9[5])
console.log(myArr9[6])
console.log(myArr9[7])

//
const newArr = new ArrayBuffer(10);
const view = new Uint8Array(newArr);
for(let i = 0;i < view.length;i++){
    view[i] = i;
}
console.log(view);