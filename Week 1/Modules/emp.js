function emp(name){
    
    return name ;
}

const age = 21;
const city = "Surat";

const Person = {
    fullname : function(){
        return age + " " +city;
        
    }
};
module.exports = {emp, age, city, Person};
// export default {emp, age, city, Person};