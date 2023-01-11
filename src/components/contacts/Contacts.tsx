import React from 'react';
import style from './Contacts.module.css'
import bgIMG from './../../assets/bgContancts.avif'
import gitHub from '../../assets/contacts/github.svg'
import eMail from '../../assets/contacts/e-mail.svg'
import telegram from '../../assets/contacts/telegram.svg'
import linkedIn from '../../assets/contacts/linkedin.svg'


const Contacts = () => {
    return (
        <div className={style.mainContactsBox}>

            <img src={bgIMG} alt="contacts"/>
            <div className={style.containerContacts}>
                <h2>Contacts</h2>
                <form action="" className={style.ContactForm}>
                    <input type="text" placeholder={"Your name"}/>
                    <input type="text" placeholder={"Your E-mail"}/>
                    <textarea placeholder={"Type your messages"}></textarea>
                    <button className={style.button}>Send message</button>
                </form>


                <div className={style.linksContainer}>
                    <div className={style.text}>YOU CAN FIND ME HERE:</div>
                    <div className={style.links}>

                        <a href={'https://github.com/Reni101'} target="_blank"><img src={gitHub} alt="gitHub"/></a>
                        <a href={'mailto: Renigano@gmail.com'} target="_blank"><img src={eMail} alt="E-mail"/> </a>
                        <a href={'https://t.me/Reni101/'} target="_blank"><img src={telegram} alt="Telegram"/> </a>
                        <a href={'/'} target="_blank"><img src={linkedIn} alt="LinkedIn"/> </a>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;