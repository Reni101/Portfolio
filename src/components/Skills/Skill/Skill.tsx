import React from 'react';
import style from './Skill.module.css'

type PropsType = {
    tittle:string
    description:string
}

const Skill = (props:PropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>icon</div>
            <h3>{props.tittle}</h3>
            <div className={style.description}>{props.description}</div>
        </div>
    );
};

export default Skill;