import React from 'react';
import style from './Header.module.scss'
import {Nav} from "./nav/Nav";
import {NavBurger} from "./navBurger/NavBurger";

const Header = () => {
    return (
        <div className={style.mainBlockHeader}>
            <Nav/>
            <NavBurger/>
        </div>
    );
};

export default Header;