import React from 'react';
import Hero from '../homeComponents/Hero';
import FeaturedEvent from '../homeComponents/FeaturedEvent';
import Category from '../homeComponents/Category';
import RecentReview from '../homeComponents/RecentReview';

const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedEvent />
            <RecentReview />
            <Category />
        </div>
    );
};

export default Home;