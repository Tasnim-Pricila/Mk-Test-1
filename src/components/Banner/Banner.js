import React from 'react';
import artwork from '../../images/artwork.jpg'

const Banner = () => {
    return (
        <div className='grid grid-cols-2 px-12 items-center pt-8 '>
            <div>
                <h2 className='text-6xl mb-8 leading-[1.25]'>Influencers That Are Made To
                    Impress</h2>
                <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro fuga consequatur, sed dolore molestiae. Cum, magnam! Error ipsam recusandae debitis veritatis minima eum. Possimus ducimus quod libero nulla perferendis?</p>
                <button className='px-4 py-2 bg-orange-400 rounded-lg text-white'>Discover Us</button>
            </div>
            <div className='justify-self-end'>
                <img src={artwork} alt="" className='mx-auto h-[500px]' />
            </div>
        </div>
    );
};

export default Banner;