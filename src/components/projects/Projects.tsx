import React from 'react';
import style from './Projects.module.scss'
import Project from "./project/Project";
import social from '../../assets/projects/social-network2.jpeg'
import todoList from '../../assets/projects/to-do-list.jpeg'
import cards from '../../assets/projects/cards2.jpeg'
import {Slide} from "react-awesome-reveal";


const backgroundIMG = (urlIMG: string) => {
    return {
        backgroundImage: `url(${urlIMG})`,
    }

}

const Projects = () => {

    return (

        <div className={style.mainProjectsContainer} id="projects">
            <div className={style.containerProjects}>
                <Slide direction={"down"} triggerOnce={true}>
                    <h2>My projects</h2>
                </Slide>
                <Slide cascade={true} direction={"up"} triggerOnce={true}>
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
                </Slide>
            </div>
        </div>

    )
        ;
};

export default Projects;