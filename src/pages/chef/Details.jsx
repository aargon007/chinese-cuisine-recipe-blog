import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';

const Details = () => {

    const chefDetails = useLoaderData();
    const {experience, id, name, num_recipes, picture, rating, description, recipes} = chefDetails;

    console.log(chefDetails);

    return (
        <div className='py-10 px-5 md:px-28'>
            <div className='md:px-28 space-y-5 border bg-yellow-100 p-5 rounded-lg'>
                <img src={picture} alt="" className='w-[150px] h-[150px] rounded-full mx-auto object-cover'/>
                <h1 className='text-center text-2xl font-semibold'>{name}</h1>
                <div className='flex gap-10 text-center justify-center text-xl'>
                    <h1>
                        {num_recipes} <br />
                        <small className='text-red-500'>Recipe</small>
                    </h1>
                    <h1>
                        {experience}y <br />
                        <small className='text-red-500'>Experience</small>
                    </h1>
                    <h1>
                        {rating} <br />
                        <small className='text-red-500'>Rating</small>
                    </h1>
                </div>
                <p className='leading-loose'>{description}</p>
            </div>
            <h1 className='text-3xl text-center font-semibold font-lobster my-10'>Popular Recipe</h1>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    recipes.map(recipe => <Recipe key={recipe.rating} recipe={recipe} />)
                }
            </div>
        </div>
    );
};

export default Details;