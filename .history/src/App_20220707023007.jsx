import * as React from "react";
import { Navbar } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Index";

function App() {
  return (
     <Routes>
        <Navbar />
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;