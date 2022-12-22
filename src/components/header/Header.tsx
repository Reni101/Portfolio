import React from 'react';
import style from './Header.module.scss'


const Header = () => {
    return (
        <div className={style.Header}>
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