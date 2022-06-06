import React from 'react';
import Slider from 'react-slick';
import photo from '../../images/photo.jpg';
import './Review.css';

const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
        ]
    };
    return (
        <div>
            <div className='px-36 my-16'>
                <p className='text-2xl uppercase text-purple-500 text-center mb-20'>Clients Say About Us</p>
                
                <Slider {...settings} className='pb-12'>
                    <div className='flex review gap-12 justify-center items-center'>
                        <div>
                            <img src={photo} alt="" className='w-[700px] h-[150px]' />
                        </div>
                        <div>
                            <p className='mb-4 text-purple-500 font-extrabold'>Anney Deva</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus possimus doloribus ipsa dolorum est dolores saepe fugit a voluptates.</p>
                        </div>
                    </div>
                    <div className='flex review gap-12 justify-center items-center'>
                        <div>
                            <img src={photo} alt="" className='w-[700px] h-[150px]' />
                        </div>
                        <div>
                            <p className='mb-4 text-purple-500 font-extrabold'>Anney Deva</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus possimus doloribus ipsa dolorum est dolores saepe fugit a voluptates.</p>
                        </div>
                    </div>
                    <div className='flex review gap-12 justify-center items-center'>
                        <div>
                            <img src={photo} alt="" className='w-[700px] h-[150px]' />
                        </div>
                        <div>
                            <p className='mb-4 text-purple-500 font-extrabold'>Anney Deva</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus possimus doloribus ipsa dolorum est dolores saepe fugit a voluptates.</p>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default Reviews;