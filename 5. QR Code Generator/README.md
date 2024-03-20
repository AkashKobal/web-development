# QR Code Generator  _(HTML, CSS, and Js)_ <br>
![alt text](https://github.com/AkashKobal/web-development/blob/main/5.%20QR%20Code%20Generator/qr%20code%20generator.png)
## _HTML_
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generate QR</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>

<body>
    <div class="container">
        <p>Enter your Text or URL</p>
        <input type="text" placeholder="Text or URL" id="userInput" /><br>
        <div id="qrBox">
            <img id="qrImage" src="" />
        </div> <!--to display the QR code -->
        <button class="generateBtn" id="generateBtn" onclick="generateQRCode()">Generate</button>
    </div>
</body>

</html>
```
## _Javascript_
```js
function generateQRCode() {
    let userInput = document.getElementById('userInput');
    let qrBox = document.getElementById('qrBox');
    let qrImage = document.getElementById('qrImage');

    if(userInput.value ==""){
        alert("Please enter a Text or URL");
    }else{

        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userInput.value;
    }


}
```
## _CSS_
```css
body {
    background-color: rgba(39, 105, 219, 0.693);
}

.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.824);
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    text-align: center;

}

.container p {
    font-size: 20px;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.container input {
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    border: 1px solid #000;
    font-size: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.container button {
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 8px ;
    border-color: transparent;
    /* border: 1px solid #000; */
    font-size: 20px;
    font-family: Georgia;
    letter-spacing: 1px;
    background-color: #3e66f6ea;
    color: white;
    cursor: pointer;
}

.container button:hover {
    background-color: #1a3fc7;
}
body:hover{
    background-color: rgb(10, 24, 66);
}
```
