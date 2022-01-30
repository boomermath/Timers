var timerElement = document.getElementById("timer");
let seconds = 0;
let interval;

//function to format seconds to HH:mm:ss
function format(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - (hours * 3600)) / 60);
    let secs = seconds - (hours * 3600) - (minutes * 60);

    return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${secs < 10 ? "0" + secs : secs}`;
}

function start() {
    interval = setInterval(function () {
        timerElement.textContent = format(++seconds);
    }, 1000);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    stop();
    seconds = 0;
    timerElement.textContent = "00:00:00";
}