import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { blackImg, chipImg, heroImg, yellowImg } from "../utils";


function About() {
  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, y: -10, delay: .50 })
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
      { opacity: 1, y: 0, delay: 1, duration: 1 });
  }, [])
  return (<>
    <section className="w-full nav-height2 flex-center flex-col bg-hero-pattern relative  bg-cover bg-no-repeat bg-center">
      <div className="w-full flex-center flex-col">
        <p id="hero" className="hero-title">About Lineups <span className="hero-sub-title-pro">Pro</span></p>
        <p id="hero2" className=" opacity-0 text-xl my-4"> Building the Ultimate Fantasy Companion</p> 
      </div>
    </section>
    <section className="anim-section w-full">
      <div className="container mx-auto flex-center flex-col">
        <div className="my-4 flex-center flex-col">
          <h2 className="text-2xl">OUR MISSION?</h2>
          <p className="w-1/2 text-center">To empower fantasy cricket fans to make better decisions and help them enjoy a smoother experience following their favourite sport.</p>
        </div>
        <div className="my-4 flex-center flex-row">
          <div className="flex-1 flex-center flex-col">
            <img src={chipImg} alt="Lineups Pro" className="w-1/2 mx-auto" />
          </div>
          <div className="flex-1 flex-center flex-col">
            <p>
              Driven by a belief that succeeding at fantasy sports is a game of choice rather than chance, we are passionate about supporting cricket fans on their fantasy sports journey. We believe fantasy cricket should be a rewarding experience, and we’re dedicated to providing the tools and insights users need to take their game to the next level. We combine cutting-edge analytics with expertise and passion for sports to produce world-leading fantasy predictions. We develop innovative resources to help users draft winning teams, track their progress, and stay ahead of the competition, backed by best-in-class technology and design.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="anim-section w-full">
      <div className="container mx-auto flex-center flex-col">
        <div className="my-4 flex-center flex-col">
          <h2 className="text-2xl">OUR VALUES?</h2>
          <p className="text-center">To empower fantasy cricket fans to make better decisions and help them enjoy a smoother experience following their favourite sport.</p>
        </div>
        <div className="my-4 flex-center flex-row">
          <div className="cols-4">
            <div className="m-1">
              <img src={chipImg} alt="Lineups Pro" className="" />
            </div>
            <div className="m-1">
              <h2 className="text-2xl">OUR VALUES?</h2>
              <p>Card</p>
            </div>
          </div>

          <div className="cols-4">
            <div className="m-1">
              <img src={chipImg} alt="Lineups Pro" className="" />
            </div>
            <div className="m-1">
              <h2 className="text-2xl">OUR VALUES?</h2>
              <p>Card</p>
            </div>
          </div>

          <div className="cols-4">
            <div className="m-1">
              <img src={chipImg} alt="Lineups Pro" className="" />
            </div>
            <div className="m-1">
              <h2 className="text-2xl">OUR VALUES?</h2>
              <p>Card</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
  );
}

export default About;
