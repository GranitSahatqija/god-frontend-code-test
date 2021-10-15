import React from 'react';
import Image from 'next/image'
import { Block, Flex, Inline, useTheme } from 'vcc-ui';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from 'styles/Carousel.module.css';
import Car from 'components/Car/Car';
import { Cars, CarProps } from 'interfaces/Car';

interface CarouselProps {
    cars: Cars
}

const Carousel: React.FC<CarouselProps> = ({ cars }) => {
    const items: Cars = cars;
    const theme = useTheme();

    return (
        <Block>
            <Swiper
                style={{
                    paddingBottom: "50px"
                }}
                spaceBetween={10}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1.2
                    },
                    // when window width is >= 640px
                    480: {
                        slidesPerView: 1.8
                    },
                    768: {
                        slidesPerView: 2.7
                    },
                    1024: {
                        slidesPerView: 4
                    },
                }}
                navigation={{
                    nextEl: `.arrow-next`,
                    prevEl: `.arrow-prev`
                }}
                pagination={{ clickable: true, bulletActiveClass: styles.active__bullet, el: '.pagination' }}
                modules={[Navigation, Pagination]}
            >
                {items.map((car: CarProps) => <SwiperSlide key={car.id}><Car {...car} /></SwiperSlide>)}
                <Flex className={styles.carousel__controls} extend={{
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                    [theme.breakpoints.untilL]: {
                        display: 'none'
                    }
                }}>
                    <Inline as="button" className={`${styles.custom__prev} arrow-prev`} aria-label="prev-slide">
                        <Image src="/icons/chevron-circled.svg" alt="prev-slide" width="35" height="35" />
                    </Inline>
                    <Inline as="button" className={`${styles.custom__next} arrow-next`} aria-label="next-slide">
                        <Image src="/icons/chevron-circled.svg" alt="next-slide" width="35" height="35" />
                    </Inline>
                </Flex>
                <Flex extend={{
                    textAlign: 'center',
                    [theme.breakpoints.fromL]: {
                        display: 'none'
                    }
                }}>
                    <Block className={'pagination'}></Block>
                </Flex>
            </Swiper>
        </Block>
    );
}

export default Carousel
