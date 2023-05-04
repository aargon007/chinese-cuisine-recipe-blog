import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';
import LazyLoad from 'react-lazy-load';

const Chef = ({chef}) => {

    const {experience, id, name, num_recipes, picture, rating} = chef;

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/chef/${id}`)
    }

    return (
        <div className='flex gap-3 bg-purple-200 rounded-xl flex-col-reverse md:flex-row'>
            <div className='md:w-7/12 p-5 leading-loose space-y-5'>
                <h1 className='text-2xl font-bold'>
                    {name}
                </h1>
                <p className='text-lg'>
                    Years of Experience : {experience}
                </p>
                <p className='text-lg'>
                    Number of Recipes : {num_recipes}
                </p>
                <div className='text-lg flex'>
                    <Rating
                            style={{ maxWidth: 100,marginRight:5 }}
                            value={rating} readOnly /> {rating}
                </div>
                <button onClick={handleNavigation}
                    className='bg-amber-600 px-3 py-2 hover:bg-amber-800 transition-all rounded-xl border-none text-white'>
                    View Recipes
                </button>
            </div>
            <LazyLoad className='md:w-5/12 md:h-80 h-60'>
                <img src={picture} alt="chef"  className='w-full md:h-80 h-60 object-cover md:rounded-tr-xl md:rounded-tl-none rounded-t-xl'/>
            </LazyLoad>
        </div>
    );
};

export default Chef;