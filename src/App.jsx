import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import EnrolNow from "./pages/EnrolNow/EnrolNow";
import Home from "./pages/Index";
import Works from "./pages/Works/Works";
import Sponsor from "./pages/sponsor/Sponsor";
import ContactUs from "./pages/ContactUsPage/ContactUs";
import Explore from "./pages/ExplorePage/Explore";
import LandTestimony from "./pages/LandingPageTesti/LandTestimony";
import FAQS from "./pages/faq/FAQS";
import AboutUs from "./pages/AboutUs/AboutUs";
import Explorevideo from "./components/exploreVideo/Explorevideo";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enrol" element={<EnrolNow />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/works" element={<Works />} />
      <Route path="/sponsor" element={<Sponsor />} />
      <Route path="/explorevideo" element={<Explorevideo />} />
      <Route path="/testimonial" element={<LandTestimony />} />
      <Route path="/faq" element={<FAQS />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}
export default App;
