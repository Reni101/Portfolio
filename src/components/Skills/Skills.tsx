import React from 'react';
import style from './Skills.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.MainSkillBlock}>
            <div className={style.flexSkillContainer}>
                <h2 > My Skills</h2>
                <div className={style.skills}>
                    <Skill title={"React"}
                           description={"React description bla bla bla bla bla bla bla bal"}
                    />
                    <Skill title={"Java Script"}
                           description={"js description bla bla bla bla bla bla bla bal"}
                    />
                    <Skill title={"CSS"}
                           description={"CSS description bla bla bla bla bla bla bla bal "}
                    />

                </div>

            </div>
        </div>
    );
};

export default Skills;