import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import * as Sentry from '@sentry/react';
import SignUp from './components/SignUp';
import WaitList from './components/WaitList';
import FullScreenSlider from './components/FullScreenSlider';
const App = () => {
  return (
    <main className="bg-white">
      <Navbar />
      <FullScreenSlider />
      <Hero />
      <SignUp />
      <WaitList />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
