import React from 'react'
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Block, Text, View, useTheme } from 'vcc-ui';

import cars from '../../public/api/cars.json';
import { Cars, CarProps } from '../../interfaces/Car';
import styles from '../../styles/Learn.module.css';

interface PageProps extends ParsedUrlQuery {
    id: string
}

const Learn = ({ id, modelName, bodyType, modelType, imageUrl }: CarProps) => {
    const theme = useTheme();
    return (
        <View className={'container'}>
            <Block className={styles.image__container}>
                <Image className={styles.image}  src={'/images/volvo-hq-demo-image.webp'} alt={`${modelName} ${modelType}`} layout="fill" objectFit="contain"/>
            </Block>
            <Block>
                <Text as="h1" extend={{
                    marginRight: "5px",
                    color: theme.color.foreground.primary,
                }} variant="cook">{modelName}</Text>
                <Text as="em" extend={{
                    color: theme.color.foreground.secondary,
                    fontStyle: "normal",
                    textTransform: "uppercase"
                }} variant="columbus">{modelType}</Text>
            </Block>
            <Block>
                <Text as="p" variant="columbus" extend={{color: theme.color.foreground.primary,}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci corporis mollitia dignissimos enim voluptatem. Excepturi dicta debitis harum obcaecati recusandae assumenda maiores dolores repudiandae, adipisci, esse perspiciatis quia cumque consectetur.</Text>
            </Block>
        </View>
    );
}

export const getStaticPaths: GetStaticPaths = () => {
    const allCars: Cars = cars;

    return {
        paths: allCars.map((car) => {
            return {
                params: { id: car.id },
            }
        }),
        fallback: false
    };
}

export const getStaticProps: GetStaticProps = (context) => {
    const allCars: Cars = cars;
    const { id } = context.params as PageProps
    const car: CarProps | undefined = allCars.find((car) => id === car.id)

    return { props: { ...car } }
}

export default Learn
