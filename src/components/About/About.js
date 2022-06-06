import React from 'react';

const About = () => {
    return (
        <div>
            <div className='text-center py-12 bg-purple-500 text-white'>
                <p className='text-2xl uppercase text-black pb-4'>About Us</p>
                <p>Successful Influences Are What We Do</p>
                <div className='pt-20 grid grid-cols-3 justify-center items-center px-48 gap-12'>
                    <div className='border-4 rounded-full w-[300px] h-[300px] flex flex-col justify-center border-dashed'>
                        <p className='text-3xl mb-8'>1 BN+</p>
                        <p className='text-xl'>Daily Impressions</p>
                    </div>
                    <div className='rounded-full w-[300px] h-[300px] flex flex-col justify-center bg-white text-purple-500'>
                        <p className='text-3xl mb-8'>$ 500K+</p>
                        <p className='text-xl'>Paid</p>
                    </div>
                    <div className='rounded-full w-[300px] h-[300px] flex flex-col justify-center bg-orange-500'>
                        <p className='text-3xl mb-8'>8K+</p>
                        <p className='text-xl'>Global Publishers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;