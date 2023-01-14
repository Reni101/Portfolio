import React from 'react';
import style from './Skill.module.css'
type PropsType = {
    title: string
    photo: string
}

const Skill = (props: PropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}><img src={props.photo} alt="skill"/></div>
            <h3>{props.title}</h3>
        </div>
    );
};

export default Skill;