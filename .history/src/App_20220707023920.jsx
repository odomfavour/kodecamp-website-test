import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Index";
import NavigationBar from "./pages/Navbar/Navbar";

function App() {
  return (
      <Routes>
        <NavigationBar />
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;