let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");
let email = document.getElementById("email");
let loginBtn = document.getElementById("loginBtn");
let body = document.getElementById("body");
eyeIcon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeIcon.src = "eye-open.png";
  } else {
    password.type = "password";
    eyeIcon.src = "eye-close.png" ;
  }
};

loginBtn.onclick = function(){
  if(email.type == "email" && password.type == "password") {
    alert("You have successfully logged in");
    body.style.backgroundColor = "green";
  }else{
    body.style.backgroundColor = "red";
    alert("Please enter valid your email or password");
  }
   
}


