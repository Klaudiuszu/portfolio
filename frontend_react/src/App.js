import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work, MapInfo, TextTramsform } from './container';
import { Navbar } from './components';
import './App.scss';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header className='app-scrollSection' />
      <About className='app-scrollSection' />
      <Work className='app-scrollSection' />
      <Skills className='app-scrollSection'/>
      <Testimonial className='app-scrollSection' />
      <MapInfo className='app-scrollSection' />
      <Footer className='app-scrollSection' />
    </div>
  )
}

export default App;