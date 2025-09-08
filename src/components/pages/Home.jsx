import React from 'react';
import Hero from '../homeComponents/Hero';
import FeaturedEvent from '../homeComponents/FeaturedEvent';
import Category from '../homeComponents/Category';

const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedEvent />
            <Category />
        </div>
    );
};

export default Home;