import React from 'react';
import style from './Projects.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={style.MainProjectsContainer}>
            <div className={style.flexContainer}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.Projects}>
                    <Project title={"Social-Network"} discription={"bla bla bla bla bal"}/>
                    <Project  title={"TodoList"}  discription={"bla bla bla bla bal"}/>

                </div>
            </div>
        </div>
    );
};

export default Projects;