import React from 'react';
import LogoImg from '../../../public/apple.png'


import styles from './Header.module.scss'

const Headerlogo = () => {
    return (
        <div className="topLeft">
            <div className={styles.topLeft} >
                <img 
                    className={styles.topImg}
                    src={LogoImg.src} alt="Nike" 
                />
            </div>
        </div>
    );
};

export default Headerlogo;
