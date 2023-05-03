import React from 'react';
import Header from '../shared/Header';
import Chef from './Chef';
import ChefContainer from './ChefContainer';
import Trending from './Trending';
import Ebook from './Ebook';

const Home = () => {
    return (
        <div className="space-y-14">
            <div className='px-5 md:px-28 space-y-14'>
                <Header/>
                <ChefContainer/>
                <Trending/>
            </div>
            <Ebook/>
        </div>
    );
};

export default Home;