import React from 'react';
import { toast } from 'react-toastify';

const Ebook = () => {

    const getEbook = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        toast.info(`Welcome ${name}, we will send our cookbook right away. Please check inbox.`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div className='flex flex-col md:flex-row gap-10 bg-gray-700 md:px-28 px-5 py-10 rounded-lg'>
            <img src="https://pinchofyum.com/wp-content/assets/images/cta/poy-ecookbook-2021-450x338.png" alt="cookbook"   className='rounded-lg w-full'/>
            <div className='space-y-3 w-full'>
                <h3 className='text-2xl text-center font-lobster text-amber-500'>
                    get it now
                </h3>
                <h2 className='text-white text-3xl font-mono uppercase text-center'>
                    pinch of yum cookbook
                </h2>
                <p className='text-white text-xl leading-relaxed'>
                    The eBook includes our most popular 25 recipes in a beautiful, easy to download format. Enter your email and we'll send it right over!
                </p>
                <form onSubmit={getEbook}>
                    <input type="text" 
                    name="name" 
                    placeholder='Name'
                    className='block w-full rounded-md border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6' 
                    /> <br />

                    <input type="email" 
                    name="email" 
                    placeholder='Email' 
                    className='block w-full rounded-md border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6' 
                    required/> <br />

                    <input type="submit" 
                    value="Get Ebook" 
                    className='block mx-auto rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    />
                </form>
            </div>
        </div>
    );
};

export default Ebook;