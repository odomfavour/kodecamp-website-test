import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Index";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  return (
      <Routes>
        <Navbar />
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;