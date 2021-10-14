import React from 'react'
import Image from 'next/image'
import { Block, Link, Flex, Inline, Text } from 'vcc-ui';
import { CarProps } from '../../interfaces/Car';

const Car: React.FC<CarProps> = ({ id, modelName, bodyType, modelType, imageUrl }: CarProps) => {
    return (
        <Block>
            <Link href={`/learn/${id}`} aria-label={`Learn more about ${modelName}`}>
                <Block>
                    <Inline extend={{
                        color: "#707070",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 600,
                    }}>{bodyType}</Inline>
                    <Text as="h3">
                        <Inline extend={{
                            marginRight: "5px",
                            color: "#141414",
                            fontSize: "16px",
                            fontWeight: "bold",
                            textTransform: "capitalize"
                        }}>{modelName}</Inline>
                        <Inline extend={{
                            fontSize: "14px",
                            color: "#727272",
                            fontWeight: "normal",
                            textTransform: "lowercase"
                        }}>{modelType}</Inline>
                    </Text>
                </Block>
                <Block extend={{
                    position: 'relative',
                    paddingBottom: '75%',
                    margin: '10px 0'
                }}>
                    <Image src={imageUrl} alt={`${modelName} ${modelType}`} layout="fill"></Image>
                </Block>
            </Link>
            <Flex extend={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Link href={`/learn/${id}`} arrow="right" aria-label={`Learn more about ${modelName}`} style={{marginRight: 10}}>
                    Learn
                </Link>
                <Link href={`/shop/${id}`} arrow="right" aria-label={`Shop ${modelName}`}>
                    Shop
                </Link>
            </Flex>
        </Block>
    );
}

export default Car;
