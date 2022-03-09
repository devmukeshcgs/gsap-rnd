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

$(document).ready(function() {

    var colors = ['#FF8370', '#00B1B0', '#FEC84D', '#E42256'];
    // var colors = ['#FBE7C6', '#B4F8C8', '#A0E7E5', '#FFAEBC'];
    // var colors = ['#58ABE5', '#F6C324', '#FF7FAD', '#A9FED8'];

    $('.line').each(function() {
        var new_color = colors[Math.floor(Math.random() * colors.length)];
        $(this).css('background-color', new_color);
    });

});