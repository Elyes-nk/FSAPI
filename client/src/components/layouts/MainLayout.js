import React from 'react';
import HeaderMenu from "../header/HeaderMenu";
import HeaderTolbar from '../header/HeaderTolbar';
import Headerlogo from '../header/HeaderLogo';

import Footer from "../footer/Footer";


const Mainlayout = ({children}) => {
    return (
        <>
            <Header className="header__main">
                <Headerlogo/>
                <HeaderMenu/>
                <HeaderTolbar/>
            </Header>
                <main>
                    {children}
                </main>
            <Footer />
        </>
    );
}

export default Mainlayout;
