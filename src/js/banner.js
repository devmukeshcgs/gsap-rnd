import $ from 'jquery';
window.jQuery = $;
window.$ = $;


// // or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Flip, ScrollToPlugin } from "gsap/all";
// import ScrollMagic from 'scrollmagic'
// var controller = new ScrollMagic.Controller();

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin, ScrollToPlugin);
///////////////////////////////////////////////////////////////////////////////////////////////////////////

$(function() {

    const banner = document.querySelector('.banner');
    const char_img = banner.querySelectorAll('.char-img');
    const char_name = document.getElementsByClassName('char-name');

    var tl_NameToolTip = gsap.timeline({ paused: true });
    var tl_char_name = gsap.timeline({ paused: true });

    var border_colors = ['#ce243d', '#00ade8', '#f76d37', '#ffc200'];
    // var colors = ['#ce243d', '#00ade8', '#f76d37', '#ffc200'];
    var colors = ['#FF8370', '#00B1B0', '#FEC84D', '#E42256'];
    // var colors = ['#FBE7C6', '#B4F8C8', '#A0E7E5', '#FFAEBC'];
    // var colors = ['#58ABE5', '#F6C324', '#FF7FAD', '#A9FED8'];

    // TIMELINE
    function char_anim() {
        char_img.forEach(element => {
            tl_char_name.fromTo(element.getElementsByClassName('char-name')[0], {
                duration: 1,
                autoAlpha: 0,
                y: -20,
                ease: 'expo.inOut',

            }, {
                duration: 1,
                autoAlpha: 1,
                y: 0,
                ease: 'expo.inOut',
            }, "-=0.5");

            tl_NameToolTip.from(element.getElementsByTagName('img'), {
                duration: 1,
                scale: 0,
                rotation: -50,
                // stagger: 0.1,
                ease: 'expo.inOut',
                onComplete: () => {
                    tl_char_name.play();
                }
            }, "-=0.5")
        });
        tl_NameToolTip.play();
    }

    function changeBackground() {
        $('.line').each(function() {
            var new_color = colors[Math.floor(Math.random() * colors.length)];
            var new_border_color = border_colors[Math.floor(Math.random() * border_colors.length)];
            //  new_color == '#ffffff' && $(this).css('border-color', new_border_color);
            $(this).css('background-color', new_color);
        });
        setTimeout(() => {
            char_anim();
        }, 1500);
    }

    //First call
    changeBackground();

    // After 2sec change background
    setInterval(() => {
        $('.line').each(function() {
            var new_color = colors[Math.floor(Math.random() * colors.length)];
            var new_border_color = border_colors[Math.floor(Math.random() * border_colors.length)];
            //  new_color == '#ffffff' && $(this).css('border-color', new_border_color);
            $(this).css('background-color', new_color);
        });
    }, 5000);

    // TESTING
    const test_array = [
        { name: 'tina' },
        { name: 'minu' },
        { name: 'chinu' },
        { name: 'lolu' }
    ];

    let currentIndex = 0;

    test_array.forEach(function() {});

    setInterval(() => {
        // if (currentIndex >= test_array.length) {
        //     currentIndex = 0
        // }
        // console.log("NAME", test_array[currentIndex].name);
        tl_NameToolTip.restart();
        tl_char_name.restart();
        // currentIndex = currentIndex + 1
    }, 10000)

});