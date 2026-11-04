import React from 'react';
import './style/About.css'; 
import homeback from '../assets/Popup.jpeg'; // Background Image இம்போர்ட் செய்கிறோம்

export default function About() {
  return (
    <div className="about-page-wrapper" style={{ backgroundImage: `url(${homeback})` }}>
      <div className="about-page">
        
        {/* Header / Hero Section */}
        <div className="about-header">
          <span className="am-badge">About AlphaMaster</span>
          <h1>ALPHAMASTER</h1>
          <p style={{ color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
            The Mathbook Grand Championship
          </p>
          <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: '#ffffff', marginBottom: '1rem' }}>
            "Think. Solve. Master."
          </p>
          <p>
            Where mathematical minds rise, talent earns recognition, and champions are created.
          </p>
        </div>

        {/* Introduction Block */}
        <div className="about-content-block" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h3>The Vision of Excellence</h3>
          <p style={{ maxWidth: '850px', margin: '0 auto', lineHeight: '1.8' }}>
            AlphaMaster is the flagship mathematics championship presented by Mathbook, created to recognise, encourage and celebrate mathematical talent. 
            We believe that mathematical excellence is not simply about memorising formulas or solving problems quickly. It is built through consistent practice, logical thinking, problem-solving ability, discipline and the confidence to take on new challenges.
          </p>
          <p style={{ maxWidth: '850px', margin: '1.5rem auto 0 auto', lineHeight: '1.8' }}>
            AlphaMaster provides passionate mathematics learners with an opportunity to demonstrate their abilities, challenge themselves and compete for the prestigious title of AlphaMaster Champion. It is more than a competition. It is a platform where dedication meets opportunity and learning becomes an achievement worth celebrating.
          </p>
        </div>

        {/* First Grid: Vision & Philosophy */}
        <div className="about-grid">
          <div className="about-content-block">
            <h3>The AlphaMaster Vision</h3>
            <p>Our vision is to create a recognised platform that encourages mathematical learning and excellence across India. We aim to:</p>
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
              At Mathbook App, we believe every learner deserves the opportunity to discover the power of mathematics. 
              Some learners begin with curiosity. Some begin with a challenge. Some discover their potential only after consistent practice. AlphaMaster celebrates that journey.
            </p>
            <p className="highlight-text">
              We don't just build mathematics users. We build confident mathematics learners.
            </p>
          </div>
        </div>

        <hr className="about-divider" />

        {/* Second Grid: Recognition & Eligibility */}
        <div className="about-grid">
          <div className="about-content-block">
            <h3>Recognition Beyond Rankings</h3>
            <p>
              At AlphaMaster, achievement deserves recognition. Our objective is to make every stage of the championship a meaningful milestone in a learner's educational journey.
            </p>
            <p>
              The Champion and Runners-up will receive distinguished recognition through official awards and certificates, making the AlphaMaster title a symbol of mathematical confidence, commitment and excellence.
            </p>
          </div>

          <div className="about-content-block">
            <h3>Who Can Participate?</h3>
            <p>
              AlphaMaster is designed for eligible Mathbook App Premium learners who successfully complete all 12 qualifying levels and satisfy the official championship eligibility requirements.
            </p>
            <p>
              Participation is subject to the event schedule, rules and verification process published by Naavic Edutech Private Limited.
            </p>
          </div>
        </div>

        {/* Presented by Mathbook Section */}
        <div className="about-content-block" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h3>Presented by Mathbook</h3>
          <p style={{ maxWidth: '850px', margin: '0 auto', lineHeight: '1.8' }}>
            AlphaMaster is proudly presented by Mathbook App, an educational platform dedicated to making mathematics learning accessible, engaging and rewarding. 
            Through daily practice, structured learning, interactive quizzes and meaningful recognition, Mathbook App encourages learners to develop mathematical fluency as a lifelong habit.
          </p>
          
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(0, 230, 255, 0.05)', border: '1px solid rgba(0, 230, 255, 0.2)', borderRadius: '12px' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Your Journey. Your Challenge. Your Title.</h4>
            <p style={{ color: '#ffffff', fontWeight: '500', marginBottom: '0.5rem' }}>Are you ready to become an AlphaMaster?</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>
              Learn consistently. Practice passionately. Compete confidently. <br />
              <strong>AlphaMaster – Think. Solve. Master.</strong>
            </p>
          </div>

          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
            An initiative of Mathbook App, an ambitious product of Naavic Edutech Private Limited.<br />
            The Event Schedule, Regulations, official terms and conditions, Awards and Rewards along with event date and venue will be announced at <strong>www.alphamaster.in</strong> on January 1, 2027 by Naavic Edutech Private Limited.
          </p>
        </div>

      </div>
    </div>
  );
}
