import React from 'react'
import styles from './Header.module.scss';
import text from 'Images/favicon.ico';

const Header = () => {
  return (
    <div className={styles.header}>
        <a className={styles.icon} href='https://shodon.ru'><img src={text} alt="text" /></a>
        <div className="translate"></div>
    </div>
  )
}

export default Header