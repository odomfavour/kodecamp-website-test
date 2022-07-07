import * as React from "react";
import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/Index";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </React.Fragment>
      
    </Router>
  );
}

export default App;