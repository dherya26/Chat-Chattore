import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './About.css';

function About() {
  const navigate = useNavigate();
  
  return (
    <div className="about-container">
      <h1 className="about-heading">About Chat Chattore</h1>
      <div className="about-content">
        <div className="chef-intro">
          <h2 className="chef-name">Vinita Jain</h2>
          <p className="chef-title">Indian Housewife & Recipe Creator</p>
        </div>
          
          <p className="about-text">
            Namaste! I am Vinita Jain, a passionate home cook and the heart behind Chat Chattore. My culinary journey began in my childhood kitchen, where I learned the sacred art of Indian cooking from my mother and grandmother. What started as family traditions has blossomed into a mission to preserve and share authentic Indian vegetarian cuisine with food lovers worldwide.
          </p>
          
          <div className="mission-section">
            <h2 className="mission-title">Our Mission</h2>
            <p className="about-text">
              To democratize authentic Indian vegetarian cooking by making traditional family recipes accessible, approachable, and enjoyable for everyone. We believe that food is the universal language of love that connects hearts, preserves culture, and creates cherished memories across generations.
            </p>
          </div>
          
          <p className="about-text">
            Chat Chattore is more than just a recipe platform—it's a culinary bridge connecting modern kitchens with time-honored traditions. I specialize in creating step-by-step vegetarian recipes that honor authentic flavors while being practical for today's busy lifestyles. From street food favorites to festival specialties, every recipe is tested in my own kitchen and perfected for home cooks.
          </p>

          <p className="about-text">
            My content is primarily in Hindi to preserve the authentic cultural context of these recipes, but I ensure that cooking techniques and measurements are universally understandable. Whether you're a complete beginner or an experienced cook looking to expand your repertoire, you'll find recipes that inspire confidence and deliver delicious results.
          </p>
          
          <div className="features-section">
            <h2 className="features-heading">Our Features</h2>
            <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🍲</div>
              <h3 className="feature-title">100% Vegetarian</h3>
              <p className="feature-desc">All our recipes are vegetarian, focusing on fresh vegetables, lentils, and traditional Indian ingredients.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3 className="feature-title">Easy & Quick</h3>
              <p className="feature-desc">Step-by-step instructions that make even complex dishes simple to prepare at home.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3 className="feature-title">Made with Love</h3>
              <p className="feature-desc">Every recipe is tested and perfected in my own kitchen, just like I make for my family.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">▶️</div>
              <h3 className="feature-title">Weekly Videos</h3>
              <p className="feature-desc">New recipes every week with detailed video tutorials in Hindi for easy understanding.</p>
            </div>
          </div>
          </div>
          
          <p className="about-text">
            What sets Chat Chattore apart is our commitment to authenticity without compromise. Every recipe reflects generations of culinary wisdom, regional variations, and seasonal cooking practices. I share not just ingredients and steps, but the stories, tips, and cultural significance behind each dish, helping you understand the 'why' behind traditional techniques.
          </p>
          
          <div className="journey-section">
            <h2 className="journey-title">My Culinary Journey</h2>
            <p className="about-text">
              From learning to make perfect rotis as a child to mastering complex festival sweets, my kitchen has been my classroom for over two decades. I've experimented with regional variations, adapted recipes for modern kitchens, and discovered shortcuts that don't compromise on taste. This wealth of experience is what I share with you through Chat Chattore.
            </p>
          </div>
          
          <div className="benefits-section">
            <h2 className="benefits-heading">Benefits</h2>
            <p className="benefits-subtitle">Why home cooks trust Chat Chattore</p>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">⏱️</div>
                <h3 className="benefit-title">Saves Your Time</h3>
                <p className="benefit-desc">Short, structured videos and clear instructions help you cook faster on busy days.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🌱</div>
                <h3 className="benefit-title">Beginner-Friendly</h3>
                <p className="benefit-desc">Step-by-step guidance with practical tips so anyone can master Indian recipes.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🍲</div>
                <h3 className="benefit-title">Authentic Flavours</h3>
                <p className="benefit-desc">Traditional, vegetarian recipes tested in a real home kitchen for reliable results.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📅</div>
                <h3 className="benefit-title">Weekly New Recipes</h3>
                <p className="benefit-desc">Fresh ideas every week keep your menu exciting and family-approved.</p>
              </div>
            </div>
          </div>
          
          <p className="about-text">
            Join our thriving community of passionate home cooks who have discovered the joy of authentic Indian vegetarian cooking. Together, we're preserving culinary traditions while creating new memories, one recipe at a time. Let's embark on this flavorful journey together and bring the warmth of Indian hospitality to your dining table!
          </p>
          
          <div className="cta-section">
            <h2 className="cta-heading">Ready to Start Cooking?</h2>
            <p className="cta-text">Discover our collection of authentic vegetarian Indian recipes</p>
            <button className="cta-btn" onClick={() => {
              navigate('/recipes');
              window.scrollTo(0, 0);
            }}>Explore Our Recipes</button>
          </div>
        </div>
      </div>
  );
}

export default About;