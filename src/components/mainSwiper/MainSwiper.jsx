import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Mousewheel, Keyboard } from 'swiper';

const MainSwiper = (props) => {
    return (
        <Swiper
            className='swiper'
            direction='vertical'
            slidesPerView={1}
            effect={"fade"}
            speed={500}
            mousewheel={true}
            keyboard={{ enabled: true }}
            modules={[EffectFade, Mousewheel, Keyboard]}
            onSlideChange={(swiper) => {
                props.setSlide(swiper.activeIndex)
            }}
        >
            <SwiperSlide>
                {props.children[0]}
            </SwiperSlide>
            <SwiperSlide>
                {props.children[1]}
            </SwiperSlide>
        </Swiper>
    )
}

export default MainSwiper