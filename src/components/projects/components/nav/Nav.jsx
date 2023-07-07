import React from 'react'

import styles from './Nav.module.scss';
import { useSelector } from 'react-redux';

const Nav = ({ category, setCategory }) => {
    let lang = useSelector(state => state.lang);
    function activeButton(btn) {
        if (btn === category) {
            return styles.buttonActive;
        }

        return '';
    }
    const buttonList = [
        { ru: 'верстки', en: 'landing' },
        { ru: 'реакт', en: 'react' },
        { ru: 'javascript', en: 'javascript' },
    ]

    return (
        <div className={styles.main}>
            {
                buttonList.map(button =>
                    <input
                        type='button'
                        value={lang === 'ru' ? button.ru : button.en}
                        onClick={() => setCategory(button.en)}
                        className={`${activeButton(button.en)} ${styles.button}`}
                    />
                )
            }
        </div>
    )
}

export default Nav