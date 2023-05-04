import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTiktok, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Footer = () => {
    
    const handleSubscription = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        if(email){
            toast.success('You have successfuly subscribe our newsletter.', {
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
    }

    return (
        <div className='p-5 space-y-5 text-white bg-[url(https://www.tugagency.com/wp-content/uploads/2019/09/footer_background-1024x375.jpg)] bg-opacity-100 bg-no-repeat bg-cover bg-top'>
            <h1 className="flex items-center justify-center font-bold gap-3">
                    <span className='text-red-500 text-3xl'> 米隆 </span>
                    <span className='font-kalam'>Milong <br /> <small className='font-sans'>Chinese Cuisine</small> </span>
            </h1>
            <div className='flex flex-col md:flex-row text-center gap-8'>
                <div className='w-full'>
                    <h1 className='text-xl font-semibold mb-2 '>Our Location</h1>
                    <p>Hunan Province (southern central China) <br /> Changsha, Zhangjiajie</p>
                </div>
                <div className='w-full space-y-5'>
                    <h1 className='text-xl font-semibold'>Get News and Offers</h1>
                    <form className='' onSubmit={handleSubscription}>
                        <input type="email" name="email" required  className='bg-slate-200 px-2 py-1 outline-none text-black'/>
                        <button className='bg-amber-600 py-1 px-2'>Subscribe</button>
                    </form>
                    <div className='flex justify-center gap-5 text-2xl'>
                        <FaFacebook className=''/>
                        <FaTwitter/>
                        <FaInstagram/>
                        <FaPinterest/>
                        <FaLinkedin/>
                        <FaTiktok/>
                    </div>
                </div>
                <div className='w-full space-y-3 text-center'>
                    <h1 className='text-xl font-semibold '>Contact Us</h1>
                    <p>800-837-9017</p>
                    <p>800-837-9018</p>
                    <p>aargon007@pm.me</p>
                </div>
            </div>
            <div className= ' space-x-4 text-amber-700 text-xl text-center'>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/login'>Login</Link>
                <Link to='/about'>About Us</Link>
            </div>
            <p className='text-center'>Copyright © Md Muhaiminul 2023. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;