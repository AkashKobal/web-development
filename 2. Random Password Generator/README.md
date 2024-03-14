# Random Password Generator _(HTML, CSS, and Js)_ <br>
![alt text](https://github.com/AkashKobal/web-development/blob/main/2.%20Random%20Password%20Generator/random%20password%20generator%20output.png)

## _HTML_
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Password Generator</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
    
<body>
    <div class="container">Generate a <br> Random Password</div>
    <div class="display">
        <input type="text" id="password" placeholder="Password">
        <input type="button" value="copy" id="copy" onclick="copyPassword()">
    </div>
    <div class="generatebutton">
        <input onclick="generatePassword()" type="button" value="Generate Password" id="GeneratePassword">
    </div>
</body>

</html>
```
## _Javascript_
```js
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
```
## _CSS_
```css
body{
    background-color: rgb(93, 153, 213);
    margin-left: 100px;
    margin-top: 150px;
}
.container{
    color: rgb(10, 28, 61);
    font-size: 50px;
    font-family:Arial, Helvetica, sans-serif ;
}
#password{
    /* color: rgb(165, 178, 202); */
    font-size: 30px;
    margin-top: 30px;
    border-radius: 5px;

    padding: 15px;


}
#copy{
    /* margin-top: 30px; */
    font-size: 38px;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
}
#GeneratePassword{
    padding: 10px;;
    margin-top: 10px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;

}

#GeneratePassword:hover{
    background-color: rgb(17, 39, 80);
    color: rgb(255, 255, 255);
    border-radius: 10px;
}
#copy:hover{
    background-color: rgb(17, 39, 80);
    color: rgb(255, 255, 255);
    border-radius: 10px;

}

```