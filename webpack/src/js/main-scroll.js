//  import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Flip, ScrollToPlugin } from "gsap/all";

//  // don't forget to register plugins
//  gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin, ScrollToPlugin);

//  let container = document.querySelector("#scroll-container");

//  let height;

//  function setHeight() {
//      height = container.clientHeight;
//      document.body.style.height = height + "px";
//  }
//  ScrollTrigger.addEventListener("refreshInit", setHeight);

//  // smooth scrolling container
//  gsap.to(container, {
//      y: () => -(height - document.documentElement.clientHeight),
//      ease: "none",
//      scrollTrigger: {
//          trigger: document.body,
//          start: "top top",
//          end: "bottom bottom",
//          scrub: 1,
//          invalidateOnRefresh: true
//      }
//  });

//  // scrolltrigger for each box
//  gsap.utils.toArray('.box').forEach(box => {
//      gsap.to(box, {
//          backgroundColor: '#ffffff',
//          scrollTrigger: {
//              trigger: box,
//              start: 'top center',
//              toggleActions: 'play none none reverse',
//              markers: true
//          }
//      });
//  });


//  function setupLinks(scroller) {
//      let linkElements = gsap.utils.toArray('.nav a'),
//          linkTargets = linkElements.map(e => document.querySelector(e.getAttribute("href"))),
//          linkPositions = [],
//          calculatePositions = () => {
//              let offset = gsap.getProperty(scroller, "y");
//              linkTargets.forEach((e, i) => linkPositions[i] = e.getBoundingClientRect().top - offset);
//          };

//      // console.log("LINK", linkElements);
//      linkElements.forEach((element, i) => {

//          element.addEventListener("click", e => {
//              e.preventDefault();
//              gsap.to(window, { scrollTo: linkPositions[i], ease: "power4", overwrite: true });
//          });
//      });

//      ScrollTrigger.addEventListener("refresh", calculatePositions);
//  }

//  setupLinks(container);