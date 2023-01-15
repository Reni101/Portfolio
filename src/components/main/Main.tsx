import React from 'react';
import style from './Main.module.scss'
// @ts-ignore
import videoBg from "../../assets/background-video.mp4"
import {Zoom} from "react-awesome-reveal";


const Main = () => {


    return (
        <div className={style.mainBlock}>
            <div className={style.flexBlock}>

                    <div className={style.text}>
                        <h2>Hi, I'm a Maxim Dmitriev </h2>
                        <h1> Frontend Developer. </h1>
                        <h2> based in BELARUS. </h2>

                        <div className={style.btnWrapper}>
                            <a href="/" className={style.btnLeft}>
                                View My works
                            </a>

                            <a href="/" className={style.btnRight}>
                                download my cv
                            </a>

                        </div>
                    </div>
                <Zoom duration={1500} triggerOnce={true} >
                    <div className={style.rounded}>
                        <div className={style.photo}></div>
                    </div>
                </Zoom>
                <video src={videoBg} muted autoPlay loop></video>

            </div>

        </div>
    );
};

export default Main;