const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

// Stopwatch Logic
let stopwatch;
let min = (sec = ms = "0" + 0);
function interval() {
    clearInterval(stopwatch);
    stopwatch = setInterval(function () {
        ms++;
        ms = String(ms).padStart(2, 0);
        if (ms == 100) {
            sec++;
            sec = String(sec).padStart(2, 0);
            ms = "0" + 0;
        }
        if (sec == 60) {
            min++;
            min = String(min).padStart(2, 0);
            sec = "0" + 0;
        }
        timer.textContent = `${min}:${sec}:${ms}`;
    }, 10);
}

//Starting StopWatch Functionality
start.addEventListener("click", function () {
    interval();
});

//Stopping Stopwatch Functionality
stop.addEventListener("click", () => {
    clearInterval(stopwatch);
});

//Reset Stopwatch Functionality
reset.addEventListener("click", () => {
    min = sec = ms = "0" + 0;
    timer.textContent = `${min}:${sec}:${ms}`;
    clearInterval(stopwatch);
});
