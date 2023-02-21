import React from 'react';
import style from './Pкoject.module.scss'

type PropsType = {
    title: string
    description: string
    style: {backgroundImage:string}
    link:string
}


const Project = (props: PropsType) => {
    return (
        <div className={style.Project} >
            <div className={style.containerProject}>
                <div className={style.projectIMG} style={props.style}>
                    <div className={style.title}>
                        <a href={props.link} target="_blank">
                        details {props.title}
                        </a></div>
                </div>
            </div>

            <div className={style.projectDescription}>
                <h3 className={style.ProjectTittle}>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Project;