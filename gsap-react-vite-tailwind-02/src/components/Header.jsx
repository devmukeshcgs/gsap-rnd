import { lineupsPro, bagImg, searchImg, mailImg, mailTo, burgerImg, burgerCloseImg, logoImg } from '../utils';
import { navLists } from '../constants';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateScreenSize(); // Set initial state
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const toggleMenu = () => {
    if (!isMobile) return; // Only apply functionality on mobile screens

    setMenuOpen((prev) => !prev);

    if (!menuOpen) {
      gsap.to(".menu", {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(".menu-overlay", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(".menu", {
        x: "-100%",
        duration: 0.5,
        ease: "power2.in",
      });
      gsap.to(".menu-overlay", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  };

  const closeMenu = () => {
    if (!isMobile) return; // Only apply functionality on mobile screens
    setMenuOpen(false);
    gsap.to(".menu", {
      x: "-100%",
      duration: 0.5,
      ease: "power2.in",
    });
    gsap.to(".menu-overlay", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
    });
  };

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex  justify-between items-center align-center align-middle fixed z-10 bg-opacity-30 bg-black">
      <nav className="flex w-full screen-max-width z-50">
        <Link to="/" className="flex items-center gap-2">
          {/* <img src={logoImg} alt="LineupsPro" width={18} height={18} /> */}
          <p className="text-xl">GSAP <b>React</b></p>
        </Link>
        {/* <div className='flex items-center gap-2 '>
          <img src={lineupsPro} alt="LineupsPro" width={30} height={30} />
          <p className='text-xl'>Lineups <b>Pro</b></p>
        </div> */}
        {/* <div className='menu fixed top-0 left-0 w-3/4 h-full bg-black text-white transform -translate-x-full z-10'> */}
        <div className="flex flex-1 justify-center items-center gap-5  menu max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:w-3/4 max-sm:h-full  text-white max-sm:transform max-sm:-translate-x-full z-51">
          <div className="flex flex-row  max-sm:items-center max-sm:justify-center max-sm:gap-5 max-sm:flex-col max-sm:h-full">
            {navLists.map((link) => (
              <Link
                to={link.link}
                rel="noopener noreferrer"
                key={link.name}
                onClick={closeMenu}
                className="px-5 text-sm cursor-pointer text-gray-100 hover:text-white transition-all">
                {link.name}

              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-7 max-sm:justify-end max-sm:flex-1">
          <Link
            className="max-sm:hidden"
            to='#'
            onClick={(e) => {
              window.location.href = mailTo;
              e.preventDefault();
            }}>
            <img src={mailImg} alt="search" width={20} height={20} />
          </Link>
          <div className="hidden max-sm:flex  menu-container">
            <button
              className="transperant"
              onClick={toggleMenu}
            >
              <img src={menuOpen ? burgerCloseImg : burgerImg} alt="" width={24} height={24} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar