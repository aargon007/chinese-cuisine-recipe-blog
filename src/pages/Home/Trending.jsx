import React, { useEffect, useState } from 'react';
import TrendingCard from './TrendingCard';

const Trending = () => {
    
    const [trendingData, setTrendingData] = useState([]);

    useEffect(()=>{
        const loadData = async() => {
            const res = await fetch('https://b7a10-chef-recipe-hunter-server-side-aargon007-aargon007.vercel.app/trending');
            const data = await res.json();
            setTrendingData(data);
            // console.log(data);
        }
        loadData();
    }, [])
    return (
        <div>
            <h1 className='text-center text-4xl mb-8 font-kalam font-semibold'>Trending Cuisine</h1>
            <div className='flex gap-8 md:flex-row flex-col'>
                {
                    trendingData.map(trending => <TrendingCard key={trending.rating} trending={trending} />)
                }
            </div>
        </div>
    );
};

export default Trending;