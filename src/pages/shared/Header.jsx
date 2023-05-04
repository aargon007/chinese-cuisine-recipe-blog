import React from 'react';
import dumpling from '../../assets/dumpling.jpg'
import LazyLoad from 'react-lazy-load';

const Header = () => {
    return (
        <div className='flex gap-5 items-center flex-col-reverse md:flex-row'>
            <div className='w-100 md:w-4/12 space-y-5'>
                <h1 className='md:text-5xl text-3xl font-semibold font-kalam leading-normal md:leading-relaxed'>Taste our best <br className='block'/>Chinese Cuisine</h1>
                <p className='text-xl leading-loose'>We try to show you all the variety of Chinese cuisine and its current trends by our best chefs.</p>
                <a href='#chefs' className='bg-amber-600 px-3 py-2 text-lg rounded-xl border-none text-white inline-block'>View Our Chefs</a>
            </div>
            <div className='w-100 md:w-8/12'>
                <LazyLoad className='h-[300px] md:h-[550px]'>
                    <img src={dumpling} alt="dumpling" className='w-[800px]' />
                </LazyLoad>
            </div>
        </div>
    );
};

export default Header;