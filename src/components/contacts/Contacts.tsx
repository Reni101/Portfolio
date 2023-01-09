import React from 'react';
import style from './Contacts.module.css'
import bgIMG from './../../assets/bgContancts.avif'

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
                    <button className={style.button}>Send message-</button>
                </form>


                <div className={style.linksContainer}>
                    <div className={style.text}>YOU CAN FIND ME HERE:</div>
                    <div className={style.links}>

                        <a href={'/'}>GitHub</a>
                        <a href={'/'}>E-mail</a>
                        <a href={'/'}>Telegram</a>
                        <a href={'/'}>LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;