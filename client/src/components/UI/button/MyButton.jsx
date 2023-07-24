import React from 'react'
import classes from './MyButton.module.scss';

const MyButton = ({ children, active, ...props }) => {
    return (
        <button className={`${classes.button} ${active ? classes.active : ''}`} {...props}>{children}</button>
    )
}

export default MyButton