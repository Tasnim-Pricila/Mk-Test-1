import React from 'react';
import artwork from '../../images/artwork.jpg'

const Banner = () => {
    return (
        <div className='grid md:grid-cols-2 px-12 items-center pt-8 grid-cols-1 '>
            <div data-aos="fade-right" data-aos-offset="300"data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="80">
                <h2 className='text-6xl mb-8 leading-[1.25]'>Influencers That Are Made To
                    Impress</h2>
                <p  className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro fuga consequatur, sed dolore molestiae. Cum, magnam! Error ipsam recusandae debitis veritatis minima eum. Possimus ducimus quod libero nulla perferendis?</p>
                <button className='px-4 py-2 bg-orange-400 rounded-lg text-white'>Discover Us</button>
            </div>
            <div className='justify-self-end' data-aos="fade-left" data-aos-offset="300"data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="80">
                <img src={artwork} alt="" className='mx-auto h-[500px]' />
            </div>
        </div>
    );
};

export default Banner;