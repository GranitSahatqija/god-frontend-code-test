import React, { ReactNode } from 'react';
import Image from 'next/image'
import { Block, Flex, Inline, useTheme } from 'vcc-ui';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);
// Import Swiper styles
import 'swiper/swiper.min.css'

import styles from '../../../styles/Carousel.module.css';

interface CarouselProps {
    children?: ReactNode[]
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const theme = useTheme();

    return (
        <Swiper
            data-testid="carousel"
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
            pagination={{ clickable: true, bulletClass: styles.bullet,  bulletActiveClass: styles.bullet__active, el: '.pagination' }}
        >

            {children?.map((child, index: number) => <SwiperSlide key={index}>{child}</SwiperSlide>)}

            <Flex extend={{
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
    );
}

export default Carousel
