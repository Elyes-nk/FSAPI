import Link from 'next/link'
import React from 'react'
import LogoImg from '../../../public/cart.jpeg'

import styles from './Header.module.scss'


const HeaderTolbar = () => {
    return (
            <div className={styles.topRight}>
                    <ul className={styles.topList}>
                        <li className={styles.topListItem}>
                            <Link href='/shop'>
                            <img 
                                className={styles.topImg}
                                src={LogoImg.src} alt="Nike" 
                            />
                            </Link>
                        </li>    
                    </ul>    
            </div>        
    )
}

export default HeaderTolbar
