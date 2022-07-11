import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <a href='https://github.com/Klaudiuszu' >
      <div>
        <BsGithub/>
      </div>
    </a>
    <a href='https://www.linkedin.com/in/klaudiusz-pupiec-710047206/' >
      <div>
        <BsLinkedin/>
      </div>
    </a>
    
  
  </div>
);

export default SocialMedia;