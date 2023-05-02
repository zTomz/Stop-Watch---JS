const hourOutput = document.getElementById("minutes");
const secondsOutput = document.getElementById("seconds");
const millisecondsOutput = document.getElementById("milliseconds");

// Time in milliseconds
let milliseconds = 0, seconds = 0, minutes = 0;
var timer;
var run = false;

function setTime() {
    hourOutput.innerHTML = minutes;
    secondsOutput.innerHTML = seconds;
    millisecondsOutput.innerHTML = milliseconds;
}

function resetTimer() {
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    stopTimer();
    setTime();
}

function startTimer() {
    // Start and stop a 1 milliseconds interval timer

    if(run) {
        return;
    }

    run = true;

    timer = setInterval(function() {
        milliseconds++;
          if (milliseconds >= 60) {
            milliseconds = 0;
            seconds++;
            if (seconds >= 60) {
              seconds = 0;
              minutes++;
            }
        }

        setTime();
    
    });
}

function stopTimer() {
    run = false;

    clearInterval(timer);
} 