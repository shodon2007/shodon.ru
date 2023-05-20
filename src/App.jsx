import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Mousewheel } from 'swiper';

import FirstScreen from './components/first-screen/FirstScreen.jsx';
import Test from './components/test/Test.jsx';

import 'swiper/scss';
import 'swiper/scss/effect-fade';
import './styles.scss';
import Projects from './components/projects/Projects.jsx';


const App = () => {
    let [thisSlide, setThisSlide] = useState(0);
    return (
        <div className="app">
            <Swiper
                className='swiper'
                direction='vertical'
                slidesPerView={1}
                effect={"fade"}
                speed={500}
                mousewheel={true}
                modules={[EffectFade, Mousewheel]}
                onSlideChange={(swiper) => {
                    setThisSlide(swiper.activeIndex)
                }}
            >
                <SwiperSlide>
                    <FirstScreen active={thisSlide == 0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Projects />
                </SwiperSlide>
                <SwiperSlide>
                    <Test text={'slide 2'} active={thisSlide == 2} />
                </SwiperSlide>
                <SwiperSlide>
                    <Test text={'slide 3'} active={thisSlide == 3} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default App