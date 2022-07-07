import * as React from "react";
import { Navbar } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Index";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Navbar />
      </Routes>
  );
}

export default App;