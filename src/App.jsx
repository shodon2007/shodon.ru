import React, { useState } from 'react'

import FirstScreen from './components/first-screen/FirstScreen.jsx';
import Projects from './components/projects/Projects.jsx';
import MainSwiper from './components/mainSwiper/MainSwiper.jsx';

import 'swiper/scss';
import 'swiper/scss/effect-fade';
import './styles.scss';

const App = () => {
    let [thisSlide, setThisSlide] = useState(0);
    return (
        <div className="app">
            <MainSwiper setSlide={setThisSlide} >
                <FirstScreen active={thisSlide == 0} />
                <Projects active={thisSlide == 1} />
            </MainSwiper>
        </div>
    )
}

export default App