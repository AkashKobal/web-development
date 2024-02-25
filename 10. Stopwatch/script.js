let [seconds, minutes, hours] = [0, 0, 0];
let timmer = document.getElementById("timmer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");


let timer = null;

function stopTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    timmer.innerHTML = h + ":" + m + ":" + s;
}

function WatchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopTimer, 1000);
}

function WatchStop() {
    clearInterval(timer);
}
function WatchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    timmer.innerHTML = "00:00:00";

}