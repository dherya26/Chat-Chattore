import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Popular from './pages/Popular';
import HealthyDiet from './pages/HealthyDiet';
import HolidaysSpecial from './pages/HolidaysSpecial';
import Sessions from './pages/Sessions';
import FAQ from './pages/FAQ';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div id="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/healthy-diet" element={<HealthyDiet />} />
          <Route path="/holidays-special" element={<HolidaysSpecial />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
