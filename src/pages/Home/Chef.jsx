import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Chef = ({chef}) => {

    const {experience, id, name, num_recipes, picture, rating} = chef;

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/chef/${id}`)
    }

    return (
        <div className='flex gap-3 bg-purple-200 rounded-xl '>
            <div className='w-7/12 p-5 leading-loose space-y-5'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p className='text-lg'>Years of Experience : {experience}</p>
                <p className='text-lg'>Number of Recipes : {num_recipes}</p>
                <div className='text-lg flex'>
                    <Rating
                            style={{ maxWidth: 100,marginRight:5 }}
                            value={rating} readOnly /> {rating}
                </div>
                <button onClick={handleNavigation} className='bg-amber-600 px-3 py-2 hover:bg-amber-800 transition-all rounded-xl border-none text-white'>View Recipes</button>
            </div>
            <div className='w-5/12'>
                <img src={picture} alt=""  className='w-full h-80 object-cover rounded-r-xl'/>
            </div>
        </div>
    );
};

export default Chef;