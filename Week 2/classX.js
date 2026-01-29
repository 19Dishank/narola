class car{
    constructor(name){
        this.carName = name;
    }
    displayDetails(){
        return "i have a " + this.carName;
    }
}
class model extends car{
    constructor(name,model){
        super(name);
        this.modelYear = model;
    }
     displayDetails1(){
        const d = new Date();
        const year = d.getFullYear();
        let age =  year - this.modelYear;
        return this.displayDetails() + " " + age + " years old"; 
    }
}
const myCar = new model("mustang",2021);
console.log(myCar.displayDetails1());