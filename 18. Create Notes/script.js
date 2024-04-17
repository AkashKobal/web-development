let textarea = document.getElementById("textarea");
let textAreaContainer = document.getElementById("textAreaContainer");

function createNotes() {
    if (textarea.value == "") {
        alert("Please enter your notes ")
    }
    else {
        let newTextArea = document.createElement("textarea");
        newTextArea.innerHTML = textarea.value;
        textAreaContainer.appendChild(newTextArea);
    }
    inputBox.value = ""
}
