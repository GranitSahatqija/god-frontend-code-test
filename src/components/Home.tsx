import React from "react";
import Carousel from "./Carousel";
import { Block } from 'vcc-ui';

const Home: React.FC = () => {
    return (
        <Block as="section" className={'container'}>
            <Carousel />
        </Block>
    );
};

export default Home;
