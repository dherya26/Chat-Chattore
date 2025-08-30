import React, { useState } from 'react';
import '../App.css';
import './HealthyDiet.css';

function HealthyDiet() {
  const [modalImage, setModalImage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openImageModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="page-content">
      <div className="healthy-container">
        <h1 className="healthy-heading">Healthy Diet Recipes</h1>
        <div className="healthy-grid">
          <div className="healthy-card">
            <img 
              className="healthy-img" 
              src={process.env.PUBLIC_URL + "/Healthy Paan.jpg"} 
              alt="Healthy Paan Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Healthy Paan.jpg")}
            />
            <div className="healthy-title">Healthy Paan</div>
            <a className="healthy-btn" href="https://youtu.be/s2A9Z7DJh90?si=lOuAVZ22CHI9b0N6" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="healthy-card">
            <img 
              className="healthy-img" 
              src={process.env.PUBLIC_URL + "/Healthy Sweet.jpg"} 
              alt="Healthy Sweet Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Healthy Sweet.jpg")}
            />
            <div className="healthy-title">Healthy Sweet</div>
            <a className="healthy-btn" href="https://youtu.be/_8iNpdXpnog?si=2SzFvoaHpdAqZjR9" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="healthy-card">
            <img 
              className="healthy-img" 
              src={process.env.PUBLIC_URL + "/Sandwich without bread.jpg"} 
              alt="Sandwich without bread Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Sandwich without bread.jpg")}
            />
            <div className="healthy-title">Sandwich without bread</div>
            <a className="healthy-btn" href="https://youtu.be/pYz76-vCknw?si=r8EIk2w-4-EtzxWE" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="healthy-card">
            <img 
              className="healthy-img" 
              src={process.env.PUBLIC_URL + "/Suji Breakfast.jpg"} 
              alt="Suji Breakfast Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Suji Breakfast.jpg")}
            />
            <div className="healthy-title">Suji Breakfast</div>
            <a className="healthy-btn" href="https://youtu.be/s5b5OHgeXbY?si=mRnjqfdRNlVxl3bv" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="healthy-card">
            <img 
              className="healthy-img" 
              src={process.env.PUBLIC_URL + "/Bread Roll.jpg"} 
              alt="Bread Roll Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Bread Roll.jpg")}
            />
            <div className="healthy-title">Bread Roll Without Bread</div>
            <a className="healthy-btn" href="https://youtu.be/c70hNUWABzM?si=zM8YZ7ROxjNbSCjA" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="healthy-card">
            <img 
              className="healthy-img" 
              src={process.env.PUBLIC_URL + "/Till Kutta.jpg"} 
              alt="Till Kutta Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Till Kutta.jpg")}
            />
            <div className="healthy-title">Till Kutta</div>
            <a className="healthy-btn" href="https://youtu.be/example1" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="healthy-card">
            <img 
              className="healthy-img" 
              src={process.env.PUBLIC_URL + "/Stuffed Chapati Roll.jpg"} 
              alt="Stuffed Chapati Roll Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Stuffed Chapati Roll.jpg")}
            />
            <div className="healthy-title">Stuffed Chapati Roll</div>
            <a className="healthy-btn" href="https://youtu.be/example2" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="healthy-card">
            <img 
              className="healthy-img" 
              src={process.env.PUBLIC_URL + "/Chapati Sandwich.jpg"} 
              alt="Chapati Sandwich Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Chapati Sandwich.jpg")}
            />
            <div className="healthy-title">Chapati Sandwich</div>
            <a className="healthy-btn" href="https://youtu.be/example3" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="healthy-card">
            <img 
              className="healthy-img" 
              src={process.env.PUBLIC_URL + "/Easiest Breakfast.jpg"} 
              alt="Easiest Breakfast Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Easiest Breakfast.jpg")}
            />
            <div className="healthy-title">Easiest Breakfast</div>
            <a className="healthy-btn" href="https://youtu.be/example4" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="healthy-card">
            <img 
              className="healthy-img" 
              src={process.env.PUBLIC_URL + "/Chocolate Cake With Dates.jpg"} 
              alt="Chocolate Cake With Dates Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Chocolate Cake With Dates.jpg")}
            />
            <div className="healthy-title">Chocolate Cake With Dates</div>
            <a className="healthy-btn" href="https://youtu.be/example5" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <div className={`image-modal ${isModalOpen ? 'active' : ''}`} onClick={closeImageModal}>
        <span className="close-modal" onClick={closeImageModal}>&times;</span>
        <img className="modal-content" src={modalImage} alt="Enlarged view" />
      </div>
    </div>
  );
}

export default HealthyDiet;