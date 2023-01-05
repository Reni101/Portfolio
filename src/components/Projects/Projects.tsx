import React from 'react';
import style from './Projects.module.css'
import Project from "./Project/Project";
import social from '../../assets/social-network2.jpeg'
import todoList from '../../assets/to-do-list.jpeg'
import cards from '../../assets/cards2.jpeg'


const backgroundIMG = (urlIMG:string) => {
    return { backgroundImage:`url(${urlIMG})`,
    }

}

const Projects = () => {

    return (
        <div className={style.MainProjectsContainer}>
            <div className={style.flexContainer} >
                <h2>My projects</h2>
                <div className={style.Projects}>
                    <Project title={"Social-Network"}
                             link={"https://github.com/Reni101/samurai-way-TS"}
                             description={"bla bla bla bla bal"}
                             style={backgroundIMG(social)}
                    />
                    <Project title={"TodoList"}
                             link={"https://github.com/Reni101/it-incubator-todolist-ts"}
                             style={backgroundIMG(todoList)}
                             description={"bla bla bla bla bal"}/>
                    <Project title={"Cards"}
                             link={"https://github.com/Reni101/FridayProject"}
                             style={backgroundIMG(cards)}
                             description={"bla bla bla bla bal"}/>

                </div>
            </div>
        </div>
    );
};

export default Projects;