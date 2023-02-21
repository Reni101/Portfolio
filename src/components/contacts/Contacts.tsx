import React, {useRef} from 'react';
import style from './Contacts.module.scss'
import bgIMG from './../../assets/bgContancts.avif'
import gitHub from '../../assets/contacts/github.svg'
import eMail from '../../assets/contacts/e-mail.svg'
import telegram from '../../assets/contacts/telegram.svg'
import linkedIn from '../../assets/contacts/linkedin.svg'
import emailjs from '@emailjs/browser';
import {Slide} from "react-awesome-reveal";


const Contacts = () => {
    const form = useRef(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_3tovxmu', 'template_93b641n', form.current!, 'CkTA3Ybm1swCM8ge-')
            .then((result) => {
                // console.log(result.text);
                e.target.reset();
            }, (error) => {
                // console.log(error.text);
            });
    };
    return (

        <div className={style.mainContactsBox} id='contacts'>

            <img src={bgIMG} alt="contacts"/>

            <div className={style.containerContacts}>

                <Slide direction={"down"} triggerOnce={true}>
                    <h2>Contacts</h2>
                </Slide>
                <Slide cascade={true} direction={"up"} triggerOnce={true} className={style.Slide}>

                    <form className={style.ContactForm} ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder={"Your name"} name="user_name"/>
                        <input type="email" placeholder={"Your E-mail"} name="user_email"/>
                        <textarea placeholder={"Type your messages"} name="message"></textarea>
                        <input className={style.button} type="submit" value={"Send message"}/>
                    </form>


                    <div className={style.linksContainer}>
                        <div className={style.text}>YOU CAN FIND ME HERE:</div>
                        <div className={style.links}>

                            <a href={'https://github.com/Reni101'} target="_blank"><img src={gitHub} alt="gitHub"/></a>
                            <a href={'mailto: Renigano@gmail.com'} target="_blank"><img src={eMail} alt="E-mail"/> </a>
                            <a href={'https://t.me/Reni101/'} target="_blank"><img src={telegram} alt="Telegram"/> </a>
                            <a href={'https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B5%D0%B2-033001265/'}
                               target="_blank"><img src={linkedIn} alt="LinkedIn"/> </a>


                        </div>

                    </div>
                </Slide>
            </div>

        </div>


    );
};

export default Contacts;