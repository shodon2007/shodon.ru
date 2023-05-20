import React from 'react'

import styles from './Test.module.scss'

const Test = ({ text }) => {
    return (
        <div className={styles.main}>{text}</div>
    )
}

export default Test