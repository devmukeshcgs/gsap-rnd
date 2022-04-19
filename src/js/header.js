import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Flip } from "gsap/all";
// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

$(function() {
    // const ham = document.querySelector(".menu-btn");
    // const menu = document.querySelector('.main-menu');
    // const links = menu.querySelectorAll('ul li');

    // var tl = gsap.timeline({ paused: true });
    // var tl_Desk = gsap.timeline();

    // $(window).on("scroll", function() {
    //     if ($(window).scrollTop() > 50) {
    //         $("header").addClass("active");
    //     } else {
    //         //remove the background property so it comes transparent again (defined in your css)
    //         $("header").removeClass("active");
    //     }
    // });

    // if (window.innerWidth < 480) {
    //     tl.to(menu, {
    //         duration: 1,
    //         opacity: 1,
    //         height: '100vh', // change this to 100vh for full-height menu
    //         ease: 'expo.inOut',
    //     })
    //     tl.from(links, {
    //         duration: 1,
    //         opacity: 0,
    //         y: 20,
    //         stagger: 0.1,
    //         ease: 'expo.inOut',
    //     }, "-=0.5");
    // } else {
    //     tl_Desk.from(links, {
    //         duration: 2,
    //         opacity: 0,
    //         y: 30,
    //         stagger: 0.1,
    //         ease: 'expo.inOut',
    //     }, "-=0.5");
    // }

    // tl.reverse();

    // ham.addEventListener('click', () => {
    //     // tl.reversed(!tl.reversed());
    // });

    // if ($(window).scrollTop() >= 100) {
    //     $('header').addClass('fixed-header');
    //     // $('nav div').addClass('visible-title');
    // } else {
    //     $('header').removeClass('fixed-header');
    //     // $('nav div').removeClass('visible-title');
    // }

})

const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");

// Show and Hide Navbar Menu
burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");

    if (navbarMenu.classList.contains("is-active")) {
        navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
    } else {
        navbarMenu.removeAttribute("style");
    }
});

// Hide Menu when Click the Links
// document.querySelectorAll(".menu-link").forEach((link) => {
//     link.addEventListener("click", () => {
//         navbarMenu.classList.remove("is-active");
//         bgOverlay.classList.remove("is-active");
//     });
// });

(function() {

    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    var header = document.getElementById('header');

    var checkScroll = function() {

        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
            //scrolled up
            direction = 2;
        } else if (curScroll < prevScroll) {
            //scrolled down
            direction = 1;
        }

        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
        }

        prevScroll = curScroll;
    };

    var toggleHeader = function(direction, curScroll) {
        if (direction === 2 && curScroll > 10) {
            //replace 52 with the height of your header in px
            // header.classList.remove('scroll-down');
            // header.classList.addd('scroll-up');
            header.classList.add('fixed-header');
            prevDirection = direction;
        } else if (direction === 1) {
            // header.classList.remove('scroll-up');
            // header.classList.add('scroll-down');
            header.classList.remove('fixed-header');
            prevDirection = direction;
        }
    };

    window.addEventListener('scroll', checkScroll);

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