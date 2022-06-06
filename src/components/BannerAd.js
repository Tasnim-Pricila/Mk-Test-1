import React from 'react';
import artwork from '../images/artwork.jpg';

const BannerAd = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <img src={artwork} alt="" className='w-1/2 mx-auto' />
                </div>
                <div className='flex flex-col justify-start'>
                    <h2 className='my-4 text-xl font-semibold'>Banner AD</h2>
                    <p>Choose between the available banner formats. Highly
effective ad for visibility.</p>
                    <div>
                        <button className='text-purple-500 justify-self-end mt-8'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerAd;