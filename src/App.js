import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import Resume from './components/Resume';
import Portfolio from "./components/Portfolio";
import Contact from './components/Contact';
import About from './components/About';
import './style.css';

function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ParticlesBackground />
                <Home />
                <About />
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    );
}

export default App;
