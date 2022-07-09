import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Index";
import Sponsor from "./pages/sponsor/Sponsor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sponsor" element={<Sponsor />} />
    </Routes>
  );
}

export default App;
