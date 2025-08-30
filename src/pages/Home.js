import React, { useState, useEffect } from 'react';
import '../App.css';

function Home() {
  const [modalImage, setModalImage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stats, setStats] = useState({
    subscribers: 0,
    videos: 0,
    sessions: 0,
    recipes: 0
  });

  const openImageModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  // Animated counter effect
  const animateCounter = (target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        return target;
      }
      return Math.floor(start);
    }, 16);
    
    return timer;
  };

  useEffect(() => {
    // Actual stats from your YouTube channel
    const targetStats = {
      subscribers: 4690, // 4.69k subscribers
      videos: 61,
      sessions: 150,
      recipes: 200
    };

    // Animate counters
    setTimeout(() => {
      Object.keys(targetStats).forEach((key) => {
        let current = 0;
        const target = targetStats[key];
        const increment = target / 120; // 2 seconds animation
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setStats(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, 16);
      });
    }, 500);
  }, []);

  return (
    <>
      <div id="page1">
        <div id="strip">
          <marquee direction="left" scrollamount="10">
            <p>"From our kitchen to yours, Delicious Recipes just one click away!"</p>
          </marquee>
        </div>
        <div id="content">
          <div id="box1">
            <h1>No Experience ? No Problem ! </h1>
            <p>Let's Cook Together</p>
            <div style={{ height: '80%' }}>
              <a href="https://www.instagram.com/p/CCgXhO4nGUV/?igsh=dGo5amV3YmRjdHZx" target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + "/chat1.jpg"} alt="Recipe featured on Instagram" />
              </a>
            </div>
          </div>
          <div id="box2">
            <div className="stats-container">
              <h2 className="stats-title">Our Growing Community</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="ri-youtube-fill"></i>
                  </div>
                  <div className="stat-number">{stats.subscribers.toLocaleString()}+</div>
                  <div className="stat-label">YouTube Subscribers</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="ri-play-circle-fill"></i>
                  </div>
                  <div className="stat-number">{stats.videos}+</div>
                  <div className="stat-label">Recipe Videos</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="ri-video-chat-fill"></i>
                  </div>
                  <div className="stat-number">{stats.sessions}+</div>
                  <div className="stat-label">Live Sessions</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="ri-book-2-fill"></i>
                  </div>
                  <div className="stat-number">{stats.recipes}+</div>
                  <div className="stat-label">Recipes Shared</div>
                </div>
              </div>
              <div className="stats-cta">
                <a href="https://www.youtube.com/@chatchattore" target="_blank" rel="noopener noreferrer" className="youtube-btn">
                  <i className="ri-youtube-fill"></i> Subscribe Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="heading">
          <h1>Indulge in the Magic of Baking and Satisfy Your Cravings Instantly </h1>
        </div>
      </div>

      <div id="page2">
        <div id="line">Trending</div>
        <div className="trending-container">
          <div className="trending-grid">
            <div className="trending-card">
              <img 
                className="trending-img" 
                src={process.env.PUBLIC_URL + "/aam.jpg"} 
                alt="Aam Pak Recipe" 
                onClick={() => openImageModal(process.env.PUBLIC_URL + '/aam.jpg')} 
              />
              <div className="card-title">Aam Pak</div>
              <a className="card-btn" href="https://youtu.be/s2A9Z7DJh90?si=lOuAVZ22CHI9b0N6" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
            </div>
            <div className="trending-card">
              <img 
                className="trending-img" 
                src={process.env.PUBLIC_URL + "/till.jpg"} 
                alt="Til Laddu Recipe" 
                onClick={() => openImageModal(process.env.PUBLIC_URL + '/till.jpg')} 
              />
              <div className="card-title">Til Laddu</div>
              <a className="card-btn" href="https://youtu.be/_8iNpdXpnog?si=2SzFvoaHpdAqZjR9" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
            </div>
            <div className="trending-card">
              <img 
                className="trending-img" 
                src={process.env.PUBLIC_URL + "/kopra.jpg"} 
                alt="Kopra Barfi Recipe" 
                onClick={() => openImageModal(process.env.PUBLIC_URL + '/kopra.jpg')} 
              />
              <div className="card-title">Kopra Barfi</div>
              <a className="card-btn" href="https://youtu.be/pYz76-vCknw?si=r8EIk2w-4-EtzxWE" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
            </div>
            <div className="trending-card">
              <img 
                className="trending-img" 
                src={process.env.PUBLIC_URL + "/ghee.jpg"} 
                alt="Homemade Ghee Recipe" 
                onClick={() => openImageModal(process.env.PUBLIC_URL + '/ghee.jpg')} 
              />
              <div className="card-title">Homemade Ghee</div>
              <a className="card-btn" href="https://youtu.be/s5b5OHgeXbY?si=mRnjqfdRNlVxl3bv" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
            </div>
            <div className="trending-card">
              <img 
                className="trending-img" 
                src={process.env.PUBLIC_URL + "/Nimbu Ka Aachar.jpg"} 
                alt="Nimbu Ka Aachar Recipe" 
                onClick={() => openImageModal(process.env.PUBLIC_URL + '/Nimbu Ka Aachar.jpg')} 
              />
              <div className="card-title">Nimbu Ka Aachar</div>
              <a className="card-btn" href="https://youtu.be/example1" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
            </div>
            <div className="trending-card">
              <img 
                className="trending-img" 
                src={process.env.PUBLIC_URL + "/Papad Bhurji.jpg"} 
                alt="Papad Bhurji Recipe" 
                onClick={() => openImageModal(process.env.PUBLIC_URL + '/Papad Bhurji.jpg')} 
              />
              <div className="card-title">Papad Bhurji</div>
              <a className="card-btn" href="https://youtu.be/example2" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
            </div>
            <div className="trending-card">
              <img 
                className="trending-img" 
                src={process.env.PUBLIC_URL + "/Stripped Samosa.jpg"} 
                alt="Stripped Samosa Recipe" 
                onClick={() => openImageModal(process.env.PUBLIC_URL + '/Stripped Samosa.jpg')} 
              />
              <div className="card-title">Stripped Samosa</div>
              <a className="card-btn" href="https://youtu.be/example3" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
            </div>
            {/* Duplicate cards for seamless loop */}
            <div className="trending-card">
              <img 
                className="trending-img" 
                src={process.env.PUBLIC_URL + "/aam.jpg"} 
                alt="Aam Pak Recipe" 
                onClick={() => openImageModal(process.env.PUBLIC_URL + '/aam.jpg')} 
              />
              <div className="card-title">Aam Pak</div>
              <a className="card-btn" href="https://youtu.be/s2A9Z7DJh90?si=lOuAVZ22CHI9b0N6" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
            </div>
            <div className="trending-card">
              <img 
                className="trending-img" 
                src={process.env.PUBLIC_URL + "/till.jpg"} 
                alt="Til Laddu Recipe" 
                onClick={() => openImageModal(process.env.PUBLIC_URL + '/till.jpg')} 
              />
              <div className="card-title">Til Laddu</div>
              <a className="card-btn" href="https://youtu.be/_8iNpdXpnog?si=2SzFvoaHpdAqZjR9" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
            </div>
            <div className="trending-card">
              <img 
                className="trending-img" 
                src={process.env.PUBLIC_URL + "/kopra.jpg"} 
                alt="Kopra Barfi Recipe" 
                onClick={() => openImageModal(process.env.PUBLIC_URL + '/kopra.jpg')} 
              />
              <div className="card-title">Kopra Barfi</div>
              <a className="card-btn" href="https://youtu.be/pYz76-vCknw?si=r8EIk2w-4-EtzxWE" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
            </div>
            <div className="trending-card">
              <img 
                className="trending-img" 
                src={process.env.PUBLIC_URL + "/ghee.jpg"} 
                alt="Homemade Ghee Recipe" 
                onClick={() => openImageModal(process.env.PUBLIC_URL + '/ghee.jpg')} 
              />
              <div className="card-title">Homemade Ghee</div>
              <a className="card-btn" href="https://youtu.be/s5b5OHgeXbY?si=mRnjqfdRNlVxl3bv" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
            </div>
            <div className="trending-card">
              <img 
                className="trending-img" 
                src={process.env.PUBLIC_URL + "/Nimbu Ka Aachar.jpg"} 
                alt="Nimbu Ka Aachar Recipe" 
                onClick={() => openImageModal(process.env.PUBLIC_URL + '/Nimbu Ka Aachar.jpg')} 
              />
              <div className="card-title">Nimbu Ka Aachar</div>
              <a className="card-btn" href="https://youtu.be/example1" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
            </div>
            <div className="trending-card">
              <img 
                className="trending-img" 
                src={process.env.PUBLIC_URL + "/Papad Bhurji.jpg"} 
                alt="Papad Bhurji Recipe" 
                onClick={() => openImageModal(process.env.PUBLIC_URL + '/Papad Bhurji.jpg')} 
              />
              <div className="card-title">Papad Bhurji</div>
              <a className="card-btn" href="https://youtu.be/example2" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
            </div>
            <div className="trending-card">
              <img 
                className="trending-img" 
                src={process.env.PUBLIC_URL + "/Stripped Samosa.jpg"} 
                alt="Stripped Samosa Recipe" 
                onClick={() => openImageModal(process.env.PUBLIC_URL + '/Stripped Samosa.jpg')} 
              />
              <div className="card-title">Stripped Samosa</div>
              <a className="card-btn" href="https://youtu.be/example3" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
            </div>
          </div>
        </div>
      </div>

      <div id="page3">
        <div id="contact-heading">Contact Us</div>
        <div className="contact-info">
          <p><strong>Phone:</strong> +91 7489730278</p> 
          <p>
            <strong>Instagram:</strong> 
            <a href="https://www.instagram.com/chat_chattore?igsh=OGxrN2xzdm4zc28y" target="_blank" rel="noopener noreferrer" style={{ color: '#e1306c', fontWeight: 'bold' }}>
              <i className="ri-instagram-line"></i> @chat_chattore
            </a>
          </p>
          <p>
            <strong>YouTube:</strong> 
            <a href="https://youtube.com/@chatchattore?si=hY6z_ahRINydeQzR" target="_blank" rel="noopener noreferrer" style={{ color: '#ff0000', fontWeight: 'bold' }}>
              <i className="ri-youtube-line"></i> @chatchattore
            </a>
          </p>
          <p>
            <strong>Facebook:</strong> 
            <a href="https://www.facebook.com/share/14FnTWddAt1/" target="_blank" rel="noopener noreferrer" style={{ color: '#1877f2', fontWeight: 'bold' }}>
              <i className="ri-facebook-circle-line"></i> Chat Chattore
            </a>
          </p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Image Preview Modal */}
      {isModalOpen && (
        <div className="image-modal" onClick={closeImageModal}>
          <span className="close-modal" onClick={closeImageModal}>&times;</span>
          <img className="modal-content" src={modalImage} alt="Modal Preview" />
        </div>
      )}
    </>
  );
}

export default Home;