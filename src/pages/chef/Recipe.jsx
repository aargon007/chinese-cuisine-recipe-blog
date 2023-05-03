import React from 'react';
import { FaHSquare, FaHeart, FaLevelDownAlt } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Recipe = ({recipe}) => {
    const {name, ingredients, rating, cooking_method,id} = recipe;
    return (
        <div className='p-5 border border-purple-500 rounded-lg flex flex-col  gap-5 items-center justify-between hover:bg-slate-100 transition-all'>
            <div className='space-y-3'>
                <h1 className='text-2xl text-red-500 font-semibold text-center'>{name}</h1>
                <p className='leading-relaxed'><span className='font-semibold'>Ingredients : </span>{ingredients.join(",")}</p>
                <p className='leading-relaxed'><span className='font-semibold'>Cooking Method : </span> {cooking_method}</p>
                <div className='flex '><Rating
                            style={{ maxWidth: 120,marginRight:5 }}
                            value={rating} readOnly /> {rating} Rating
                </div>
            </div>
            <button className='hover:outline hover:outline-red-300 bg-gray-300 p-2 rounded-lg flex items-center'>Add to Favourite <FaHeart className='text-red-500 ms-3'/></button>
        </div>
    );
};

export default Recipe;