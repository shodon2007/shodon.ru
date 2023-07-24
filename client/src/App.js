import React from 'react'

import Header from './components/Header'
import Swiping from './components/Swiping'
import FirstScreen from './components/FirstScreen'

import './index.scss';
import Projects from './components/Projects';


const App = () => {
    return (
        <div className='app'>
            <Header />
            <Swiping>
                <FirstScreen />
                <Projects />
            </Swiping>
        </div>
    )
}

export default App