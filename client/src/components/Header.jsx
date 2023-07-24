import React, { useState } from 'react'

import classes from './styles/Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../store/slice';
import Settings from './Settings';

const Header = () => {
    const lang = useSelector(state => state.lang);
    const dispatch = useDispatch();
    const [showSetting, setShowSettings] = useState(false);
    function langClick() {
        // dispatch(setLang())
        setShowSettings(!showSetting);
    }

    return (
        <div className={classes.main}>
            <a className={classes.link} href='https://shodon.ru'>shodon.ru</a>
            <button className={classes.lang} onClick={langClick}>
                setting
            </button>
            <Settings active={showSetting} />
        </div>
    )
}

export default Header