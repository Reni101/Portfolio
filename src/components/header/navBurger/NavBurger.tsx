import React, {useState} from 'react';
import style from './NavBurger.module.scss'
import {Link} from "react-scroll";
import CopyRight from '../../../assets/copyright.svg'
import menuBurger from '../../../assets/menu-burger.svg'
import closeMenu from '../../../assets/close.svg'


export const NavBurger = () => {

    let [isOpen, setIsOpen] = useState<boolean>(false)
    const editMenuHandler = () => {
        console.log(!isOpen)
        setIsOpen(!isOpen)
    }
    return (
        <div className={style.containerBurger}>

            <div className={isOpen ? `${style.Links} ${style.show}` : style.Links}>
                <Link to="main"
                      smooth={true}
                      onClick={editMenuHandler}
                      offset={-70}
                      spy={true}
                      activeClass={style.active}>
                    Home
                </Link>
                <Link to="skills"
                      onClick={editMenuHandler}
                      smooth={true}
                      spy={true}
                      activeClass={style.active}>
                    Skills
                </Link>
                <Link to="projects"
                      onClick={editMenuHandler}
                      smooth={true}
                      spy={true}
                      activeClass={style.active}>
                    Projects
                </Link>
                <Link to="contacts"
                      onClick={editMenuHandler}
                      smooth={true}
                      spy={true}
                      activeClass={style.active}>
                    Contact information
                </Link>
            </div>


            <img src={CopyRight} alt="" className={style.copyright}/>
            <div className={style.btn} onClick={editMenuHandler}>

                <img src={isOpen ? closeMenu : menuBurger} alt=""/>
            </div>
        </div>
    );
};

