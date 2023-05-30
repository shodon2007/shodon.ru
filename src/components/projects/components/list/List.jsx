import React from 'react'

import styles from './List.module.scss'

const List = ({ category, appList }) => {
    return (
        <div className={styles.main}>
            {appList.filter(el => el.category == category).map(el => {
                return <div key={el.name} className={styles.item} style={{ backgroundImage: `url(${el.img})  ` }}>
                    <div className={styles.itemBody}>
                        {el.name}
                    </div>
                </div>
            })}
        </div>
    )
}

export default List