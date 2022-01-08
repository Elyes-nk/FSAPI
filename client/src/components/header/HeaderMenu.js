import React from 'react';
import Link from 'next/link'

import styles from './Header.module.scss'
const HeaderMenu = () => {
    return (
        <header className={styles.top}>
            <nav className={styles.topCenter}>
                <ul className={styles.topList}>
                    <li className={styles.topListItem}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className={styles.topListItem}>
                        <Link href="/shop">
                            <a>Shop</a>
                        </Link>
                    </li>
                    <li className={styles.topListItem}>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className={styles.topListItem}>
                        <Link href="/connect/login">
                            <a>Login</a>
                        </Link>
                    </li>
                    <li className={styles.topListItem}>
                        <Link href="/connect/register">
                            <a>Register</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderMenu;
