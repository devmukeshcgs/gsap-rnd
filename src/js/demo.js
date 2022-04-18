// // typical import
// import gsap from "gsap";

// // // get other plugins:
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Flip from "gsap/Flip";
// import Draggable from "gsap/Draggable";

// // or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Flip } from "gsap/all";
// import ScrollMagic from 'scrollmagic'
// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// var controller = new ScrollMagic.Controller();
// var imagesLoaded = require('imagesloaded');

// const images = gsap.utils.toArray('.boxy');
// const loader = document.querySelector('.loader--text');

// const updateProgress = (instance) =>
//     loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;

// const showDemo = () => {
//     document.body.style.overflow = 'auto';
//     document.scrollingElement.scrollTo(0, 0);
//     gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

//     gsap.utils.toArray('section').forEach((section, index) => {
//         const w = section.querySelector('.boxy-wrapper');
//         const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
//         gsap.fromTo(w, { x }, {
//             x: xEnd,
//             scrollTrigger: {
//                 trigger: section,
//                 scrub: 0.5
//             }
//         });
//     });
// }

// imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);

let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: "#sec1",
        start: "-0% 50%",
        end: "150% 50%",
        scrub: 0.5,
        // markers: { startColor: "green", endColor: "red", fontSize: "12px" },
    }
});

tl.fromTo("#h-scroll", { x: "-30%", }, { x: "0%", });

let tl2 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: "#sec1",
        start: "-50% 50%",
        end: "150% 50%",
        scrub: 0.5,
        // markers: { startColor: "green", endColor: "red", fontSize: "12px" },
    }
});

tl2.fromTo("#h-scroll2", { x: "0%", }, { x: "-60%", });

// add animations and labels to the timeline
// tl.addLabel("start")
//     .from(".box p", { scale: 0.3, rotation: 45, autoAlpha: 0 })
//     .addLabel("color")
//     .from(".box", { backgroundColor: "#28a92b" })
//     .addLabel("spin")
//     .to(".box", { rotation: 360 })
//     .addLabel("end");

// ScrollTrigger.create({
//     trigger: "#h-scroll",
//     start: "top top",
//     endTrigger: "#otherID",
//     end: "bottom 50%+=100px",

//     onToggle: self => console.log("toggled, isActive:", self.isActive),
//     onUpdate: self => {
//         console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
//     }
// });
const loader = document.querySelector('.loader--text');
const updateProgress = (instance) =>
    loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });
    updateProgress
});