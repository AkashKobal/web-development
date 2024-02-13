function submit(){

    let name = document.querySelector("#name");
    let password = document.querySelector("#pass");
    let radio = document.querySelector("input[name='color']:checked");
    let checkbox = document.querySelector("input[type='checkbox']:checked");
    let button = document.querySelector("input[type='button']");
    let displayDetails = document.querySelector("#displayDetails");
    
    displayDetails.innerHTML = "Name: " + name.value + "<br>" + "Password: " + password.value + "<br>" + "Color: " + radio.value + "<br>" + "Sports: " + checkbox.value;
}