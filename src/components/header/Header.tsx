import React from 'react';
import style from './Header.module.css'


const Header = () => {
    return (
        <div className={style.mainBlockHeader}>
                <div className={style.container}>
                    <a href="/"> Home </a>
                    <a href="/"> Skills </a>
                    <a href="/"> Projects </a>
                    <a href="/"> Contact information</a>
                </div>
        </div>
    );
};

export default Header;