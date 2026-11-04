import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import { Download } from './component/Download'; 
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Register from './component/Register'; 
import AdminPortal from './component/Portal/AdminPortal';
import './App.css';

import ScrollToTop from './component/ScrollToTop';
import Terms from './component/Terms';
import Privacy from './component/Privacy';
import Disclaimer from './component/Disclaimer';
import Refund from './component/Refund';
import PopupImage from './assets/Popup.jpeg'; // Popup இமேஜ் இம்போர்ட் செய்கிறோம்

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/portal';

  // --- Popup State Logic ---
  const [showGlobalPopup, setShowGlobalPopup] = useState(false);

  useEffect(() => {
    // பேஜ் ஓபன் ஆனவுடன் போப்-அப் காட்டுகிறோம்
    setShowGlobalPopup(true);

    // சரியாக 10 விநாடிகளுக்குப் பிறகு (10000ms) போப்-அப் ஆட்டோமேட்டிக்காக மறையும்
    const timer = setTimeout(() => {
      setShowGlobalPopup(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <ScrollToTop/>
      
      {/* Global Image Popup Modal (Upto 10s / Auto close or Manual close) */}
      {showGlobalPopup && (
        <div className="global-popup-backdrop">
          <div className="global-popup-box">
            <button 
              className="global-popup-close" 
              onClick={() => setShowGlobalPopup(false)}
            >
              &times;
            </button>
            <div className="global-popup-image-container">
              <img src={PopupImage} alt="Announcement" className="global-popup-img" />
            </div>
          </div>
        </div>
      )}

      {/* Admin route allengil mathram Navbar kanikkum */}
      {!isAdminRoute && <Navbar />}
      
      <Routes>
        <Route path="/refund" element={<Refund />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/disclaimer' element={<Disclaimer/>}/>
        {/* Admin Portal */}
        <Route path="/portal" element={<AdminPortal />} />
      </Routes>
      
      {!isAdminRoute && <Download />}
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
