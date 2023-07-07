import React from 'react'
import { useSelector } from 'react-redux';

import styles from './List.module.scss'

const List = ({ category, appList }) => {
    let lang = useSelector(state => state.lang);
    let filteredAppList = appList.filter(app => app.category === category);

    return (
        <div className={styles.main}>
            {filteredAppList.map(app => {
                return <div key={app.name} className={styles.item} style={{ backgroundImage: `url(${app.img})` }}>
                    <div className={styles.itemBody}>
                        <div className={styles.name}>{app.name}</div>
                        <div className={styles.links}>
                            <a href={app.link} className={styles.link}>{lang === 'en' ? 'online' : 'онлайн'}</a>
                            <a href={app.github} className={styles.link} id='github'>{lang === 'en' ? 'github' : 'гитхаб'}</a>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default List