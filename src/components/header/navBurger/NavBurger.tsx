import React, {useState} from 'react';
import style from './NavBurger.module.scss'
import {Link} from "react-scroll";
import PortfolioSVG from '../../../assets/header/portfolio.svg'
import menuBurger from '../../../assets/header/menu-burger.svg'
import closeMenu from '../../../assets/header/close.svg'


export const NavBurger = () => {

    let [isOpen, setIsOpen] = useState<boolean>(false)
    const editMenuHandler = () => {
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


            <a href="/"> <img src={PortfolioSVG} alt="" className={style.portfolioSVG}/></a>
            <div className={style.btn} onClick={editMenuHandler}>

                <img src={isOpen ? closeMenu : menuBurger} alt=""/>
            </div>
        </div>
    );
};

