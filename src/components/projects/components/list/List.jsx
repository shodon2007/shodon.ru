import React from 'react'

import styles from './List.module.scss'

const List = ({ category, appList }) => {
    return (
        <div className={styles.main}>
            {appList.filter(el => el.category == category).map(el => {
                return <div key={el.name} className={styles.item} style={{ background: `url(${el.img}) rgb(230, 230, 230) center center / cover no-repeat ` }}>
                    <div className={styles.itemBody}>
                        {el.name}
                    </div>
                </div>
            })}
        </div>
    )
}

export default List