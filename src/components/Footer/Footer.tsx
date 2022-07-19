import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.mainFooterBlock}>
            <div className={style.flexContainer}>
                <h2>Maxim Dmitriev</h2>
                <div className={style.socialContainer}>
                    <div className={style.box}>VK</div>
                    <div className={style.box}>F</div>
                    <div className={style.box}>Twitter</div>
                    <div className={style.box}>Youtube</div>
                </div>

            </div>
        </div>
    );
};


export default Footer;