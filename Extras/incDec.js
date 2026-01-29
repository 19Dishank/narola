let countt = 0;
function incFun(count) {
    return () => {
        countt += count
        document.getElementById('countDiv').innerHTML = "Count : " + countt;
    }
}

const inc = incFun(1);
const dec = incFun(-1);
document.getElementById('incBtn').onclick = inc;
document.getElementById('decBtn').onclick = dec;
// prime number

function checkPrime() {
    let num = parseInt(document.getElementById('num').value);
    if (isNaN(num) || num <= 1) {
        document.getElementById('res').innerHTML = "Enter Value Grater Than 1";
        return;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.getElementById('res').innerHTML = "Prime number"
    } else {
        document.getElementById('res').innerHTML = "Not a Prime number"
    }
}

// hide show password
function hideShow() {
    let pwd = document.getElementById('pwd');
    let pwdBtn = document.getElementById('pwdBtn');
    if (pwd.value == "") {
        pwd.placeholder = "enter password first"
        return;
    }

    if (pwd.type === "password") {
        pwd.type = "text"
        pwdBtn.textContent = "Hide Password";

    } else {
        pwd.type = "password";
        pwdBtn.textContent = "Show Password"

    }
}

//check palindrome
function checkPalindrome() {
    let input = document.getElementById('pali').value.trim();
    if (input) {
        let revText = input.toLowerCase();
        let revtxt = revText.split("").reverse().join("");
        if (revText === revtxt) {
            document.getElementById('paliRes').innerHTML = "Palindrome"
        } else {
            document.getElementById('paliRes').innerHTML = "Not Palindrome"
        }
    } else {
        document.getElementById('paliRes').innerHTML = "Enter value first"
    }
}

// varify email
function varifyEmail(event) {

    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    emmail = document.getElementById('email').value;
    emailBtn = document.getElementById('emailBtn');
    if (emmail) {
        if (pattern.test(emmail)) {
            document.getElementById('emailRes').innerHTML = "Valid Email"
        } else {
            document.getElementById('emailRes').innerHTML = "Invalid Email"
        }
    } else {
        document.getElementById('emailRes').innerHTML = "Enter Email First"
    }
}


// random number generator (otp)
function randomNumber() {
    const num = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    const element = document.getElementById('randNum');
    element.innerHTML = "OTP: " + num;
}

//otp field auto navigation
const inputs = document.getElementById("inputs");
inputs.addEventListener("input", function (event) {
    const target = event.target
    const val = target.value;
    if (isNaN(val)) {
        target.value = "";
        return;
    }
    if (val != "") {
        const next = target.nextElementSibling;
        if (next) {
            next.focus();
        }
    }
});
inputs.addEventListener("keyup", function (event) {
    const target = event.target;
    const key = event.key.toLocaleLowerCase();

    if (key === "backspace" || key === "delete") {
        target.value = "";
        const prev = target.previousElementSibling;
        if (prev) {
            prev.focus();
        }
        return;
    }
});

// inc dec font size
currentsize = 20;
function incTxtFun(size) {

    return () => {
        currentsize += size;
        document.getElementById('demo').style.fontSize = `${currentsize}px`
    };
}

const incSz = incTxtFun(5);
const decSz = incTxtFun(-5);
document.getElementById('plus').onclick = incSz;
document.getElementById('minus').onclick = decSz;