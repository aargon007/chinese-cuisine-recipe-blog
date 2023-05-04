import React from 'react';

const About = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row gap-10 px-5 md:px-28 py-10'>
            <img src="https://orangemagazine.ph/wp-content/uploads/2015/09/FOOD-MAGAZINE-ISSUE-3.jpg" className='w-full rounded-lg h-[600px]' alt="" />
            <div className='w-full space-y-5'>
                <h1 className='text-3xl font-semibold text-green-700'>
                    About Us
                </h1>
                <h2 className='text-3xl font-semibold '>
                    Who We Are
                </h2>
                <p className='leading-loose '>
                    Home cooks are our heroes—it's as simple as that. Allrecipes is a community built by and for kitchen experts: The cooks who will dedicate the weekend to a perfect beef bourguignon but love the simplicity of a slow-cooker rendition, too. The bakers who labor over a showstopping 9-layer cake but will just as happily doctor boxed brownies for a decadent weeknight dessert. The entertainers who just want a solid snack spread, without tons of dirty dishes at the end of the night.
                    Most importantly, Allrecipes connects home cooks with their greatest sources of inspiration — other home cooks. We're the world's leading digital food brand, and that inspires us to do everything possible to keep our community connected. Sixty-million home cooks deserve no less.
                </p>
            </div>
        </div>
    );
};

export default About;