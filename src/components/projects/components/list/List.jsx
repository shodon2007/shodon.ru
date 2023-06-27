import React from 'react'

import styles from './List.module.scss'

const List = ({ category, appList }) => {
    return (
        <div className={styles.main}>
            {appList.filter(el => el.category == category).map(el => {
                return <div key={el.name} className={styles.item} style={{ backgroundImage: `url(${el.img})  ` }}>
                    <div className={styles.itemBody}>
                        <div className={styles.name}>{el.name}</div>
                        <div className={styles.links}>
                            <a href={el.link} className={styles.link}>online</a>
                            <a href={el.github} className={styles.link} id='github'>github</a>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default List