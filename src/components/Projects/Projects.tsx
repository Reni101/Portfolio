import React from 'react';
import style from './Projects.module.css'
import Project from "./Project/Project";
import social from '../../assets/social-network.webp'
import todoList from '../../assets/to-do-list.jpeg'
import cards from '../../assets/cards2.jpeg'


const backgroundIMG = (urlIMG:string) => {
    return { backgroundImage:`url(${urlIMG})`,}

}
const Projects = () => {



    return (
        <div className={style.MainProjectsContainer}>
            <div className={style.flexContainer}>
                <h2>My projects</h2>
                <div className={style.Projects}>
                    <Project title={"Social-Network"}
                             description={"bla bla bla bla bal"}
                             style={backgroundIMG(social)}
                    />
                    <Project title={"TodoList"}
                             style={backgroundIMG(todoList)}
                             description={"bla bla bla bla bal"}/>
                    <Project title={"Cards"}
                             style={backgroundIMG(cards)}
                             description={"bla bla bla bla bal"}/>

                </div>
            </div>
        </div>
    );
};

export default Projects;