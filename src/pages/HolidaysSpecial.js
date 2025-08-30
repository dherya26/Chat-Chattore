import React, { useState } from 'react';
import '../App.css';
import './HolidaysSpecial.css';

function HolidaysSpecial() {
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
      <div className="holidays-container">
        <h1 className="holidays-heading">Holidays Special Recipes</h1>
        <div className="holidays-grid">
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Pudding.jpg"} 
              alt="Pudding Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Pudding.jpg")}
            />
            <div className="holidays-title">Pudding</div>
            <a className="holidays-btn" href="https://youtu.be/s2A9Z7DJh90?si=lOuAVZ22CHI9b0N6" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Mango Rabdi.jpg"} 
              alt="Mango Rabdi Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Mango Rabdi.jpg")}
            />
            <div className="holidays-title">Mango Rabdi</div>
            <a className="holidays-btn" href="https://youtu.be/_8iNpdXpnog?si=2SzFvoaHpdAqZjR9" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/jaam ka aachar.jpg"} 
              alt="Jaam ka Aachar Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/jaam ka aachar.jpg")}
            />
            <div className="holidays-title">Jaam ka Aachar</div>
            <a className="holidays-btn" href="https://youtu.be/pYz76-vCknw?si=r8EIk2w-4-EtzxWE" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Nimbu ki Chutney.jpg"} 
              alt="Nimbu ki Chutney Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Nimbu ki Chutney.jpg")}
            />
            <div className="holidays-title">Nimbu ki Chutney</div>
            <a className="holidays-btn" href="https://youtu.be/s5b5OHgeXbY?si=mRnjqfdRNlVxl3bv" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Stuffed Chapati Roll.jpg"} 
              alt="Stuffed Chapati Roll Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Stuffed Chapati Roll.jpg")}
            />
            <div className="holidays-title">Stuffed Chapati Roll</div>
            <a className="holidays-btn" href="https://youtu.be/example1" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Stripped Samosa.jpg"} 
              alt="Stripped Samosa Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Stripped Samosa.jpg")}
            />
            <div className="holidays-title">Stripped Samosa</div>
            <a className="holidays-btn" href="https://youtu.be/example2" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Crispy Ring Samosa.jpg"} 
              alt="Crispy Ring Samosa Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Crispy Ring Samosa.jpg")}
            />
            <div className="holidays-title">Crispy Ring Samosa</div>
            <a className="holidays-btn" href="https://youtu.be/tVIQ5RH4CLU?si=Al8sUUorvW6uQonR" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Dalgona Coffee.jpg"} 
              alt="Dalgona Coffee Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Dalgona Coffee.jpg")}
            />
            <div className="holidays-title">Dalgona Coffee</div>
            <a className="holidays-btn" href="https://youtu.be/2y5eifjg080?si=rdyxxYwjT27uEON4" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Donuts.jpg"} 
              alt="Donuts Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Donuts.jpg")}
            />
            <div className="holidays-title">Donuts</div>
            <a className="holidays-btn" href="https://youtu.be/CTs_17EtAXo?si=6th8poVKQ1iHBwvD" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Papad Bhurji.jpg"} 
              alt="Papad Bhurji Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Papad Bhurji.jpg")}
            />
            <div className="holidays-title">Papad Bhurji</div>
            <a className="holidays-btn" href="https://youtu.be/khO7rGFrVn8?si=6wCPtGH5fg1ihvqP" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Pav Bhaji Pulao.jpg"} 
              alt="Pav Bhaji Pulao Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Pav Bhaji Pulao.jpg")}
            />
            <div className="holidays-title">Pav Bhaji Pulao</div>
            <a className="holidays-btn" href="https://youtu.be/ULAzRlmrpZQ?si=j6jF2aUwsnTo8O7J" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Bread Pizza.jpg"} 
              alt="Bread Pizza Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Bread Pizza.jpg")}
            />
            <div className="holidays-title">Bread Pizza</div>
            <a className="holidays-btn" href="https://youtu.be/example1" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Cake With Minimum Ingredients.jpg"} 
              alt="Cake Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Cake With Minimum Ingredients.jpg")}
            />
            <div className="holidays-title">Cake</div>
            <a className="holidays-btn" href="https://youtu.be/example2" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Paani Puri Golgappa.jpg"} 
              alt="Paani Puri Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Paani Puri Golgappa.jpg")}
            />
            <div className="holidays-title">Paani Puri</div>
            <a className="holidays-btn" href="https://youtu.be/example3" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Khandvi.jpg"} 
              alt="Khandvi Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Khandvi.jpg")}
            />
            <div className="holidays-title">Khandvi</div>
            <a className="holidays-btn" href="https://youtu.be/example4" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Chilli Paneer.jpg"} 
              alt="Chilli Paneer Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Chilli Paneer.jpg")}
            />
            <div className="holidays-title">Chilli Paneer</div>
            <a className="holidays-btn" href="https://youtu.be/example5" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
          </div>
          <div className="holidays-card">
            <img 
              className="holidays-img" 
              src={process.env.PUBLIC_URL + "/Momos.jpg"} 
              alt="Momos Recipe" 
              onClick={() => openImageModal(process.env.PUBLIC_URL + "/Momos.jpg")}
            />
            <div className="holidays-title">Momos</div>
            <a className="holidays-btn" href="https://youtu.be/example6" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
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

export default HolidaysSpecial;