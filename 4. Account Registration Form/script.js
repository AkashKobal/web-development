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
