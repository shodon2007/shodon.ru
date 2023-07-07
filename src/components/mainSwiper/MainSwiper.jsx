import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Mousewheel, Keyboard } from 'swiper';

const MainSwiper = ({ children, setSlide }) => {
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
            setSlide(swiper.activeIndex);
        }
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

export default MainSwiper