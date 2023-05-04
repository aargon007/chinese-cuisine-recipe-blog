import React from 'react';
import { Link, useLocation, useNavigate, useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    return (
        <div className='flex flex-col items-center'>
            <img src="/3793096.jpg" alt="" className='w-96 mx-auto' />
            <h1 className='md:text-3xl text-2xl font-mono uppercase text-center text-red-700 font-semibold px-5 mb-10'>
                the page you were looking for does not exist
            </h1>
            <button onClick={goBack} replace className='bg-blue-600 text-white py-2 px-3 font-mono border-none rounded-lg text-xl'>Go Back</button>
        </div>
    );
};

export default ErrorElement;