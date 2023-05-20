import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Mousewheel } from 'swiper';

import FirstScreen from './components/first-screen/FirstScreen.jsx';
import Test from './components/test/Test.jsx';

import 'swiper/scss';
import 'swiper/scss/effect-fade';
import './styles.scss'


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
                <SwiperSlide className='slide'><FirstScreen active={thisSlide == 0} /></SwiperSlide>
                <SwiperSlide className='slide'><Test text={'slide 1'} active={thisSlide == 1} /></SwiperSlide>
                <SwiperSlide className='slide'><Test text={'slide 2'} active={thisSlide == 2} /></SwiperSlide>
                <SwiperSlide className='slide'><Test text={'slide 3'} active={thisSlide == 3} /></SwiperSlide>
                <SwiperSlide className='slide'><Test text={'slide 4'} active={thisSlide == 4} /></SwiperSlide>
                <SwiperSlide className='slide'><Test text={'slide 5'} active={thisSlide == 5} /></SwiperSlide>
                <SwiperSlide className='slide'><Test text={'slide 6'} active={thisSlide == 6} /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default App