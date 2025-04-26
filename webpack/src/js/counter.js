var $ = require("jquery");
window.jQuery = $;
window.$ = $;

import 'bootstrap';
var homeImg = document.getElementById('logo');
var footerImg = document.getElementById('footer-logo-strip');
// import html from "./home.html";

(function() {

    // COUNTDOWN TIMER
    // Set the date we're counting down to
    var countDownDate = new Date("Jun 1, 2022 12:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        let timerString = `<div class="countdown"><p>${days}</p><span>Days</span></div>
        <div class="countdown"><p>${hours}</p><span>Hours</span></div>
        <div class="countdown"><p>${minutes}</p><span>Mins</span></div>
        <div class="countdown"><p>${seconds}</p><span>Seconds</span></div>`
        document.getElementById("counter").innerHTML = timerString;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("counter").innerHTML = "EXPIRED";
        }
    }, 1000);

})();