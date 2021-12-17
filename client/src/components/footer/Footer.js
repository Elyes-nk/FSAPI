import React from 'react';
import Link from 'next/link'
import LogoImg from '../../../public/nike.jpeg'

const Footer = () => {
    return (
        <div className='footer__main'>
            <div className='footer__logo'>
                <img src={LogoImg} alt="Nike" />
            </div>
        </div>
    );
}

export default Footer;
