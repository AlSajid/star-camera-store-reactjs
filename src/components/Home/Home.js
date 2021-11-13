import React from 'react';
import Extra1 from '../Extra1/Extra1';
import Products from '../Products/Products';
import Banner from './Banner/Banner';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products cut={true}></Products>
            <Reviews></Reviews>
            <Extra1></Extra1>
        </div>
    );
};

export default Home;