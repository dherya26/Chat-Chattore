import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('page3');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on home page, redirect to home page with contact section anchor
      window.location.href = '/#page3';
    }
  };

  return (
    <>
      <div id="header">
        <div id="logo">
          <a href="/">
            <img src={process.env.PUBLIC_URL + "/chat.jpg"} alt="Chat Chattore Logo" />
          </a>
        </div>
        
        <div className="desktop-nav">
          <Link className="Text" to="/"><i className="ri-home-4-line"></i> Home</Link>
          <Link className="Text" to="/recipes">Recipes</Link>
          <Link className="Text" to="/popular">Popular</Link>
          <Link className="Text" to="/healthy-diet">Healthy Diet</Link>
          <Link className="Text" to="/holidays-special">Holidays Special</Link>
          
          <div className="Text">
            <p>More</p>
            <p><i className="ri-arrow-down-s-line"></i></p>
            <div className="dropdown-menu">
              <Link to="/faq" className="dropdown-item">
                <i className="ri-question-line"></i>
                FAQ
              </Link>
              <Link to="/sessions" className="dropdown-item">
                <i className="ri-video-chat-line"></i>
                Sessions
              </Link>
            </div>
          </div>
          <Link className="Text" to="/about">About</Link>
        </div>

        <div className="mobile-contact">
          <div id="contactdetails">
            <p style={{ textAlign: 'center' }}>
              <u>
                <a href="#page3" onClick={scrollToContact} style={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>
                  Contact Us
                </a>
              </u>
            </p>
            <p>+91 7489730278</p>
          </div>
          <div className="icon">
            <a href="https://youtube.com/@chatchattore?si=hY6z_ahRINydeQzR" target="_blank" rel="noopener noreferrer">
              <i className="ri-video-fill" style={{ color: 'rgb(0, 0, 0)' }}></i>
            </a>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className={isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link className="mobile-menu-item" to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="ri-home-4-line"></i> Home
          </Link>
          <Link className="mobile-menu-item" to="/recipes" onClick={() => setIsMobileMenuOpen(false)}>
            Recipes
          </Link>
          <Link className="mobile-menu-item" to="/popular" onClick={() => setIsMobileMenuOpen(false)}>
            Popular
          </Link>
          <Link className="mobile-menu-item" to="/healthy-diet" onClick={() => setIsMobileMenuOpen(false)}>
            Healthy Diet
          </Link>
          <Link className="mobile-menu-item" to="/holidays-special" onClick={() => setIsMobileMenuOpen(false)}>
            Holidays Special
          </Link>
          <Link className="mobile-menu-item" to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link className="mobile-menu-item" to="/faq" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="ri-question-line"></i> FAQ
          </Link>
          <Link className="mobile-menu-item" to="/sessions" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="ri-video-chat-line"></i> Sessions
          </Link>
        </div>
      )}
    </>
  );
}

export default Header;