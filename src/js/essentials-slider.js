import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import {
    gsap,
    ScrollTrigger,
    Draggable,
    MotionPathPlugin,
    Flip,
    ScrollToPlugin
} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin, ScrollToPlugin);

// core version + navigation, pagination modules:
import Swiper, {
    Navigation,
    Pagination
} from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
// import Swiper styles

// The Slideshow class.

/* SWIPER */
var swiper = new Swiper(".essentials-slider-container", {
    loop: false,
    // If we need pagination
    pagination: {
        el: '.essentials-slider-container .swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.essentials-slider-container .swiper-button-next',
        prevEl: '.essentials-slider-container .swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

var arr = [{
        title: "Games",
        img: "./images/design/games.png",
        details: "Children learn best by playing.So, we gamified our teaching! Now when they're playing, They're also learning!"
    },
    {
        title: "Kit",
        img: "./images/design/stories.png",
        details: "Only online is like shoes without socks. Thats why we also offer a seperate box. A special kit designed for your little one, It 's lots of learning and twice the fun!"
    },
    {
        title: "Stories",
        img: "./images/design/stories.png",

        details: "What do our animated stories do? The teach morals, values and make kids clever too! But it also nurtures in them a need, A strong desire to learn to read!"
    }
];

jQuery.each(arr, function(i) {
    $('.essentials-wrapper').append(`<div class="swiper-slide">
    <div class="slide-content">
    <div class="img"><img width="100" src="${this.img}"/></div>
        <div class="text">
            <h3>${this.title}</h3>
            <p>${this.details}</p>
        </div>
    </div>
</div>`)
});
// /* GSAP */
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