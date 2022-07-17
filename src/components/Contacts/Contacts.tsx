import React from 'react';
import style from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={style.mainContactsBox}>
            <div className={style.flexContainer}>
                <h2>Contacts</h2>
                <div className={style.ContactForm}>
                    <form action="">
                        <input type="text"/>
                        <input type="text"/>
                        <textarea ></textarea>
                    </form>
                </div>
                <button className={style.button}>send</button>
            </div>
        </div>
    );
};

export default Contacts;