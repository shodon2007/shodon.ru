import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import appList from './appList';
import Nav from './components/nav/Nav';
import List from './components/list/List';

import styles from './Projects.module.scss';


const Projects = ({ active }) => {
    let lang = useSelector(state => state.lang);
    let [category, setCategory] = useState('landing');
    let titleText = lang === 'ru' ? 'Проекты' : 'Projects';

    return (
        <div className={styles.main}>
            <div className={styles.title}>{titleText}</div>
            <Nav category={category} setCategory={setCategory} />
            <List category={category} appList={appList} />
        </div>
    )
}

export default Projects