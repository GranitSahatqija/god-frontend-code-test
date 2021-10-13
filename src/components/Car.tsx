import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Car.module.css';
import { Block, Link, Flex, Inline, Text } from 'vcc-ui';
import { CarProps } from '../../interfaces/Car';

const Car: React.FC<CarProps> = ({ id, modelName, bodyType, modelType, imageUrl }: CarProps) => {
    return (
        <Block>
            <Link href={`/learn/${id}`}>
                <Block>
                    <Inline as="em" className={styles.car__bodytype}>{bodyType}</Inline>
                    <Text as="h3" className={styles.car__type}>
                        <Inline className={styles.car__modelname}>{modelName}</Inline>
                        <Inline className={styles.car__modeltype}>{modelType}</Inline>
                    </Text>
                </Block>
                <Block className={styles.car__image}>
                    <Image src={imageUrl} alt={`${modelName} ${modelType}`} layout="fill" objectFit="contain"></Image>
                </Block>
            </Link>
            <Flex extend={{ flexDirection: 'row', justifyContent: 'center' }} className={styles.car__links}>
                <Link href={`/learn/${id}`} arrow="right">
                    Read more
                </Link>
                <Link href={`/shop/${id}`} arrow="right">
                    Shop
                </Link>
            </Flex>
        </Block>
    );
}

export default Car;
