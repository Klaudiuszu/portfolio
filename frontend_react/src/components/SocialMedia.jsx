import React from 'react'
import { BsLinkedin, BsGithub} from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <AiFillInstagram />
      </div>
    </div>
  )
}

export default SocialMedia