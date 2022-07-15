import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import EnrollNow from "./pages/EnrollNow/EnrollNow";
import Home from "./pages/Index";
import Works from "./pages/Works/Works";
import Sponsor from "./pages/sponsor/Sponsor";
import Explorevideo from "./pages/exploreVideo/Explorevideo";
import ContactUs from "./pages/ContactUsPage/ContactUs";
import Explore from "./pages/ExplorePage/Explore";
import AboutUs from "./pages/AboutUs/AboutUs";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enroll" element={<EnrollNow />} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/works" element={<Works />} />
      <Route path="/sponsor" element={<Sponsor />} />
      <Route path="/explorevideo" element={<Explorevideo />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}
export default App;
