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
const App = () => {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <SignUp />
      <WaitList />
      <UnsplashGallery />
      {/* <Highlights /> */}
      {/* <Model /> */}
      {/* <Features /> */}
      {/* <HowItWorks /> */}
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
