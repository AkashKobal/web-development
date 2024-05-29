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
