let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully submitted'
let invalidMsg = '<i class="fa-solid fa-circle-xmark"></i>Invalid input'
let errorMsg = '<i class="fa-solid fa-circle-exclamation"></i>Error please try again'

function showToast(msg) {
    let toast = document.createElement('div'); //creates a div
    toast.classList.add('toast');//add class 
    toast.innerHTML = msg;

    toastBox.appendChild(toast);

    if (msg.includes('Error')) {
        toast.classList.add('error');//add class 
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid');//add class 
    }

    setTimeout(() => {
        toast.remove(); //remove the toast element after 3 sec
    }, 3000)

}