const passwordBox = document.getElementById("password");
const length = 16;
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm"
const number = "1234567890";
const symbol = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
const allChar = upperCase + lowerCase + number + symbol;

function generatePassword() {
    let password = "";

    // let passwords = password.length;
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // get the password until 12 digits 

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];

    }
    passwordBox.value = password;

}

function copyPassword() {
    passwordBox.select(); // select the text inside the password box
    // document.execCommand('Copy'); // copy it to clipboard
    passwordBox.execCommand("copy")
    alert("Copied to clipboard!");
}