import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Chef from './Chef';

const ChefContainer = () => {
    const chefData = useLoaderData();
    const navigation = useNavigation();

    return (
        <div>
            <h1 className='text-center font-bold text-4xl mb-10 font-kalam' id='chefs'>Our Best Chefs</h1>
            <div className='grid md:grid-cols-2 gap-10' >
                {
                    chefData.map(chef => <Chef key={chef.id} chef={chef} ></Chef>)
                }
            </div>
        </div>
    );
};

export default ChefContainer;