import React from 'react'
import classes from './MyTitle.module.scss'


const MyTitle = ({ children }) => {
    return (
        <h1 className={classes.title}>{children}</h1>
    )
}

export default MyTitle