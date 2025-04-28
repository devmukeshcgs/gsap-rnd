import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';
import SignUp from './components/SignUp';
import WaitList from './components/WaitList';
import UnsplashGallery from './components/UnsplashGallery'; 
import FullScreenSlider from './components/FullScreenSlider';
const App = () => {
  return (
    <main className="bg-white">
      <Navbar />
      {/* <UnsplashGallery /> */}
      {/* <FullScreenSlider /> */}
      <Hero />
      <SignUp />
      <WaitList />
      {/* <Highlights /> */}
      {/* <Model /> */}
      {/* <Features /> */}
      {/* <HowItWorks /> */}
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
