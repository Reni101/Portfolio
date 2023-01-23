import React, {useEffect} from 'react';
import style from './Main.module.scss'
// @ts-ignore
import videoBg from "../../assets/background-video.mp4"
import {Zoom} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import {Link} from "react-scroll";


const Main = () => {
    useEffect(() => {

    })

    return (
        <div className={style.mainBlock} id="main">
            <div className={style.flexBlock}>

                <div className={style.text}>
                    <h2>Hi, I'm a Maxim Dmitriev </h2>

                    <h1><ReactTypingEffect
                        text={["Frontend Developer."]}
                        speed={150}
                        typingDelay={1000}
                    />
                    </h1>
                    <h2> based in BELARUS. </h2>

                    <div className={style.btnWrapper}>
                        <Link to="projects"
                              className={style.btnLeft}
                              smooth={true}
                              spy={true}
                              activeClass={style.active}>
                            Vie my projects
                        </Link>

                        <a href="/" className={style.btnRight}>
                            download my cv
                        </a>

                    </div>
                </div>
                <Zoom duration={1500} triggerOnce={true}>
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