import React from 'react';
import style from './RemoteJob.module.css'

const RemoteJob = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <h2>looking for a remote job</h2>
                <button className={style.button}> Details</button>

            </div>

        </div>
    );
};

export default RemoteJob;