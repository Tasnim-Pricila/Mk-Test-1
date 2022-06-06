import React from 'react';

const About = () => {
    return (
        <div>
            <div className='text-center py-12 bg-[#644F9C] text-white'>
                <p className='text-2xl uppercase text-white pb-4'>About Us</p>
                <p>Successful Influences Are What We Do</p>
                <div className='pt-20 grid md:grid-cols-3 grid-cols-1 justify-center items-center md:px-48 px-4 gap-12'>
                    <div className='border-4 rounded-full w-[300px] h-[300px] flex flex-col justify-center border-dashed mx-auto'>
                        <p className='text-3xl mb-8 font-semibold'>1 BN+</p>
                        <p className='text-2xl'>Daily Impressions</p>
                    </div>
                    <div className='rounded-full w-[300px] h-[300px] flex flex-col justify-center bg-white text-[#644F9C] mx-auto'>
                        <p className='text-3xl mb-8 font-semibold'>$500K+</p>
                        <p className='text-2xl'>Paid</p>
                    </div>
                    <div className='rounded-full w-[300px] h-[300px] flex flex-col justify-center bg-orange-500 mx-auto'>
                        <p className='text-3xl mb-8'>8K+</p>
                        <p className='text-2xl'>Global Publishers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;