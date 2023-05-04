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
            <img src="https://pinchofyum.com/wp-content/assets/images/cta/poy-ecookbook-2021-450x338.png" alt="cookbook"   className='rounded-lg '/>
            <div className='space-y-3'>
                <h3 className='text-2xl text-center font-lobster text-amber-500'>get it now</h3>
                <h2 className='text-white text-3xl font-mono uppercase text-center'>pinch of yum cookbook</h2>
                <p className='text-white text-xl leading-relaxed'>The eBook includes our most popular 25 recipes in a beautiful, easy to download format. Enter your email and we'll send it right over!</p>
                <form onSubmit={getEbook}>
                    <input type="text" name="name" placeholder='Name' className='outline-none p-2 text-gray-600' /> <br /> <br />
                    <input type="email" name="email" placeholder='Email' className='outline-none p-2 text-gray-600' required/>
                    <input type="submit" value="Go" className='p-2 bg-purple-700 hover:bg-purple-900 text-white'/>
                </form>
            </div>
        </div>
    );
};

export default Ebook;