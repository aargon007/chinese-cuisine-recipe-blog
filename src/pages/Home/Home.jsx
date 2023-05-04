import React from 'react';
import Header from '../shared/Header';
import Chef from './Chef';
import ChefContainer from './ChefContainer';
import Trending from './Trending';
import Ebook from './Ebook';

const Home = () => {
    return (
        <div className="space-y-14 px-5 md:px-28 pb-5">
            <Header/>
            <ChefContainer/>
            <Trending/>
            <Ebook/>
        </div>
    );
};

export default Home;