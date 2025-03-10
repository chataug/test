/* eslint-disable no-undef */
/* @jsxRuntime automatic */
/* @jsxImportSource react */

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Programs from "./Programs";
import Contact from "./Contact";
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center text-gray-800">
        <nav className="bg-white shadow-md py-4 px-6 w-full flex justify-center space-x-6 fixed top-0 z-10">
          <Link to="/" className="text-lg font-semibold hover:text-blue-500">Accueil</Link>
          <Link to="/programs" className="text-lg font-semibold hover:text-blue-500">Programmes</Link>
          <Link to="/contact" className="text-lg font-semibold hover:text-blue-500">Contact</Link>
        </nav>
        <div className="mt-20 w-full max-w-4xl p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
