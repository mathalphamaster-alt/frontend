import React, { useState, useEffect } from 'react';
import './style/Home.css';
import homeback from '../assets/home.jpg';

export default function Home() {
  
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  useEffect(() => {
    const targetDate = new Date('January 1, 2027 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        
        setIsTimerExpired(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page-wrapper" style={{ backgroundImage: `url(${homeback})` }}>
      <div className="am-container">
        
        {/* 
          
           Dummy Text & Image Box 
        */}
        {!isTimerExpired ? (
       
          <div className="am-announcement am-top-countdown-box">
            <div className="am-badge" style={{ marginBottom: '0.75rem' }}>Official Announcement Countdown</div>
            <h3><strong>Save the Date — January 1, 2027</strong></h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '700px', margin: '0 auto 1.5rem auto' }}>
              The Event Schedule, Regulations, Terms & Conditions, Awards, and venue will be officially announced at <strong>www.alphamaster.in</strong>.
            </p>
            
            {/* Live Timer Grid */}
            <div className="am-timer-grid">
              <div className="am-timer-card">
                <span className="am-timer-num">{timeLeft.days}</span>
                <span className="am-timer-label">Days</span>
              </div>
              <div className="am-timer-card">
                <span className="am-timer-num">{timeLeft.hours}</span>
                <span className="am-timer-label">Hours</span>
              </div>
              <div className="am-timer-card">
                <span className="am-timer-num">{timeLeft.minutes}</span>
                <span className="am-timer-label">Minutes</span>
              </div>
              <div className="am-timer-card">
                <span className="am-timer-num">{timeLeft.seconds}</span>
                <span className="am-timer-label">Seconds</span>
              </div>
            </div>
          </div>
        ) : (
        //dummy
          <div className="am-announcement am-post-event-box">
            <div className="am-post-event-content">
           
              <div className="am-post-text-box">
                <h3>The Wait is Over!</h3>
                <p>
                  This is a dummy text box.
                  a
                </p>
                <button className="am-btn am-btn-primary" style={{ marginTop: '1rem' }}>
                  Register Now
                </button>
              </div>
              
              {/* Dummy Image Box */}
              <div className="am-post-image-box">
                <div className="dummy-image-placeholder">
                  <span>[ Your Image Here ]</span>
                </div>
              </div>
            </div>
          </div>
        )}
  <div className="am-hero-box" style={{ marginTop: '2.5rem' }}>
          <div className="am-hero-content">
            <span className="am-badge">Presented by Mathbook App</span>
            
            <h1>ALPHAMASTER</h1>
            <p className="am-tagline">Think. Solve. Master.</p>
            <p className="am-hero-desc">
              Where mathematical minds rise, talent earns recognition, and champions are created. 
              Step up through 12 qualifying levels and compete for the ultimate title.
            </p>
            <div className="am-btn-group">
              <a href="#rounds" className="am-btn am-btn-primary">Explore Championship Rounds</a>
              <a href="https://www.alphamaster.in" target="_blank" rel="noreferrer" className="am-btn am-btn-outline">Visit Official Portal</a>
            </div>
          </div>
        </div>

       
        <h2 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2rem', color: '#ffffff' }}>The Championship Journey</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          12 Levels. 4 Championship Rounds. 1 Champion. Complete all qualifying levels in Mathbook App Premium to enter the grand stage.
        </p>

        <div className="am-grid-4">
          <div className="am-box">
            <div className="am-step-number">01</div>
            <h3>The Qualifying Challenge</h3>
            <p>Eligible learners compete to demonstrate math knowledge and problem-solving abilities. <strong>Top 500 advance.</strong></p>
            <button className="am-mode-badge online">Online Mode</button>
          </div>

          <div className="am-box">
            <div className="am-step-number">02</div>
            <h3>The Excellence Challenge</h3>
            <p>A demanding stage designed to test accuracy, consistency, and analytical thinking. <strong>Top 50 advance.</strong></p>
            <button className="am-mode-badge online">Online Mode</button>
          </div>

          <div className="am-box">
            <div className="am-step-number">03</div>
            <h3>The Master Challenge</h3>
            <p>The top 50 face an advanced mathematical challenge. Only the <strong>top 5 performers</strong> qualify for the final round.</p>
            <button className="am-mode-badge offline">Offline Mode</button>
          </div>

          <div className="am-box">
            <div className="am-step-number">04</div>
            <h3>The Grand Finale</h3>
            <p>The final five compete for ultimate glory: <strong>1 AlphaMaster Title Winner</strong> and <strong>4 Runners-up</strong>.</p>
            <button className="am-mode-badge offline">Offline Mode</button>
          </div>
        </div>
      </div>
    </div>
  );
}