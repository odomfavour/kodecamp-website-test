import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import EnrollNow from "./components/EnrollNow/EnrollNow";
import Home from "./pages/Index";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll" element={<EnrollNow />} />
      </Routes>
  );
}
export default App;