import React from 'react';
import style from './Skills.module.css'
import Skill from "./Skill/Skill";
import html from '../../assets/skills/html.svg'
import css from '../../assets/skills/css.svg'
import Scss from '../../assets/skills/Scss.svg'
import MUI from '../../assets/skills/MUI.png'
import JS from '../../assets/skills/javaScript.svg'
import TS from '../../assets/skills/typeScript.svg'
import react from '../../assets/skills/react.svg'
import reduxT from '../../assets/skills/reduxToolkit.svg'
import formik from '../../assets/skills/formik.svg'
import unitT from '../../assets/skills/unitTest.svg'
import webS from '../../assets/skills/webSocket.svg'


const Skills = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <h2> My Skills</h2>
                <div className={style.skills}>
                    <Skill title={"HTML"} photo={html}/>
                    <Skill title={"CSS"} photo={css}/>
                    <Skill title={"Sass/Scss"} photo={Scss}/>
                    <Skill title={"Material ui"} photo={MUI}/>
                    <Skill title={"Java Script"} photo={JS}/>
                    <Skill title={"Type script"} photo={TS}/>
                    <Skill title={"React"} photo={react}/>
                    <Skill title={"Redux-Toolkit"} photo={reduxT}/>
                    <Skill title={"Formik"} photo={formik}/>
                    <Skill title={"Unit Test"} photo={unitT}/>
                    <Skill title={"WebSocket"} photo={webS}/>
                    {/*<Skill title={"Angular"}/>*/}
                    {/*<Skill title={"React Native"}/>*/}
                    {/*<Skill title={"Node Js"}/>*/}


                </div>

            </div>
        </div>
    );
};

export default Skills;