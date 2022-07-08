import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Index";

function App() {
  return (
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </React.Fragment>
  );
}

export default App;