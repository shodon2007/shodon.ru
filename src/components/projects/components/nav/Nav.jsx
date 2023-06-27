import React from 'react'

import styles from './Nav.module.scss';
import { useSelector } from 'react-redux';

const Nav = ({ category, setCategory }) => {
    let lang = useSelector(state => state.lang);
    return (
        <div className={styles.main}>
            <input
                type='button'
                value={lang === 'ru' ? 'верстки' : 'landing'}
                onClick={() => setCategory('landing')}
                className={(category == 'landing' ? styles.buttonActive : null) + ' ' + (styles.button)}
            />
            <input
                type='button'
                value={lang === 'ru' ? 'реакт' : 'react'}
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