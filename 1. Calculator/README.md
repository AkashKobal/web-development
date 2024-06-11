# Calculator _(HTML and CSS)_ <br> 
![alt text](https://github.com/AkashKobal/web-development/blob/main/1.%20Calculator/calculator%20output.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <div class="calculator">
        <form>
            <div>
                <input type="text" name="display"  id="display"  />
            </div>
                <div>
                    <input class="btn" id="AC" type="button" value="AC" onclick ="display.value = ''">
                    <input class="btn" id="DE" type="button" value="DE" onclick="display.value = display.value.toString().slice(0,-1)">
                    <input class="btn" id="dot" type="button" value="." onclick ="display.value += '.'">
                    <input class="btn" id="slash" type="button" value="/" onclick ="display.value += '/'">
                </div>
                <div>
                    <input class="btn" type="button" value="7" onclick ="display.value += '7'">
                    <input class="btn" type="button" value="8" onclick ="display.value += '8'">
                    <input class="btn" type="button" value="9" onclick ="display.value += '9'">
                    <input class="btn" id="mul" type="button" value="*" onclick ="display.value += '*'">
                </div>
                <div>
                    <input class="btn" type="button" value="4" onclick="display.value += '4'">
                    <input class="btn" type="button" value="5" onclick="display.value += '5'">
                    <input class="btn" type="button" value="6" onclick="display.value += '6'">
                    <input class="btn" id="sub" type="button" value="-" onclick="display.value += '-'">
                </div>
                <div>
                    <input class="btn" class="btn" type="button" value="1" onclick="display.value += '1'">
                    <input class="btn" class="btn" type="button" value="2" onclick="display.value += '2'">
                    <input class="btn" class="btn" type="button" value="3" onclick="display.value += '3'">
                    <input class="btn" id="add" class="btn" type="button" value="+" onclick="display.value += '+'">
                </div>
                <div>
                    <input class="btn" type="button" value="00" onclick="display.value += '00'">
                    <input class="btn" type="button" value="0" onclick="display.value += '0'">
                    <input class="btn" type="button" value="=" id="equalsBtn" onclick="display.value = eval(display.value)">
                </div>
            </form>
        </div>
    </div>


</body>

</html>
```
## _CSS_
```css
body{
    background-color: rgba(0, 255, 255, 0.492);

}
.container{
    background-color: rgba(0, 0, 0, 0.716);
    position: absolute;
    top: 20%;
    margin-left: 50%;
    border-radius: 10px;
}
.btn{
    border-radius: 5px;
    padding: 20px;
    color: black;
   
}
.calculator form input{
    border: 0;
    outline: 0;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    margin: 10px;
    background-color: rgba(0, 0, 0, 0.434);

}
#equalsBtn{
    width: 150px;
}

#display{
    width: 310px;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
    text-align: right;
    flex: 1;
    font-size: 45px;
    box-shadow: none;
    
}

#equalsBtn {
    background-color: rgba(0, 255, 255, 0.605);
    color: #fff;
    font-size: 20px;

    border-radius: 10px;
    cursor: pointer;
    margin: 10px;
    border: 0;
    outline: 0;
}
#mul{
    color: aqua;

    
}
#add{
    color: aqua; 

} 
#sub{
    color: aqua;

}
 #AC{
    color: aqua;

 }
  #DE{
    color: aqua;

  }
   #slash{
    color: aqua;

   }
    #dot{
        color: aqua;

    }

```
