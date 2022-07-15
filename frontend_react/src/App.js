import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work, MapInfo } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  
  return (
    <div className='app'>
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