import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import styles from './Header.module.scss';
import { setLang } from '@/store/slice';

const Header = () => {
  let lang = useSelector(state => state.lang);
  let dispatch = useDispatch();

  function langClick() {
    dispatch(setLang())
  }

  return (
    <div className={styles.header}>
      <a className={styles.icon} href='https://shodon.ru'>shodon.ru</a>
      <div className={styles.lang} onClick={langClick}>{lang === 'ru' ? 'ру' : 'en'}</div>
    </div>
  )
}

export default Header