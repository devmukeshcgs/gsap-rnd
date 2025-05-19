import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { blackImg, chipImg, heroImg, yellowImg } from "../utils";
import { useState } from "react";
import { faqData } from "../constants";


function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedTag, setSelectedTag] = useState('all');

  // Extract all unique tags
  const allTags = ['all', ...new Set(faqData.flatMap(item => item.tag))];

  // Filter FAQs based on selected tag
  const filteredFaqs = selectedTag === 'all'
    ? faqData
    : faqData.filter(faq => faq.tag.includes(selectedTag));

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

  return (<>
    <section className="w-full nav-height2 flex-center flex-col bg-hero-pattern relative bg-cover bg-no-repeat bg-center">
      <div className="  w-full flex-center flex-col">
        <p id="hero" className="hero-title"> <span className="hero-sub-title-pro">FAQs</span></p>
        <p id="hero2" className="opacity-0 text-xl my-4 max-sm:my-2"> Answers to Common Questions Here</p>
      </div>
    </section>

    <section className="anim-section w-full">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTag === tag
                ? 'bg-gray-200 text-gray-800 hover:bg-gray-600 hover:text-white'
                : 'bg-blue-600 text-white'
                }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden transition-all"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-black hover:bg-gray-900 transition-colors"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id={`faq-content-${index}`}
                className={`px-4 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                  }`}
              >
                <p className="text-gray-200">{faq.answer}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {faq.tag.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-gray-200">
              No questions found for this category.
            </div>
          )}
        </div>
      </div>

    </section>

    <section className="w-full">
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
  </>
  );
}

export default Faq;
