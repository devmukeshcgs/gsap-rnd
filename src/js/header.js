import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Flip } from "gsap/all";
// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

$(function() {
    const ham = document.querySelector(".menu-btn");
    const menu = document.querySelector('.main-menu');
    const links = menu.querySelectorAll('ul li');

    var tl = gsap.timeline({ paused: true });
    var tl_Desk = gsap.timeline();

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $("header").removeClass("active");
        }
    });


    if (window.innerWidth < 480) {
        tl.to(menu, {
            duration: 1,
            opacity: 1,
            height: '100vh', // change this to 100vh for full-height menu
            ease: 'expo.inOut',
        })
        tl.from(links, {
            duration: 1,
            opacity: 0,
            y: 20,
            stagger: 0.1,
            ease: 'expo.inOut',
        }, "-=0.5");
    } else {
        tl_Desk.from(links, {
            duration: 2,
            opacity: 0,
            y: 30,
            stagger: 0.1,
            ease: 'expo.inOut',
        }, "-=0.5");
    }

    tl.reverse();

    ham.addEventListener('click', () => {
        // tl.reversed(!tl.reversed());
    });


})

const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

// Show Menu when Click the Burger
// Hide Menu when Click the Overlay
if (burgerMenu && navbarMenu && bgOverlay) {
    burgerMenu.addEventListener("click", () => {
        navbarMenu.classList.toggle("is-active");
        bgOverlay.classList.toggle("is-active");
    });

    bgOverlay.addEventListener("click", () => {
        navbarMenu.classList.toggle("is-active");
        bgOverlay.classList.toggle("is-active");
    });
}

// Hide Menu when Click the Links
// document.querySelectorAll(".menu-link").forEach((link) => {
//     link.addEventListener("click", () => {
//         navbarMenu.classList.remove("is-active");
//         bgOverlay.classList.remove("is-active");
//     });
// });