// Setting up the timer -- modified from https://www.w3schools.com/howto/howto_js_countdown.asp

// Define visual-timer as a variable

var visualTimer = document.getElementsByClassName('visual-timer')

// Step One: Set up function with duration + display
function startTimer(duration, display) {

    // Define the parts of the timer
    var minTimer = duration, minutes, seconds;

    // setInterval - define minutes & seconds
    // The setInterval() method calls a function or evaluates an expression at specified intervals. It will automatically use milliseconds unless defined in the function.
    setInterval(function () {
        // The parseInt() function parses a string and returns an integer. This is necessary because we are starting with a string in HTML on the webpage.
        minutes = parseInt(minTimer / 60)
        seconds = parseInt(minTimer % 60);

        // Redefine seconds in order to make sure there are always 2 integers on display.
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // How the clock displays itself.
        display.textContent = minutes + ":" + seconds;

        // What happens when the timer reaches 0? If not specified will display as NaN:NaN
        if (--minTimer < 0) {
            minTimer = duration
        }

    // Translates the timer from milliseconds
    }, 1000);
}

// Starts the timer automatically when the webpage loads.
// Defines the start time (in this case one minute) and selects where the timer will be displayed (in the <span> tag with the id "time")
window.onload = function () {
    var oneMin = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMin, display);
};