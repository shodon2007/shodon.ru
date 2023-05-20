import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel } from 'swiper';
import { EffectFade } from 'swiper';

import FirstScreen from './components/first-screen/FirstScreen.jsx';
import Test from './components/test/Test.jsx';

import 'swiper/scss';
import 'swiper/scss/effect-fade';
import './styles.scss'


const App = () => {
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
            >
                <SwiperSlide className='slide'><FirstScreen /></SwiperSlide>
                <SwiperSlide className='slide'><Test text={'slide 1'} /></SwiperSlide>
                <SwiperSlide className='slide'><Test text={'slide 2'} /></SwiperSlide>
                <SwiperSlide className='slide'><Test text={'slide 3'} /></SwiperSlide>
                <SwiperSlide className='slide'><Test text={'slide 4'} /></SwiperSlide>
                <SwiperSlide className='slide'><Test text={'slide 5'} /></SwiperSlide>
                <SwiperSlide className='slide'><Test text={'slide 6'} /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default App