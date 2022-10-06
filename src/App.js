import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Policy from "./pages/Policy/Policy";
import Question from "./pages/Questions/Questions";
import Connexion from "./pages/Connexion/Connexion";
import Thanks from "./pages/Thanks/Thanks";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/:guid" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </Router>
  );
}
