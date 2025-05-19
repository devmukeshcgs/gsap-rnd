import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

 
import Layout from './components/Layouts';
import Home from './pages/Home';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Faq from './pages/Faq';
// import PrivacyPolicy from './pages/PrivacyPolicy';
import NoMatch from './pages/NoMatch';

import * as Sentry from '@sentry/react';
import About from "./pages/About";


function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const App = () => {
  // on router change scroll top
  useScrollToTop();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // InitializeGoogleAnalytics();
  });

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <Routes>
      {/* Routes nest inside one another. Nested route paths build upon
      parent route paths, and nested route elements render inside
    parent route elements. See the note about <Outlet> below. */}
      Model={ }
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="career" element={<Career />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="privacy-policy" element={<PrivacyPolicy />} /> */}
        <Route path="terms" element={<Terms />} />
        <Route path="faq" element={<Faq />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>

  )
}

export default App;