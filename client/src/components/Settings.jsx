import React from 'react'
import classes from './styles/Settings.module.scss';

const Settings = ({ active }) => {
    return (
        <div className={`${classes.settings} ${active ? classes.active : ''}`}>
            <div className={classes.body}>
                <div className={classes.select}>
                    <div className="start">Язык</div>
                    <select className={classes.options}>
                        <option value="ru">Русский</option>
                        <option value="en">Английский</option>
                    </select>
                </div>
                <div className={classes.select}>
                    <div className="start">Тема</div>
                    <select className={classes.options}>
                        <option value="white">Белый</option>
                        <option value="black">Черный</option>
                        <option value="aqua">Розовый</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Settings