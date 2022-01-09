import React from 'react';
import HeaderMenu from "../header/headerMenu/HeaderMenu";
import HeaderTolbar from '../header/headerTolbar/HeaderTolbar';
import Headerlogo from '../header/headerLogo/HeaderLogo';
import Footer from "../footer/Footer";

import styles from "./MainLayout.module.scss"

const Mainlayout = ({children}) => {
    return (
        <>
            <header className={styles.header__main}>
                <Headerlogo/>
                <HeaderMenu/>
                <HeaderTolbar/>
            </header>
                <main>
                    {children}
                </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Mainlayout;
