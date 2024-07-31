const startMinutes = 30;
const startHour = 1;

let time = startMinutes * 60;
let countDown = document.getElementById("countDown");

setInterval(countdown, 1000);

function countdown() {
    let hour = (new Date()).getHours();
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDown.innerHTML = hour + ":" + minutes + ":" + seconds;
    time--;
}