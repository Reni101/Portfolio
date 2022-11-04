import React from 'react';
import style from './Header.module.css'
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <div className={style.Header}>
            <Navigation/>
        </div>
    );
};

export default Header;