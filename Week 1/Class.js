// creation 
// class myClass {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// const myself = new myClass("Dishank",21);
// console.log(myself);

// class cars{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     old(){
//         const d = new Date();
//         return d.getFullYear() - this.age;
//     }
// }
// const myCar = new cars("supra",2000);
// console.log(myCar.old());

// class cars1{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     old(x){
//         return x;
//     }
// }
// const myCar1 = new cars1("supra",2000);
// console.log(myCar1.old(1000));

// // inheritance
// class Person{
//     constructor(fName){
//         this.fName = fName;
//     }
//     displayfName(){
//         return this.fName
//     }
// }
// class Intro extends Person{
//     constructor(fName,lName){
//         super(fName);
//         this.lName = lName;
//     }
//     displayFullName(){
//         return this.displayfName() + ", " + this.lName;
//     }
// }
// let myIntro = new Intro("Dishank","Patel");
// console.log(myIntro.displayFullName());

// class Class1 {
//     constructor(name){
//         this.name = name;
//     } 
//     get fName(){
//         return this.name;
//     }
//     set fName(n){
//         this.name = n;
//     }
// }
// const myName = new Class1("dishank");
// console.log(myName.fName);


class Class2 {
    constructor(age){
        this.age = age;
    }
    static displayAge(){
        return 21;
    }
}
const myAge = new Class2(20);
console.log(Class2.displayAge());

class Class3 {
    constructor(name){
        this.name = name;
    }
    static dis(x){
        return "hello " + x.name;
    }
}
const myName = new Class3("Dishank");
console.log(Class3.dis(myName));