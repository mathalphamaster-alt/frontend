import React, { useState } from 'react';
import './style/Contact.css'; 
import homeback from '../assets/Popup.jpeg'; // Background Image இம்போர்ட் செய்கிறோம்

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'phone') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      setFormData({ ...formData, [name]: onlyNums });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const object = {
        ...formData,
        access_key: "YOUR_ACCESS_KEY_HERE", // Inge ungal Web3Forms Access Key-ai podavum
        subject: `New Contact Query from ${formData.name}`
    };

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(object)
        });

        const result = await response.json();

        if (result.success) {
            setShowPopup(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
            alert("Failed to send message. Please try again.");
        }
    } catch (error) {
        console.error("Error sending email:", error);
        alert("Something went wrong!");
    }
    
    setIsSubmitting(false);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="am-contact-page-wrapper" style={{ backgroundImage: `url(${homeback})` }}>
      <div className="am-contact-overlay"></div>
      
      <div className="am-contact-page">
        <div className="am-contact-header">
          <span className="am-badge">Get In Touch</span>
          <h1>We're Here to Help You</h1>
          <p>Reach out to our dedicated Customer Care team for any queries regarding the AlphaMaster Championship.</p>
        </div>
        
        <div className="am-contact-wrapper">
          <div className="am-contact-info-section">
            <h3>Contact Information</h3>
            <p className="info-desc">Fill up the form and our team will get back to you within 24 hours.</p>
          </div>
          
          <div className="am-contact-form-section">
            <form onSubmit={handleSubmit} className="am-clean-form">
              
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  maxLength="10" 
                  pattern="[0-9]{10}" 
                  title="Please enter exactly 10 digits"
                  required 
                />
              </div>

              <div className="input-group full-width">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="input-group full-width">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="4" 
                  required 
                ></textarea>
              </div>

              <button type="submit" className="am-btn-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className="am-location-bottom">
          <div className="info-card location-card-wide">
            <div className="info-icon">📍</div>
            <div className="info-text">
              <h4>Location</h4>
              <p style={{ lineHeight: '1.8' }}>
                <strong>Naavic Edutech Private Limited.</strong><br/>
                No.135/1A, KKP Street,<br/>
                Namakkal, Tamil Nadu - 637001.
              </p>
            </div>
          </div>
        </div>

        {showPopup && (
          <div style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
              background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(5px)',
              display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999
          }}>
              <div style={{
                  background: '#ffffff', padding: '2.5rem 2rem', borderRadius: '16px',
                  maxWidth: '400px', width: '85%', textAlign: 'center', 
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)', color: '#0f172a'
              }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>✅</div>
                  <h2 style={{ color: '#10b981', fontSize: '1.5rem', margin: '0 0 0.8rem 0', fontWeight: '700' }}>
                      Thank You!
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      Your message has been sent successfully. Our support team will get back to you shortly.
                  </p>
                  <button onClick={closePopup} style={{
                      background: '#0f172a', color: '#ffffff', padding: '0.75rem 1.5rem',
                      borderRadius: '8px', fontWeight: '600', fontSize: '0.9rem',
                      border: 'none', cursor: 'pointer'
                  }}>
                      Close
                  </button>
              </div>
          </div>
        )}
      </div>
    </div>
  );
}
