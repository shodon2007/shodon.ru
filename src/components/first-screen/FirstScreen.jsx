import React from 'react'
import TitleSvg from './TitleSvg.jsx';

import styles from './FirstScreen.module.scss';

const FirstScreen = () => {
    return (
        <div className={styles.main}>
            <TitleSvg />
            <h1 className={styles.title}>Frontend React Developer</h1>
        </div>
    )
}

export default FirstScreen