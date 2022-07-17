import React from 'react';
import style from './Skills.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.MainSkillBlock}>
            <div className={style.flexSkillContainer}>
                <h2 className={style.title}> My Skills</h2>
                <div className={style.skills}>
                    <Skill tittle ={"React"}
                           description={"React description"}
                    />
                    <Skill tittle ={"Java Script"}
                           description={"js description"}
                    />
                    <Skill tittle ={"CSS"}
                           description={"CSS description "}
                    />
                </div>

            </div>
        </div>
    );
};

export default Skills;