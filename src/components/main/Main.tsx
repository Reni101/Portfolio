import React from 'react';
import style from './Main.module.css'


const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.flexBlock}>

                <div className={style.text}>
                    <h1>Hi, I'm a Front-end developer </h1>
                    <h2> My name is Maxim Dmitriev </h2>

                    <div className={style.btnWrapper}>
                        <a href="" className={style.btnLeft}>
                            View My works
                        </a>

                        <a href="" className={style.btnRight}> Contact me </a>

                    </div>
                </div>
                <div className={style.rounded}>
                    <div className={style.photo}></div>
                </div>

            </div>


        </div>
    );
};

export default Main;