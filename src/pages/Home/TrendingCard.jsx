import React from 'react';

const TrendingCard = ({trending}) => {

    const {recipe_name, recipe_image, description, rating} = trending

    return (
        <div className='border  rounded-lg'>
            <img src={recipe_image} alt="" className='w-full h-[250px] rounded-lg mb-3' />
            <div className='p-3 space-y-3 '>
            <h1 className='text-2xl font-bold italic'>{recipe_name}</h1>
            <p className='leading-loose'>{description}</p>
            <p>Rating : {rating}</p>
            </div>
        </div>
    );
};

export default TrendingCard;