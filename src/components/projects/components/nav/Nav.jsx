import React from 'react'

import styles from './Nav.module.scss';

const Nav = ({ category, setCategory }) => {
    return (
        <div className={styles.main}>
            <input
                type='button'
                value={'landing'}
                onClick={() => setCategory('landing')}
                className={(category == 'landing' ? styles.buttonActive : null) + ' ' + (styles.button)}
            />
            <input
                type='button'
                value={'react'}
                onClick={() => setCategory('react')}
                className={(category == 'react' ? styles.buttonActive : null) + ' ' + (styles.button)}
            />
            <input
                type='button'
                value={'javascript'}
                onClick={() => setCategory('javascript')}
                className={(category == 'javascript' ? styles.buttonActive : null) + ' ' + (styles.button)}
            />
        </div>
    )
}

export default Nav