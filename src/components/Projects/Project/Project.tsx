import React from 'react';
import style from './Pкoject.module.css'

type PropsType = {
    title: string
    description: string
    style: {backgroundImage:string}
}


const Project = (props: PropsType) => {
    return (
        <div className={style.Project} >
            <div className={style.ProjectIMG} style={props.style}>
                <div className={style.ProjectLinkDiv}>
                    <a href={"https://reni101.github.io/it-incubator-todolist-ts/"}> details</a>
                </div>

            </div>

            <div className={style.ProjectDiscription}>
                <h3 className={style.ProjectTittle}>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Project;