import React from 'react'
import Image from 'next/image'
import { Block, Link, Flex, Inline, Text, useTheme } from 'vcc-ui';
import { CarProps } from 'interfaces/Car';

const Car: React.FC<CarProps> = ({ id, modelName, bodyType, modelType, imageUrl }: CarProps) => {
    const theme = useTheme();
    return (
        <Block>
            <Block>
                <Block>
                    <Text as="em" data-testid="car body" aria-label="car body" subStyle="emphasis" extend={{
                        color: theme.color.foreground.secondary,
                        textTransform: "uppercase"
                    }}>{bodyType}</Text>
                    <Text as="h3">
                        <Inline data-testid="car model" aria-label="car model" extend={{
                            marginRight: "5px",
                            color: theme.color.foreground.primary,
                            fontSize: "18px",
                            fontWeight: "bold"
                        }}>{modelName}</Inline>
                        <Inline as="em" data-testid="car charge type" aria-label="car charge type" extend={{
                            fontSize: "16px",
                            color: theme.color.foreground.secondary,
                            fontStyle: "normal"
                        }}>{modelType}</Inline>
                    </Text>
                </Block>
                <Block extend={{
                    position: 'relative',
                    paddingBottom: '75%',
                    margin: '10px 0'
                }}>
                    <Image data-testid="car image" src={imageUrl} alt={`${modelName} ${modelType}`} layout="fill"></Image>
                </Block>
            </Block>
            <Flex extend={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Link href={`/learn/${id}`} arrow="right" data-testid="learn link" aria-label={`Learn more about ${modelName}`} style={{marginRight: 10}}>
                    Learn
                </Link>
                <Link href={`/shop/${id}`} arrow="right" data-testid="shop link" aria-label={`Shop ${modelName}`}>
                    Shop
                </Link>
            </Flex>
        </Block>
    );
}

export default Car;
