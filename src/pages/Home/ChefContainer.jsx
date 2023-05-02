import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';

const ChefContainer = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(()=>{
        const loadData = async() => {
            const res = await fetch('https://b7a10-chef-recipe-hunter-server-side-aargon007-aargon007.vercel.app/chef');
            const data = await res.json();
            setChefData(data);
            console.log(data);
        }
        return () => loadData();
    }, [])

    return (
        <div>
            <h1 className='text-center font-bold text-4xl mb-10 font-kalam'>Our Best Chefs</h1>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    chefData.map(chef => <Chef key={chef.id} chef={chef} ></Chef>)
                }
            </div>
        </div>
    );
};

export default ChefContainer;