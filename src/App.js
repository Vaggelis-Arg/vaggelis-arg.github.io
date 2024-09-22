import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import './style.css';

function App() {
    return (
        <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={
            <>
                <ParticlesBackground />
                <Home />
                <About />
            </>} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        </Router>
    );
}

export default App;
