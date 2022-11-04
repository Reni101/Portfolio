import React from 'react';
import style from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <div><a href="/it-incubator/Portfolio/public"> Main </a></div>
            <div><a href="/it-incubator/Portfolio/public"> Skills </a></div>
            <div><a href="/it-incubator/Portfolio/public"> Projects </a></div>
            <div><a href="/it-incubator/Portfolio/public"> Сontact information</a></div>


        </div>
    );
};

export default Navigation;