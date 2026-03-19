import React from 'react';
import './App.css';
import { useState } from 'react';
import logo from './assets/images/logo.png';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="site-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo-initials" />
          <span className="brand-name">AGRITECH <span className="brand-sub"> & ENGINEERING</span></span>
        </div>
       
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
          {menuOpen ? "X" : "☰"}
        </button>

  <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
    <li><a href="#agri" onClick={() => setMenuOpen(false)}>Agriculture</a></li>
    <li><a href="#construction" onClick={() => setMenuOpen(false)}>Construction</a></li>
    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
  </ul>
      </nav>

      {/* Hero Header */}
      <header className="hero">
        <div className="hero-content">
          <h1>Grow With Confidence! 🌿</h1>
          <p>
            At Agritech Koome, we offer precision solutions—from smart irrigation 
            to professional building construction engineering.
          </p>
          <div className="hero-btns">
            <a href="#agri" className="btn btn-primary">AgriTech Services</a>
            <a href="#construction" className="btn btn-secondary">Construction</a>
          </div>
        </div>
      </header>

      {/* AgriTech Section */}
      <section id="agri" className="agri-section">
        <div className="section-header">
          <span className="subtitle">Sustainable Farming</span>
          <h2>Agritech Koome Solutions</h2>
        </div>

        <div className="agri-grid">
          <div className="services-list">
            <div className="service-card">
              <span className="icon">💧</span>
              <h3>Irrigation Solutions</h3>
              <p>Smart watering systems designed for maximum yields.</p>
            </div>
            <div className="service-card">
              <span className="icon">📊</span>
              <h3>Management Advice</h3>
              <p>Professional planning to ensure your farm's success.</p>
            </div>
            <div className="service-card">
              <span className="icon">🛡️</span>
              <h3>Pest & Disease Control</h3>
              <p>Protecting your crops and livestock from the start.</p>
            </div>
            <div className="service-card">
              <span className="icon">🐄</span>
              <h3>Poultry & Dairy</h3>
              <p>Expert care for high-production livestock management.</p>
            </div>
          </div>

          <div className="promo-box">
            <h3>🔥 LIMITED OFFER</h3>
            <div className="discount-tag">40% OFF</div>
            <p>On all gardening services for a limited time!</p>
            <button className="promo-btn">Claim Offer Now</button>
          </div>
        </div>
      </section>

      {/* Construction Section */}
      <section id="construction" className="construction-section">
        <div className="section-header">
          <span className="subtitle">Engineering Excellence</span>
          <h2>Building Construction</h2>
        </div>
        <div className="eng-cards">
          <div className="eng-card">
            <h4>Structural Design</h4>
            <p>Precision blueprints for durable residential and commercial buildings.</p>
          </div>
          <div className="eng-card">
            <h4>Site Management</h4>
            <p>Strict oversight to ensure safety and quality at every stage.</p>
          </div>
          <div className="eng-card">
            <h4>Consultation</h4>
            <p>Expert engineering advice for complex structural challenges.</p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Ready to take the next step?</h3>
            <p>Professional, productive, and profitable solutions.</p>
          </div>
          <div className="footer-contact">
            <p className="phone-link">📞 +254 704181910</p>
            <p className="mpesa-note text-gold">Available for M-Pesa consultations</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Agritech Koome & Engineering. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
