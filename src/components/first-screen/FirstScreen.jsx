import React from 'react'
import { useSelector } from 'react-redux';

import styles from './FirstScreen.module.scss';
import Svg from './svg/Svg.jsx';

const FirstScreen = ({ active }) => {
    let lang = useSelector(state => state.lang);
    let addStylesIfActive = ` ${active ? styles.active : ''}`;
    let titleText = lang === 'en' ? 'Frontend React Developer' : 'Фронтенд Реакт Разработчик';

    return (
        <div className={`${styles.main} ${addStylesIfActive}`}>
            <Svg active={active} />
            <h1 className={styles.title}>{titleText}</h1>
        </div>
    )
}

export default FirstScreen