import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import HeroSection from './components/HeroSection/heroSection';

function App() {
  return (
    <div>
      <div className='bg-hero-section'>
        <Nav/>
        <HeroSection/>
      </div>
    </div>
  );
}

export default App;
