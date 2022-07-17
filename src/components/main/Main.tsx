import React from 'react';
import style from './Main.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.flexBlock}>

                <div className={style.text}>
                    <span> Hello</span>
                    <h1> My name is Maxim Dmitriev</h1>
                    <p> I am Front-end developer </p>
                </div>
                <div className={style.photo}></div>
            </div>


        </div>
    );
};

export default Main;