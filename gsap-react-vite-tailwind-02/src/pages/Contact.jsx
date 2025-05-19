import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { blackImg, chipImg, heroImg, yellowImg } from "../utils";


function Contact() {
  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, y: -10, delay: .5 })
    gsap.to('#hero2', { opacity: 1, y: -10, delay: .75 })
        // Animate background image on load
    gsap.from(".bg-hero-pattern", {
      opacity: 0,
      scale: 1.1,
      duration: 1.5,
      ease: "power2.out",
    });
    gsap.fromTo('.anim-section',
      { opacity: 0, y: 10, },
      { opacity: 1, y: 0, delay: 1, duration: 1 })
  }, [])
  return (
    <div className="container mx-auto flex-center flex-col">
      <section className="w-full nav-height2 flex-center flex-col bg-hero-pattern relative  bg-cover bg-no-repeat bg-bottom">
        <div className="  w-full flex-center flex-col">
          <p id="hero" className="hero-title">Contact <span className="hero-sub-title-pro">Us</span></p>
          <p id="hero2" className="opacity-0 text-xl my-4"> Building the Ultimate Fantasy Companion</p>
          <div className="md:w-10/12 w-9/12">
          </div>
        </div>
      </section>
      <section className="anim-section w-full my-10">
        <div className="container mx-auto flex-center flex-col ">
          <div className="m-4 flex-center flex-row max-sm:flex-col ">
            <div className="flex-1 flex-center flex-col">
              <img src={chipImg} alt="Lineups Pro" className="w-1/2 mx-auto" />
            </div>
            <div className="flex-1 flex-center flex-col max-sm:my-4">
              <p>
                Driven by a belief that succeeding at fantasy sports is a game of choice rather than chance, we are passionate about supporting cricket fans on their fantasy sports journey. We believe fantasy cricket should be a rewarding experience, and we’re dedicated to providing the tools and insights users need to take their game to the next level. We combine cutting-edge analytics with expertise and passion for sports to produce world-leading fantasy predictions. We develop innovative resources to help users draft winning teams, track their progress, and stay ahead of the competition, backed by best-in-class technology and design.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
