import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import Car from './Car';
import { Cars, CarProps } from '../../interfaces/Car';

import data from '../../public/api/cars.json';

const Carousel: React.FC = () => {
    const cars: Cars = data;

    return (
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
            {cars.map((car: CarProps) => <SwiperSlide key={car.id}><Car {...car} /></SwiperSlide>)}
        </Swiper>
    );
}

export default Carousel
