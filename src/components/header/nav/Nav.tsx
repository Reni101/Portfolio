import React from 'react';
import style from './Nav.module.scss'
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={style.container}>
            <Link to="main"
                  smooth={true}
                  offset={-70}
                  spy={true}
                  activeClass={style.active}>
                Home
            </Link>
            <Link to="skills"
                  smooth={true}
                  spy={true}
                  activeClass={style.active}>
                Skills
            </Link>
            <Link to="projects"
                  smooth={true}
                  spy={true}
                  activeClass={style.active}>
                Projects
            </Link>
            <Link to="contacts"
                  smooth={true}
                  spy={true}
                  activeClass={style.active}>
                Contact information
            </Link>

        </div>
    );
};

