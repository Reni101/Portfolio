import React from 'react';
import style from './Poject.module.css'

type PropsType = {
    title: string
    discription:string
}


const Project = (props: PropsType) => {
    return (
        <div className={style.Project}>
            <div className={style.ProjectIMG}>
                <div className={style.ProjectLinkDiv}>
                    <a href={"/"} > details</a>
                </div>

            </div>

            <div className={style.ProjectDiscription}>
                <h3 className={style.ProjectTittle}>{props.title}</h3>
                <p >{props.discription}</p>
            </div>
        </div>
    );
};

export default Project;