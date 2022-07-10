import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Index";
import Sponsor from "./pages/sponsor/Sponsor";
import Explorevideo from "./pages/exploreVideo/Explorevideo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sponsor" element={<Sponsor />} />
      <Route path="/explorevideo" element={<Explorevideo />} />
    </Routes>
  );
}

export default App;
