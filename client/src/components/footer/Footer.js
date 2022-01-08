import React from 'react';
import Link from 'next/link'
import LogoImg from '../../../public/nike.jpeg'

import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className='footer__logo'>
                <img 
                    className={styles.bottomImg}
                    src={LogoImg.src} alt="Nike" 
                />
            </div>
        </div>
    );
}

export default Footer;
