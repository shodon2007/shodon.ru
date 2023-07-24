import React from 'react'

import classes from './styles/FirstScreen.module.scss';
import LogoSvg from './LogoSvg';
import MyTitle from './UI/title/MyTitle';
import { useSelector } from 'react-redux';

const FirstScreen = () => {
    const activePage = useSelector(state => state.activePage);
    const lang = useSelector(state => state.lang);
    const activatePage = activePage === 0 ? '' : classes.active;
    return (
        <div className={`${classes.main} ${activatePage}`}>
            <LogoSvg active={activePage === 0} />
            <MyTitle>
                {lang === 'ru'
                    ? 'Фронтент реакт разработчик'
                    : 'Frontend react developer'}
            </MyTitle>
        </div>
    )
}

export default FirstScreen