// src/Main.tsx
//import React from 'react';
import { FaYoutube, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from './App';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import './MainComponent.css';
import logo from './assets/logo.jpg';

const Main = () => {
    return (
        <Router>
            <div className="main-container">
                <nav>
                    <img src= {logo} alt="Logo" className="nav-logo" />
                    <Link to="/">Home</Link>
                    <Link to="/second">Videos</Link>
                    <Link to="/third">Education</Link>
                    <Link to="/fourth">Experience</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/second" element={<SecondPage />} />
                    <Route path="/third" element={<ThirdPage />} />
                    <Route path="/fourth" element={<FourthPage />} />
                </Routes>
                <div className="social-media">
                    <a href="https://www.youtube.com/c/magonicolasp/videos" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={40} color="#FF0000" />
                    </a>
                    <a href="https://github.com/cgalvezz94?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={40} color="#000000" />
                    </a>
                    <a href="https://www.linkedin.com/in/camilogalvez12/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={40} color="#0A66C2" />
                    </a>
                    <a href="https://facebook.com/cgalvez12" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={40} color="#4267B2" />
                    </a>
                </div>
                <p>Developed by Gálvez Enterprise on React.</p>
            </div>
        </Router>
    );
};

export default Main;
