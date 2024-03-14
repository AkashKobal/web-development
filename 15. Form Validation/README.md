# Form validation _(HTML, CSS, Js)_
![alt text](https://github.com/AkashKobal/web-development/blob/main/15.%20Form%20Validation/output.png)

## _HTML_
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form validation</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>

<body>
    <form class="colorful-form">
        <div class="form-group">
            <label class="form-label" for="name">Name:</label>
            <input required placeholder="Enter your name" class="form-input" type="text">
        </div>
        <div class="form-group">
            <label class="form-label" for="email">Email:</label>
            <input required placeholder="Enter your email" class="form-input" name="email" id="email" type="email">
        </div>
        <div class="form-group">
            <label class="form-label" for="email">Phone no:</label>
            <input required placeholder="Enter your phone no" class="form-input" name="email" id="phoneNo" type="number">
        </div>
        <div class="form-group">
            <label class="form-label" for="message">Message:</label>
            <textarea required placeholder="Enter your message upto 250 characters." class="form-input" name="message"
                id="message"></textarea>
        </div>
        <button class="form-button" type="submit" onclick="phoneNumber()">Submit</button>
    </form>
</body>
</html>
```

## _Javascript_
```js
let name = document.getElementById("name");
let email = document.getElementById("email");
let phoneNo = document.getElementById("phoneNo");
let message = document.getElementById("message");

function phoneNumber() {
    let phoneNoLength = phoneNo.value;
    if (phoneNoLength.length > 10 || phoneNoLength.length < 10) {
        alert("Invalid phone number");
    }
    else if (phoneNo.type !== "number") {
        alert("Invalid phone number");
    }
    else {
        textArea();
    }
}

function textArea() {
    let messageLength = message.value;
    if (messageLength.length > 250) {
        alert("Message should be less than 250 characters");
    }
}
```
## _CSS_
```css
.colorful-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;

}

.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
}

.form-input {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #fff;
    color: #333;
    border-radius: 5px;
}

textarea.form-input {
    height: 100px;
}

.form-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #ff6f69;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.form-button:hover {
    background-color: #ff5f59;
}

.colorful-form {
    max-width: 420px;
    margin: 0 auto;
    padding: 25px;
    background-color: #f5f5f5;
    border-radius: 10px;
    left: 50%;
    margin-top: 250px;
    padding-right: 40px;
}
```

