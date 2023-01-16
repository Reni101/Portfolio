import React from 'react';
import style from './Header.module.css'
import {Link} from "react-scroll";

const Header = () => {
    return (
        <div className={style.mainBlockHeader}>
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
        </div>
    );
};

export default Header;