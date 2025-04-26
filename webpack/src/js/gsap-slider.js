import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Flip, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin, ScrollToPlugin);

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
// The Slideshow class.

/* SWIPER */
var swiper = new Swiper(".swiper-container", {
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

/* GSAP */
// let tl = gsap.timeline();

// tl.from(".thumb", { duration: 1, x: 0, y: -200, opacity: 0 }, 0);

// swiper.on("init", function() {
//     /* do something */
//     tl.play(); //play the timeline
// });

// /* swiper events */
// swiper.on("slideChange", function() {
//     tl.restart(); //restart the timeline;
//     tl.play(); //play the timeline
// });