import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";
import Fifth from "./pages/Fifth";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Fifth />} />
      </Routes>
    </Router>
  );
}
