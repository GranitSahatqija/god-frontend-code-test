import React from 'react'
import cars from '../../public/api/cars.json';
import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Cars, CarProps } from '../../interfaces/Car';

interface PageProps extends ParsedUrlQuery {
    id: string
}

const Learn = ({ id, modelName, bodyType, modelType, imageUrl }: CarProps) => {
    return (
        <div className="container">
            <h3>{modelName}</h3>
        </div>
    )
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
