import React, { useState } from 'react'
import styles from './Header.module.scss';
import text from 'Images/favicon.ico';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../../store/slice';

const Header = () => {
  let lang = useSelector(state => state.lang);
  let dispatch = useDispatch();
  function langClick() {
    dispatch(setLang())
  }
  return (
  <div className={styles.header}>
    <a className={styles.icon} href='https://shodon.ru'>shodon.ru</a>
    <div className={styles.icon} onClick={langClick}>{lang}</div>
  </div> 
  )
}

export default Header