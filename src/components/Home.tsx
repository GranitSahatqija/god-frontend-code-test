import React, { useState } from "react";
import Carousel from "./Carousel";
import { SelectInput, Flex, Spacer } from 'vcc-ui';
import data from '../../public/api/cars.json';
import { Cars } from '../../interfaces/Car';

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
        <Flex as="section" className={'container'}>
            <SelectInput value={filter} onChange={e => filterUpdated(e.target.value)} label={'Filter by body type'}>
                <option value="">All</option>
                {bodyTypes.map((bodyType: BodyTypeFilterProp) => <option key={bodyType.value} value={bodyType.value}>{bodyType.label}</option>)}
            </SelectInput>
            <Spacer size={4} />
            <Carousel cars={cars} />
        </Flex>
    );
};

export default Home;
