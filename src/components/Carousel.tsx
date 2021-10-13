import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export const Carousel: React.FC = ({}) => {
    return (
        <div>
            <Swiper
                spaceBetween={10}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1.5
                    },
                    // when window width is >= 640px
                    550: {
                      slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 4
                    }
                }}
            >
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
                <SwiperSlide>4</SwiperSlide>
            </Swiper>
        </div>
    );
}