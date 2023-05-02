import React from 'react';
import dumpling from '../../assets/dumpling.jpg'

const Header = () => {
    return (
        <div className='flex gap-5 items-center'>
            <div className='w-100 md:w-4/12 space-y-5'>
                <h1 className='text-5xl font-semibold font-kalam'>Chinese <br /> Cuisine</h1>
                <p className='text-xl leading-loose'>We try to show you all the variety of Chinese cuisine and its current trends by our best chefs.</p>
                <button className='bg-orange-500 px-4 py-3 text-xl font-semibold rounded-xl text-white'>View Our Chefs</button>
            </div>
            <div className='w-100 md:w-8/12'>
                <img src={dumpling} alt="dumpling" className='w-[800px]' />
            </div>
        </div>
    );
};

export default Header;