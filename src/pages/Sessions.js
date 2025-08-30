import React, { useState } from 'react';
import '../App.css';
import './Sessions.css';

function Sessions() {
  const [selectedPlan, setSelectedPlan] = useState('');
  
  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for registering! We will contact you within 24 hours to confirm your session details.');
  };
  
  return (
    <div className="page-content">
      <div className="sessions-container">
        <header className="sessions-header">
          <h1 className="sessions-heading">Live Cooking Sessions</h1>
          <p className="sessions-subtitle">Learn authentic Indian vegetarian cooking with Vinita Jain</p>
        </header>
      
      <div className="hero-section">
        <h2 className="hero-title">Master Indian Cooking with Expert Guidance</h2>
        <p className="hero-desc">
          Join our interactive live cooking sessions where you'll learn traditional Indian vegetarian recipes, cooking techniques, and
          secret tips from Vinita Jain. Choose between online and offline sessions based on your preference and location.
        </p>
        <div 
          className="trial-badge clickable" 
          onClick={() => {
            const registrationSection = document.querySelector('.registration-section');
            if (registrationSection) {
              registrationSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          🎉 1-Day Free Trial Available
        </div>
      </div>
      
      <div className="session-types">
        <div className="session-card">
          <div className="session-icon">
            <i className="ri-computer-line"></i>
          </div>
          <h3 className="session-title">Online Sessions</h3>
          <p className="session-desc">
            Learn from the comfort of your home with live video sessions. Perfect for those who prefer learning remotely or live far from our location.
          </p>
          <div className="session-features">
            <div className="feature">
              <i className="ri-check-line"></i>
              <span>Live video interaction</span>
            </div>
            <div className="feature">
              <i className="ri-check-line"></i>
              <span>Screen sharing for techniques</span>
            </div>
            <div className="feature">
              <i className="ri-check-line"></i>
              <span>Recorded sessions for review</span>
            </div>
            <div className="feature">
              <i className="ri-check-line"></i>
              <span>Chat support during class</span>
            </div>
            <div className="feature">
              <i className="ri-check-line"></i>
              <span>Flexible timing options</span>
            </div>
          </div>
        </div>
        
        <div className="session-card">
          <div className="session-icon">
            <i className="ri-home-line"></i>
          </div>
          <h3 className="session-title">Offline Sessions</h3>
          <p className="session-desc">
            Hands-on learning experience in our kitchen. Get personal attention and learn traditional cooking methods up close.
          </p>
          <div className="session-features">
            <div className="feature">
              <i className="ri-check-line"></i>
              <span>Hands-on practice</span>
            </div>
            <div className="feature">
              <i className="ri-check-line"></i>
              <span>Personal guidance</span>
            </div>
            <div className="feature">
              <i className="ri-check-line"></i>
              <span>All ingredients provided</span>
            </div>
            <div className="feature">
              <i className="ri-check-line"></i>
              <span>Take home your creations</span>
            </div>
            <div className="feature">
              <i className="ri-check-line"></i>
              <span>Group learning experience</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pricing-section">
        <h2 className="section-title">Session Plans & Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3 className="pricing-name">Trial Session</h3>
            <div className="pricing-price">₹0</div>
            <div className="pricing-duration">1 Day</div>
            <ul className="pricing-features">
              <li>1 Live cooking session</li>
              <li>Basic recipe learning</li>
              <li>Q&A with Vinita</li>
              <li>Recipe notes</li>
              <li>No commitment</li>
            </ul>
          </div>
          
          <div className="pricing-card featured">
            <h3 className="pricing-name">Basic Plan</h3>
            <div className="pricing-price">₹2,999</div>
            <div className="pricing-duration">1 Month</div>
            <ul className="pricing-features">
              <li>8 Live sessions</li>
              <li>4 recipes per session</li>
              <li>Personal guidance</li>
              <li>Recipe booklet</li>
              <li>WhatsApp support</li>
              <li>Certificate of completion</li>
            </ul>
          </div>
          
          <div className="pricing-card">
            <h3 className="pricing-name">Premium Plan</h3>
            <div className="pricing-price">₹4,999</div>
            <div className="pricing-duration">3 Months</div>
            <ul className="pricing-features">
              <li>24 Live sessions</li>
              <li>6 recipes per session</li>
              <li>Advanced techniques</li>
              <li>Personal consultation</li>
              <li>Recipe video library</li>
              <li>Priority support</li>
              <li>Advanced certificate</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="registration-section">
        <h2 className="section-title">Register for Cooking Sessions</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" id="fullName" name="fullName" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input type="text" id="city" name="city" required />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="sessionType">Session Type *</label>
              <select id="sessionType" name="sessionType" required>
                <option value="">Select session type</option>
                <option value="online">Online Session</option>
                <option value="offline">Offline Session</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="plan">Select Plan *</label>
              <select id="plan" name="plan" required value={selectedPlan} onChange={handlePlanChange}>
                <option value="">Choose your plan</option>
                <option value="trial">Trial Session (Free)</option>
                <option value="basic">Basic Plan (₹2,999)</option>
                <option value="premium">Premium Plan (₹4,999)</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="experience">Cooking Experience Level</label>
            <select id="experience" name="experience">
              <option value="">Select your experience level</option>
              <option value="beginner">Beginner (New to cooking)</option>
              <option value="intermediate">Intermediate (Basic cooking skills)</option>
              <option value="advanced">Advanced (Experienced cook)</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Additional Message (Optional)</label>
            <textarea id="message" name="message" rows="4" placeholder="Tell us about your cooking goals, dietary preferences, or any questions..."></textarea>
          </div>
          
          <button type="submit" className="submit-btn">
            {selectedPlan === 'trial' ? 'Register for Free Trial' : 
             selectedPlan === 'basic' ? 'Register for Basic Plan (₹2,999)' :
             selectedPlan === 'premium' ? 'Register for Premium Plan (₹4,999)' :
             'Register for Sessions'}
          </button>
        </form>
      </div>
      
      <div className="testimonials-section">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p className="testimonial-text">
              "The live sessions are amazing! I've learned so many new techniques and recipes that I now use regularly."
            </p>
            <p className="testimonial-author">- Priya S.</p>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">
              "Vinita's guidance made cooking complex dishes seem so easy. Highly recommend these sessions!"
            </p>
            <p className="testimonial-author">- Rahul M.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Sessions;