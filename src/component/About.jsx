import React from 'react';
import './style/About.css'; 

export default function About() {
  return (
    <div className="about-page">
      
      <div className="about-header">
        <span className="am-badge">About AlphaMaster</span>
        <h1>Where Dedication Meets Opportunity</h1>
        <p>
          Created by Naavic Edutech Private Limited to recognise, encourage, and celebrate mathematical talent across India.
        </p>
      </div>

    
      <div className="about-grid">
        <div className="about-content-block">
          <h3>Our Vision</h3>
          <p>We aim to create a recognized platform that encourages mathematical learning and excellence across India. Our core goals are to:</p>
          <ul className="about-list">
            <li>Promote mathematics as a lifelong learning habit.</li>
            <li>Encourage logical thinking and problem-solving skills.</li>
            <li>Recognise consistent effort and outstanding performance.</li>
            <li>Provide learners with opportunities to compete at higher levels.</li>
            <li>Celebrate talent irrespective of geographical location or background.</li>
          </ul>
        </div>

        <div className="about-content-block">
          <h3>Our Philosophy</h3>
          <p>
            At Mathbook App, we believe every learner deserves the opportunity to discover the power of mathematics. Some begin with curiosity, some with a challenge, and others through consistent practice.
          </p>
          <p className="highlight-text">
            We don't just build mathematics users. We build confident mathematics learners.
          </p>
        </div>
      </div>

  
      <hr className="about-divider" />

   
      <div className="about-grid">
        <div className="about-content-block">
          <h3>Recognition Beyond Rankings</h3>
          <p>
            Achievement deserves recognition. The Champion and Runners-up will receive distinguished recognition through official awards and certificates, making the AlphaMaster title a symbol of mathematical confidence and commitment.
          </p>
        </div>

        <div className="about-content-block">
          <h3>Who Can Participate?</h3>
          <p>
            Designed for eligible Mathbook App Premium learners who successfully complete all 12 qualifying levels. Participation is subject to the event schedule, rules, and verification process published by Naavic Edutech Private Limited.
          </p>
        </div>
      </div>

    </div>
  );
}