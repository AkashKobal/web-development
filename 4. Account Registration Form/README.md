# Account Registration Form  _(HTML, CSS, and Js)_ <br>
![alt text](https://github.com/AkashKobal/web-development/blob/main/4.%20Account%20Registration%20Form/account%20registration%20form%20output.png)

## _HTML_
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Registration Form</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>
  <div class="form">
    <p class="title">Register Account </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input id="firstName" required="" placeholder="" type="text" class="input">
            <span>First name</span>
        </label>

        <label>
            <input id="lastName" required="" placeholder="" type="text" class="input">
            <span>Last name</span>
        </label>
    </div>  
            
    <label>
        <input id="email" required="" placeholder="" type="email" class="input">
        <span>Email</span>
    </label> 
        
    <label>
        <input id="password" required="" placeholder="" type="password" class="input">
        <span>Password</span>
    </label>
    <label>
        <input id="confirmPassword" required="" placeholder="" type="password" class="input">
        <span>Confirm password</span>
    </label>
    <button class="submit" onclick="submit()">Submit</button>
    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
  </div>   
</body>
</html>
```
## _Javascript_
```js
function submit(){
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirmPassword").value;

  if(password != confirmPassword){
    alert("Password and Confirm Password do not match");
  }
  else{
      alert("Thank you : "+firstName+" "+lastName);
  }
}

```
## _CSS_
```css
body{
  background-color: rgba(8, 37, 125, 0.812);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  background-color: #fff;
  padding: 35px;
  border-radius: 20px;
  position: relative;
  top: 150px;
  left: 42%;


}

.title {
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.title::before,.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: royalblue;
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: royalblue;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.message, .signin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 20px;
  margin-top: 0px;
}

.signin {
  text-align: center;
}

.signin a {
  color: royalblue;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus + span,.form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid + span {
  color: green;
}

.submit {
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
}

.submit:hover {
  background-color: rgb(56, 90, 194);
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
#firstName{

  width: fit-content;
}

```