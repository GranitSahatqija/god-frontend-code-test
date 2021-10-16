import React, { useState } from "react";
import Head from 'next/head'
import Carousel from "components/Carousel/Carousel";
import { SelectInput, Flex, Spacer, Block } from 'vcc-ui';
import data from '../../../public/api/cars.json';
import { Cars } from 'interfaces/Car';
import Car from "../Car/Car";

interface BodyTypeFilterProp {
    label: string;
    value: string;
}

const Home: React.FC = () => {
    const [cars, setCars] = useState<Cars>(data);
    const [filter, setFilter] = useState<string>('');

    const bodyTypes: Array<BodyTypeFilterProp> = data.map((car) => car.bodyType)
        .filter((type, idx, arr) => arr.indexOf(type) === idx)
        .map((bodyType) => {
            return {
                label: bodyType.toUpperCase(),
                value: bodyType
            }
        })

    const filterUpdated = (value: string) => {
        if (value === '') {
            setCars(data)
        } else {
            const filteredCars = data.filter((c) => c.bodyType === value)
            setCars(filteredCars)
        }
        setFilter(value)
    }

    return (
        <>
            <Head>
                <title>Volvo - Our latest and greatest recharge cars</title>
                <meta property="description" content="Our latest and greatest recharge cars" />
            </Head>
            <Flex as="section" className={'container'}>
                <SelectInput value={filter} onChange={e => filterUpdated(e.target.value)} label={'Filter by body type'} data-testid="filter">
                    <option value="">All</option>
                    {bodyTypes.map((bodyType) => <option key={bodyType.value} value={bodyType.value}>{bodyType.label}</option>)}
                </SelectInput>
                <Spacer size={4} />
                <Block>
                    <Carousel>
                        {cars.map((car) => <Car key={car.id} {...car} />)}
                    </Carousel>
                </Block>
            </Flex>
        </>
    );
};

export default Home;
