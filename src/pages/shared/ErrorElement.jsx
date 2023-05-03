import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {

    const { error, status } = useRouteError()

    return (
        <div className='flex flex-col items-center w-screen h-screen'>
            <img src="/3793096.jpg" alt="" className='w-96 mx-auto' />
            <h1 className='text-3xl font-mono uppercase text-center text-red-700 font-semibold px-5 mb-10'>the page you were looking for does not exist</h1>
            <button className='bg-blue-600 text-white py-3 px-5 font-mono border-none rounded-lg text-2xl'>Go back to Home</button>
        </div>
    );
};

export default ErrorElement;