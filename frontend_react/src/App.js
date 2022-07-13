import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work, MapInfo, TextTramsform } from './container';
import { Navbar } from './components';
import './App.scss';

import useScrollSnap from 'react-use-scroll-snap';

const App = () => {
  
  return (
    <div className='app app-scroll-container'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <MapInfo />
      <Footer />
    </div>
  )
}

export default App;