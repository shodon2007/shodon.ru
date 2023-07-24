import React from 'react'
import classes from './Card.module.scss'

const Card = ({ app }) => {
    return (
        <div className={classes.card}>
            {app.name}
        </div>
    )
}

export default Card