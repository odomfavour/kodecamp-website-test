import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dean from "./Dean";
import EnrollNow from "./pages/EnrollNow/EnrollNow";
import Home from "./pages/Index";
import Works from "./pages/Works/Works";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll" element={<EnrollNow />} />
        <Route path="/works" element={<Works />} />
        <Route path="/dean" element={<Dean />} />
      </Routes>
  );
}
export default App;