import React from 'react';
import Header from '../shared/Header';
import Chef from './Chef';
import ChefContainer from './ChefContainer';
import Trending from './Trending';

const Home = () => {
    return (
        <div className="py-5 px-5 md:px-28 space-y-14">
            <Header/>
            <ChefContainer/>
            <Trending/>
        </div>
    );
};

export default Home;