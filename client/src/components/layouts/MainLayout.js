import React from 'react';
import HeaderMenu from "../header/HeaderMenu";
import HeaderTolbar from '../header/HeaderTolbar';
import Headerlogo from '../header/HeaderLogo';
import Footer from "../footer/Footer";

import styles from "./MainLayout.module.scss"

const Mainlayout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <Headerlogo/>
                <HeaderMenu/>
                <HeaderTolbar/>
            </header>
                <main className={styles.main}>
                    {children}
                </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Mainlayout;
