import React, { useState } from 'react';
import '../App.css';
import './Popular.css';

function Popular() {
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
      <div className="popular-container">
        <div className="popular-heading">Popular Recipes</div>
        <div className="popular-grid">
        <div className="popular-card">
          <img 
            className="popular-img" 
            src={process.env.PUBLIC_URL + "/aam.jpg"} 
            alt="Aam Pak Recipe" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + '/aam.jpg')}
          />
          <div className="popular-title">Aam Pak</div>
          <a className="popular-btn" href="https://youtu.be/s2A9Z7DJh90?si=lOuAVZ22CHI9b0N6" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="popular-card">
          <img 
            className="popular-img" 
            src={process.env.PUBLIC_URL + "/till.jpg"} 
            alt="Til Laddu Recipe" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + '/till.jpg')}
          />
          <div className="popular-title">Til Laddu</div>
          <a className="popular-btn" href="https://youtu.be/_8iNpdXpnog?si=2SzFvoaHpdAqZjR9" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="popular-card">
          <img 
            className="popular-img" 
            src={process.env.PUBLIC_URL + "/kopra.jpg"} 
            alt="Kopra Barfi Recipe" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + '/kopra.jpg')}
          />
          <div className="popular-title">Kopra Barfi</div>
          <a className="popular-btn" href="https://youtu.be/pYz76-vCknw?si=r8EIk2w-4-EtzxWE" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="popular-card">
          <img 
            className="popular-img" 
            src={process.env.PUBLIC_URL + "/ghee.jpg"} 
            alt="Homemade Ghee Recipe" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + '/ghee.jpg')}
          />
          <div className="popular-title">Homemade Ghee</div>
          <a className="popular-btn" href="https://youtu.be/s5b5OHgeXbY?si=mRnjqfdRNlVxl3bv" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="popular-card">
          <img 
            className="popular-img" 
            src={process.env.PUBLIC_URL + "/Nimbu Ka Aachar.jpg"} 
            alt="Nimbu Ka Aachar Recipe" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + '/Nimbu Ka Aachar.jpg')}
          />
          <div className="popular-title">Nimbu Ka Aachar</div>
          <a className="popular-btn" href="https://youtu.be/example1" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="popular-card">
          <img 
            className="popular-img" 
            src={process.env.PUBLIC_URL + "/Hot Dog.jpg"} 
            alt="Hot Dog Recipe" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + '/Hot Dog.jpg')}
          />
          <div className="popular-title">Hot Dog</div>
          <a className="popular-btn" href="https://youtu.be/example2" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="popular-card">
          <img 
            className="popular-img" 
            src={process.env.PUBLIC_URL + "/Papad Bhurji.jpg"} 
            alt="Papad Bhurji Recipe" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + '/Papad Bhurji.jpg')}
          />
          <div className="popular-title">Papad Bhurji</div>
          <a className="popular-btn" href="https://youtu.be/khO7rGFrVn8?si=6wCPtGH5fg1ihvqP" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="popular-card">
          <img 
            className="popular-img" 
            src={process.env.PUBLIC_URL + "/Stripped Samosa.jpg"} 
            alt="Stripped Samosa Recipe" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + '/Stripped Samosa.jpg')}
          />
          <div className="popular-title">Stripped Samosa</div>
          <a className="popular-btn" href="https://youtu.be/example3" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="popular-card">
          <img 
            className="popular-img" 
            src={process.env.PUBLIC_URL + "/jaam ka aachar.jpg"} 
            alt="Jaam Ka Aachar Recipe" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + '/jaam ka aachar.jpg')}
          />
          <div className="popular-title">Jaam Ka Aachar</div>
          <a className="popular-btn" href="https://youtu.be/example4" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="popular-card">
          <img 
            className="popular-img" 
            src={process.env.PUBLIC_URL + "/Pudding.jpg"} 
            alt="Pudding Recipe" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + '/Pudding.jpg')}
          />
          <div className="popular-title">Pudding</div>
          <a className="popular-btn" href="https://youtu.be/example5" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="popular-card">
          <img 
            className="popular-img" 
            src={process.env.PUBLIC_URL + "/Namkeen Karele.jpg"} 
            alt="Namkeen Karele Recipe" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + '/Namkeen Karele.jpg')}
          />
          <div className="popular-title">Namkeen Karele</div>
          <a className="popular-btn" href="https://youtu.be/example6" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="popular-card">
          <img 
            className="popular-img" 
            src={process.env.PUBLIC_URL + "/Indori Sev k Sabji.jpg"} 
            alt="Indori Sev Recipe" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + '/Indori Sev k Sabji.jpg')}
          />
          <div className="popular-title">Indori Sev</div>
          <a className="popular-btn" href="https://youtu.be/example7" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="popular-card">
          <img 
            className="popular-img" 
            src={process.env.PUBLIC_URL + "/Bengali Sweet.jpg"} 
            alt="Bengali Sweet Recipe" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + '/Bengali Sweet.jpg')}
          />
          <div className="popular-title">Bengali Sweet</div>
          <a className="popular-btn" href="https://youtu.be/WmDGcUS2LBI?si=5LHqO336vrlhrs-Y" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="popular-card">
          <img 
            className="popular-img" 
            src={process.env.PUBLIC_URL + "/Papak Kone Starter.jpg"} 
            alt="Papad Cone Recipe" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + '/Papak Kone Starter.jpg')}
          />
          <div className="popular-title">Papad Cone</div>
          <a className="popular-btn" href="https://youtu.be/example8" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="popular-card">
          <img 
            className="popular-img" 
            src={process.env.PUBLIC_URL + "/Rava Patties.jpg"} 
            alt="Rava Patties Recipe" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + '/Rava Patties.jpg')}
          />
          <div className="popular-title">Rava Patties</div>
          <a className="popular-btn" href="https://youtu.be/kd2AwUKpUHI?si=iHTP-LtK284mAVDf" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        </div>
      </div>
      
      {/* Image Modal */}
      {isModalOpen && (
        <div className="image-modal active">
          <span className="close-modal" onClick={closeImageModal}>&times;</span>
          <img className="modal-content" src={modalImage} alt="Enlarged recipe" />
        </div>
      )}
    </div>
  );
}

export default Popular;