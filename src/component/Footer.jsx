import React from 'react';
import './style/Footer.css'; 

export default function Footer() {
  return (
    <footer className="am-footer">
      <div className="am-container">
        <div className="am-footer-grid">
          
       
          <div className="am-footer-brand">
            <h2 className="am-footer-logo">ALPHAMASTER</h2>
            <p className="am-footer-tagline">Think. Solve. Master.</p>
            <p className="am-footer-desc">
            Free learners should discover the value. Premium learners should fund the growth.
            </p>
            <div className="am-footer-company">
             <p> AlphaMaster is a product of <strong>Naavic Edutech Private Limited</strong> and is presented in association with Mathbook.
             </p>
            </div>
          </div>

          <div className="am-footer-links">
            <h3>Explore</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About AlphaMaster</a></li>
             
              <li><a href="/about">Championship Rounds</a></li>
              <li><a href="https://www.alphamaster.in" target="_blank" rel="noreferrer">Official Portal</a></li>
            </ul>
          </div>

         
          <div className="am-footer-links">
            <h3>Support & Legal</h3>
            <ul>
              <li><a href="/contact">Contact Customer Care</a></li>
              <li><a href='/refund'>Refund Policy</a></li>
          
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/disclaimer">Disclaimer</a></li>
            
            </ul>
          </div>

        </div>

        <div className="am-footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Naavic Edutech Private Limited. All Rights Reserved.
          </p>
          <div className="am-footer-social">
            {/* (Dummy for now) */}
            <a href="https://www.instagram.com/mathbookapp?cplk=emprYmowZ2hjenZ4" aria-label='facebook'>FB</a>
            <a href="https://www.facebook.com/share/1Q7kkvr467/" aria-label='Instagram'>IG</a>
         
          </div>
        </div>
      </div>
    </footer>
  );
0}