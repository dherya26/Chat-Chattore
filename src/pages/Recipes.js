import React, { useState } from 'react';
import '../App.css';
import './Recipes.css';

function Recipes() {
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
      <div className="recipes-container">
        <div className="recipes-heading">Our YouTube Recipes</div>
        <div className="recipes-grid">
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/aam.jpg"} 
            alt="Aam Pak" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/aam.jpg")}
          />
          <div className="recipe-title">Aam Pak</div>
          <a className="recipe-btn" href="https://youtu.be/s2A9Z7DJh90?si=lOuAVZ22CHI9b0N6" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/till.jpg"} 
            alt="Til Laddu" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/till.jpg")}
          />
          <div className="recipe-title">Til Laddu</div>
          <a className="recipe-btn" href="https://youtu.be/_8iNpdXpnog?si=2SzFvoaHpdAqZjR9" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/kopra.jpg"} 
            alt="Kopra Barfi" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/kopra.jpg")}
          />
          <div className="recipe-title">Kopra Barfi</div>
          <a className="recipe-btn" href="https://youtu.be/pYz76-vCknw?si=r8EIk2w-4-EtzxWE" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/ghee.jpg"} 
            alt="Homemade Ghee" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/ghee.jpg")}
          />
          <div className="recipe-title">Homemade Ghee</div>
          <a className="recipe-btn" href="https://youtu.be/s5b5OHgeXbY?si=mRnjqfdRNlVxl3bv" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Healthy Sweet.jpg"} 
            alt="Healthy Sweet" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Healthy Sweet.jpg")}
          />
          <div className="recipe-title">Healthy Sweet</div>
          <a className="recipe-btn" href="https://youtu.be/XHPR7uGova8?si=YvFQ0QGLnHIBSPwK" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Bengali Sweet.jpg"} 
            alt="Bengali Sweet" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Bengali Sweet.jpg")}
          />
          <div className="recipe-title">Bengali Sweet</div>
          <a className="recipe-btn" href="https://youtu.be/WmDGcUS2LBI?si=5LHqO336vrlhrs-Y" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Chocolate Balls.jpg"} 
            alt="Chocolate Balls" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Chocolate Balls.jpg")}
          />
          <div className="recipe-title">Chocolate Balls</div>
          <a className="recipe-btn" href="https://youtu.be/2h_n1SEzsW8?si=Wwy4iH6UWvKwRUT4" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Donuts.jpg"} 
            alt="Donuts" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Donuts.jpg")}
          />
          <div className="recipe-title">Donuts</div>
          <a className="recipe-btn" href="https://youtu.be/CTs_17EtAXo?si=6th8poVKQ1iHBwvD" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Pav Bhaji Pulao.jpg"} 
            alt="Pav Bhaji Pulao" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Pav Bhaji Pulao.jpg")}
          />
          <div className="recipe-title">Pav Bhaji Pulao</div>
          <a className="recipe-btn" href="https://youtu.be/ULAzRlmrpZQ?si=j6jF2aUwsnTo8O7J" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Mango Rabdi.jpg"} 
            alt="Mango Rabdi" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Mango Rabdi.jpg")}
          />
          <div className="recipe-title">Mango Rabdi</div>
          <a className="recipe-btn" href="https://youtu.be/XWljBtxDdm4?si=PBqoFrKvM0kCE-1t" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Rava Pattiess.jpg"} 
            alt="Rava Pattiess" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Rava Pattiess.jpg")}
          />
          <div className="recipe-title">Rava Pattiess</div>
          <a className="recipe-btn" href="https://youtu.be/kd2AwUKpUHI?si=MxsWQgOSAcEa5-Nh" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Suji Breakfast.jpg"} 
            alt="Suji Breakfast" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Suji Breakfast.jpg")}
          />
          <div className="recipe-title">Suji Breakfast</div>
          <a className="recipe-btn" href="https://youtu.be/V2fxc3Oef7Q?si=yDrwhVVe0xbIlYnN" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Healthy Paan.jpg"} 
            alt="Healthy Paan" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Healthy Paan.jpg")}
          />
          <div className="recipe-title">Healthy Paan</div>
          <a className="recipe-btn" href="https://youtu.be/p9M1vovxbzc?si=acvjyv8DWCRCiapG" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Homemade Pav.jpg"} 
            alt="Homemade Pav" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Homemade Pav.jpg")}
          />
          <div className="recipe-title">Homemade Pav</div>
          <a className="recipe-btn" href="https://youtu.be/paopmb4hIms?si=tXkk1u6CAdq65Pdn" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Crispy Ring Samosa.jpg"} 
            alt="Crispy Ring Samosa" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Crispy Ring Samosa.jpg")}
          />
          <div className="recipe-title">Crispy Ring Samosa</div>
          <a className="recipe-btn" href="https://youtu.be/tVIQ5RH4CLU?si=Al8sUUorvW6uQonR" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Bread Roll.jpg"} 
            alt="Bread Roll" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Bread Roll.jpg")}
          />
          <div className="recipe-title">Bread Roll</div>
          <a className="recipe-btn" href="https://youtu.be/c70hNUWABzM?si=zM8YZ7ROxjNbSCjA" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Sandwich without bread.jpg"} 
            alt="Sandwich without bread" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Sandwich without bread.jpg")}
          />
          <div className="recipe-title">Sandwich without bread</div>
          <a className="recipe-btn" href="https://youtu.be/t8UFXiwwu2g?si=PjgiItX5uht3Zvol" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Dalgona Coffee.jpg"} 
            alt="Dalgona Coffee" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Dalgona Coffee.jpg")}
          />
          <div className="recipe-title">Dalgona Coffee</div>
          <a className="recipe-btn" href="https://youtu.be/2y5eifjg080?si=rdyxxYwjT27uEON4" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Papad Bhurji.jpg"} 
            alt="Papad Bhurji" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Papad Bhurji.jpg")}
          />
          <div className="recipe-title">Papad Bhurji</div>
          <a className="recipe-btn" href="https://youtu.be/khO7rGFrVn8?si=6wCPtGH5fg1ihvqP" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/jaam ka aachar.jpg"} 
            alt="jaam ka aachar" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/jaam ka aachar.jpg")}
          />
          <div className="recipe-title">jaam ka aachar</div>
          <a className="recipe-btn" href="https://youtu.be/0-k2K-vbqag?si=YIrjMiJUCsgPQ2tt" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Pudding.jpg"} 
            alt="Pudding" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Pudding.jpg")}
          />
          <div className="recipe-title">Pudding</div>
          <a className="recipe-btn" href="https://youtu.be/AdG8liClsB8?si=pPJhEC4eGaI1Mu_E" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Nimbu ki Chutney.jpg"} 
            alt="Nimbu ki Chutney" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Nimbu ki Chutney.jpg")}
          />
          <div className="recipe-title">Nimbu ki Chutney</div>
          <a className="recipe-btn" href="https://youtu.be/AOnBBuho6Hk?si=t-lHfuAaSBiGLPpS" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Rava Patties.jpg"} 
            alt="Rava Patties" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Rava Patties.jpg")}
          />
          <div className="recipe-title">Rava Patties</div>
          <a className="recipe-btn" href="https://youtu.be/kd2AwUKpUHI?si=iHTP-LtK284mAVDf" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Aloo Palak.jpg"} 
            alt="Aloo Palak" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Aloo Palak.jpg")}
          />
          <div className="recipe-title">Aloo Palak</div>
          <a className="recipe-btn" href="https://youtu.be/example1" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Bread Pizza.jpg"} 
            alt="Bread Pizza" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Bread Pizza.jpg")}
          />
          <div className="recipe-title">Bread Pizza</div>
          <a className="recipe-btn" href="https://youtu.be/example2" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Cake With Minimum Ingredients.jpg"} 
            alt="Cake With Minimum Ingredients" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Cake With Minimum Ingredients.jpg")}
          />
          <div className="recipe-title">Cake With Minimum Ingredients</div>
          <a className="recipe-btn" href="https://youtu.be/example3" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Crispy Corn.jpg"} 
            alt="Crispy Corn" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Crispy Corn.jpg")}
          />
          <div className="recipe-title">Crispy Corn</div>
          <a className="recipe-btn" href="https://youtu.be/example4" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Easiest Breakfast.jpg"} 
            alt="Easiest Breakfast" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Easiest Breakfast.jpg")}
          />
          <div className="recipe-title">Easiest Breakfast</div>
          <a className="recipe-btn" href="https://youtu.be/example5" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Hot Dog.jpg"} 
            alt="Hot Dog" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Hot Dog.jpg")}
          />
          <div className="recipe-title">Hot Dog</div>
          <a className="recipe-btn" href="https://youtu.be/example6" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Indori Sev k Sabji.jpg"} 
            alt="Indori Sev k Sabji" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Indori Sev k Sabji.jpg")}
          />
          <div className="recipe-title">Indori Sev k Sabji</div>
          <a className="recipe-btn" href="https://youtu.be/example7" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Khandvi.jpg"} 
            alt="Khandvi" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Khandvi.jpg")}
          />
          <div className="recipe-title">Khandvi</div>
          <a className="recipe-btn" href="https://youtu.be/example8" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Mithai Roll.jpg"} 
            alt="Mithai Roll" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Mithai Roll.jpg")}
          />
          <div className="recipe-title">Mithai Roll</div>
          <a className="recipe-btn" href="https://youtu.be/example9" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Namkeen Karele.jpg"} 
            alt="Namkeen Karele" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Namkeen Karele.jpg")}
          />
          <div className="recipe-title">Namkeen Karele</div>
          <a className="recipe-btn" href="https://youtu.be/example10" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Paani Puri Golgappa.jpg"} 
            alt="Paani Puri Golgappa" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Paani Puri Golgappa.jpg")}
          />
          <div className="recipe-title">Paani Puri Golgappa</div>
          <a className="recipe-btn" href="https://youtu.be/example11" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Papak Kone Starter.jpg"} 
            alt="Papak Kone Starter" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Papak Kone Starter.jpg")}
          />
          <div className="recipe-title">Papak Kone Starter</div>
          <a className="recipe-btn" href="https://youtu.be/example12" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Pastery with Bread.jpg"} 
            alt="Pastery with Bread" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Pastery with Bread.jpg")}
          />
          <div className="recipe-title">Pastery with Bread</div>
          <a className="recipe-btn" href="https://youtu.be/example13" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Rasmalai.jpg"} 
            alt="Rasmalai" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Rasmalai.jpg")}
          />
          <div className="recipe-title">Rasmalai</div>
          <a className="recipe-btn" href="https://youtu.be/example14" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Rave Ki Rasbhari Mithai.jpg"} 
            alt="Rave Ki Rasbhari Mithai" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Rave Ki Rasbhari Mithai.jpg")}
          />
          <div className="recipe-title">Rave Ki Rasbhari Mithai</div>
          <a className="recipe-btn" href="https://youtu.be/example15" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Stuffed Chapati Roll.jpg"} 
            alt="Stuffed Chapati Roll" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Stuffed Chapati Roll.jpg")}
          />
          <div className="recipe-title">Stuffed Chapati Roll</div>
          <a className="recipe-btn" href="https://youtu.be/example16" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Till Gud Chakki.jpg"} 
            alt="Till Gud Chakki" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Till Gud Chakki.jpg")}
          />
          <div className="recipe-title">Till Gud Chakki</div>
          <a className="recipe-btn" href="https://youtu.be/example17" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Till Kutta.jpg"} 
            alt="Till Kutta" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Till Kutta.jpg")}
          />
          <div className="recipe-title">Till Kutta</div>
          <a className="recipe-btn" href="https://youtu.be/example18" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Without Carry , Carry Chundha.jpg"} 
            alt="Without Carry , Carry Chundha" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Without Carry , Carry Chundha.jpg")}
          />
          <div className="recipe-title">Without Carry , Carry Chundha</div>
          <a className="recipe-btn" href="https://youtu.be/example19" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Bread Roll.jpg"} 
            alt="Bread Roll" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Bread Roll.jpg")}
          />
          <div className="recipe-title">Bread Roll</div>
          <a className="recipe-btn" href="https://youtu.be/example21" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Chapati Sandwich.jpg"} 
            alt="Chapati Sandwich" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Chapati Sandwich.jpg")}
          />
          <div className="recipe-title">Chapati Sandwich</div>
          <a className="recipe-btn" href="https://youtu.be/example22" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Chilli Paneer.jpg"} 
            alt="Chilli Paneer" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Chilli Paneer.jpg")}
          />
          <div className="recipe-title">Chilli Paneer</div>
          <a className="recipe-btn" href="https://youtu.be/example23" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Chocolate Cake With Dates.jpg"} 
            alt="Chocolate Cake With Dates" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Chocolate Cake With Dates.jpg")}
          />
          <div className="recipe-title">Chocolate Cake With Dates</div>
          <a className="recipe-btn" href="https://youtu.be/example24" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Crispy Ring Samosa.jpg"} 
            alt="Crispy Ring Samosa" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Crispy Ring Samosa.jpg")}
          />
          <div className="recipe-title">Crispy Ring Samosa</div>
          <a className="recipe-btn" href="https://youtu.be/example25" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Dalgona Coffee.jpg"} 
            alt="Dalgona Coffee" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Dalgona Coffee.jpg")}
          />
          <div className="recipe-title">Dalgona Coffee</div>
          <a className="recipe-btn" href="https://youtu.be/example26" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Healthy Paan.jpg"} 
            alt="Healthy Paan" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Healthy Paan.jpg")}
          />
          <div className="recipe-title">Healthy Paan</div>
          <a className="recipe-btn" href="https://youtu.be/example28" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Homemade Pav.jpg"} 
            alt="Homemade Pav" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Homemade Pav.jpg")}
          />
          <div className="recipe-title">Homemade Pav</div>
          <a className="recipe-btn" href="https://youtu.be/example30" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Kaju Sitafal mithai.jpg"} 
            alt="Kaju Sitafal Mithai" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Kaju Sitafal mithai.jpg")}
          />
          <div className="recipe-title">Kaju Sitafal Mithai</div>
          <a className="recipe-btn" href="https://youtu.be/example31" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Mithe Chawal,kesariya Bhaat.jpg"} 
            alt="Mithe Chawal, Kesariya Bhaat" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Mithe Chawal,kesariya Bhaat.jpg")}
          />
          <div className="recipe-title">Mithe Chawal, Kesariya Bhaat</div>
          <a className="recipe-btn" href="https://youtu.be/example33" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Momos.jpg"} 
            alt="Momos" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Momos.jpg")}
          />
          <div className="recipe-title">Momos</div>
          <a className="recipe-btn" href="https://youtu.be/example34" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Namkeen Farhali Peanuts.jpg"} 
            alt="Namkeen Farhali Peanuts" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Namkeen Farhali Peanuts.jpg")}
          />
          <div className="recipe-title">Namkeen Farhali Peanuts</div>
          <a className="recipe-btn" href="https://youtu.be/example35" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Nimbu Ka Aachar.jpg"} 
            alt="Nimbu Ka Aachar" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Nimbu Ka Aachar.jpg")}
          />
          <div className="recipe-title">Nimbu Ka Aachar</div>
          <a className="recipe-btn" href="https://youtu.be/example36" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Papad Bhurji.jpg"} 
            alt="Papad Bhurji" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Papad Bhurji.jpg")}
          />
          <div className="recipe-title">Papad Bhurji</div>
          <a className="recipe-btn" href="https://youtu.be/example37" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Pudding.jpg"} 
            alt="Pudding" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Pudding.jpg")}
          />
          <div className="recipe-title">Pudding</div>
          <a className="recipe-btn" href="https://youtu.be/example39" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Sandwich without bread.jpg"} 
            alt="Sandwich Without Bread" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Sandwich without bread.jpg")}
          />
          <div className="recipe-title">Sandwich Without Bread</div>
          <a className="recipe-btn" href="https://youtu.be/example41" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Stripped Samosa.jpg"} 
            alt="Stripped Samosa" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Stripped Samosa.jpg")}
          />
          <div className="recipe-title">Stripped Samosa</div>
          <a className="recipe-btn" href="https://youtu.be/example42" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
        </div>
        <div className="recipe-card">
          <img 
            className="recipe-img" 
            src={process.env.PUBLIC_URL + "/Without Milk Paneer.jpg"} 
            alt="Without Milk Paneer" 
            onClick={() => openImageModal(process.env.PUBLIC_URL + "/Without Milk Paneer.jpg")}
          />
          <div className="recipe-title">Without Milk Paneer</div>
          <a className="recipe-btn" href="https://youtu.be/example44" target="_blank" rel="noopener noreferrer">Watch Recipe</a>
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

export default Recipes;