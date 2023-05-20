import React from 'react'

import styles from './Test.module.scss'

const Test = ({ text, active }) => {
    return (
        <div className={styles.main + ' ' + (active ? styles.active : null)}>{text}</div>
    )
}

export default Test