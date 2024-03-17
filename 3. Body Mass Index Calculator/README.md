# BMI Calculator  _(HTML, CSS, and Js)_ <br>
![alt text](https://github.com/AkashKobal/web-development/blob/main/3.%20Body%20Mass%20Index%20Calculator/bmi%20calculator%20output.png)

## _HTML_
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <form onsubmit="bmiCalculator()">
    <div class="heading">BMI Calculator</div>
    <div class="container">
        <input type="text" name="Height" id="height" placeholder="Enter Height (m)"><br>
        <input type="text" name="Weight" id="weight" placeholder="Enter Weight (kg)"><br>
        <input type="button" name="Calculate" value="Calculate" id="Calculate" onclick="bmiCalculator()"><br>
    </div>
</form>
</body>
</html>
```
## _Javascript_
```js
function bmiCalculator(){

    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let result = document.getElementById("result");
    document.write("Entered Height is :"+height + "<br>");
    document.write("Entered Weight is :"+weight+ "<br>");

    var results = weight/(height*height);
    document.write("Result is :"+results);
    }
```
## _CSS_

```css
body{
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
}
.heading{
    text-align: center;
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
    margin-top: 100px;
}
.container{
    text-align: center;
    padding: 20px;
}
input{
    padding: 10px;
    margin: 10px;
    width: 300px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
input[type="button"]{
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}
input[type="button"]:hover{
    background-color: #45a049;
}
input[type="button"]:active{
    background-color: #3e8e41;
}
input[type="text"]{
    text-align: center;
}
input[type="text"]::placeholder{
    text-align: center;
}
```