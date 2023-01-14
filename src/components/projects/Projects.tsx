import React from 'react';
import style from './Projects.module.scss'
import Project from "./project/Project";
import social from '../../assets/social-network2.jpeg'
import todoList from '../../assets/to-do-list.jpeg'
import cards from '../../assets/cards2.jpeg'


const backgroundIMG = (urlIMG: string) => {
    return {
        backgroundImage: `url(${urlIMG})`,
    }

}

const Projects = () => {

    return (
        <div className={style.mainProjectsContainer}>
            <div className={style.containerProjects}>
                <h2>My projects</h2>
                <div className={style.Projects}>
                    <Project title={"Cards"}
                             link={"https://github.com/Reni101/FridayProject"}
                             style={backgroundIMG(cards)}
                             description={"SPA for learning. Allows creating and editing your own card packs and cards. Using simple smart random for learning. Created by group of developers"}/>
                    <Project title={"Social-Network"}
                             link={"https://github.com/Reni101/samurai-way-TS"}
                             description={"Developers social network. Many features still in progress. But you can use base functions of any social network"}
                             style={backgroundIMG(social)}
                    />
                    <Project title={"TodoList"}
                             link={"https://github.com/Reni101/it-incubator-todolist-ts"}
                             style={backgroundIMG(todoList)}
                             description={"Complex project that using React-hooks, Redux, Axios and Rest API"}/>


                </div>
            </div>
        </div>
    );
};

export default Projects;