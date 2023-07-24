import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch } from 'react-redux';
import { EffectFade, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/effect-fade';


import { changePage } from '../store/slice';

const Swiping = ({ children }) => {
    const dispatch = useDispatch();
    const swiperProps = {
        className: 'swiper',
        direction: 'vertical',
        slidesPerView: 1,
        effect: "fade",
        speed: 500,
        mousewheel: true,
        keyboard: { enabled: true },
        modules: [EffectFade, Mousewheel, Keyboard],
        onSlideChange: (swiper) => {
            dispatch(changePage(swiper.activeIndex));
        },
    }

    return (
        <Swiper {...swiperProps}>
            {children.map((page, index) => {
                return <SwiperSlide key={index} >
                    {page}
                </SwiperSlide>
            })}
        </Swiper>
    )
}

export default Swiping