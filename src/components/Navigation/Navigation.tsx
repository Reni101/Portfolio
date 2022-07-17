import React from 'react';
import style from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <a href="/it-incubator/Portfolio/public"> Main </a>
            <a href="/it-incubator/Portfolio/public"> Skills </a>
            <a href="/it-incubator/Portfolio/public"> Projects </a>
            <a href="/it-incubator/Portfolio/public"> Сontact information</a>
        </div>
    );
};

export default Navigation;