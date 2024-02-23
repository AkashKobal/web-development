let checkBox = document.getElementById('theme');
let body = document.getElementById('body');
function changeTheme() {
    if(checkBox.checked == true){
        body.style.backgroundColor = "rgba(0, 0, 0, 0.781)";
    }
    else{
        body.style.backgroundColor = "rgba(255, 255, 255, 1)";
    }
    
}