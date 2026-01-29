let y = 5;
try {
    let z = x + y;
} catch (err) {
    console.log(err.name + " : " + err.message);
}
try {
    let x = yy;
    let yy = 1;
} catch (error) {
    console.log(error.name + " : " + error.message);
    
}

let num = 6;
try {
    if(num > 9){
        throw "numbers is too big"
    }
    if (num < 5){
        throw "number is too small"
    }
} catch (error) {
    console.log(error)
}