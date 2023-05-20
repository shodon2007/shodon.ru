import React, { useState } from 'react'

import appList from './appList';
import Nav from './components/nav/Nav';
import List from './components/list/List';
const Projects = () => {
    let [category, setCategory] = useState('landing');
    return (
        <div className='main'>
            <div className="title">Projects</div>
            <Nav category={category} setCategory={setCategory} />
            <List category={category} appList={appList} />
        </div>
    )
}

export default Projects