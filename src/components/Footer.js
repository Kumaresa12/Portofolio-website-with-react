import React from 'react'
import './FooterStyle.css'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
<div className='footer-container'>
    <div className='left'>
<div className='location'>
    <FaHome size={20} style={{color: '#fff', marginRight:'2rem'}} />
    <div>
        <p>123 Sk society.</p>
        <p>India.</p>
    </div>
</div>
<div className='phone'>
    <h4><FaPhone size={20} style={{color: '#fff', marginRight:'2rem'}} /> 1234567890</h4>
</div>
<div className='email'>
    <h4><FaMailBulk size={20} style={{color: '#fff', marginRight:'2rem'}} /> imamailid@gmail.com</h4>
</div>
    </div>
    <div className='right'>
<h4>
    About the company
</h4>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
<div className='social'>
<FaFacebook size={30} style={{color: '#fff', marginRight:'1rem'}} />
<FaTwitter size={30} style={{color: '#fff', marginRight:'1rem'}} />
<FaLinkedin size={30} style={{color: '#fff', marginRight:'1rem'}} />
</div>
    </div>
     </div>

        </div>
    )
}

export default Footer