import React from 'react';
import style from './Projects.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={style.MainProjectsContainer}>
            <div className={style.flexContainer}>
                <h2>My projects</h2>
                <div className={style.Projects}>
                    <Project title={"Social-Network"} description={"bla bla bla bla bal"}/>
                    <Project title={"TodoList"} description={"bla bla bla bla bal"}/>
                    <Project title={"Cards"} description={"bla bla bla bla bal"}/>

                </div>
            </div>
        </div>
    );
};

export default Projects;