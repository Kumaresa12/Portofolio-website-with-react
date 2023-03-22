import './HeroimgStyled.css';
import React from 'react';
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom';
function Heroimg() {
  return (
    <div className='hero'>
<div className='mask'>
<img className='into-img' src={IntroImg}alt='Introimg'/>
</div>
<div className='content'>
    <p>Hi,I'm a Freelancer.</p>
    <h1>React Developer.</h1>
    <div>
        <Link to='/project' className='btn'>
Project
        </Link>
        <Link to='/contact' className='btn btn-light'>
Contact
        </Link>
    </div>
</div>
    </div>
  )
}

export default Heroimg;