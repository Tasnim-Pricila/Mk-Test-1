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
            <div className='md:px-36 my-16' data-aos="zoom-in" data-aos-offset="300"data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="80">
                <p className='text-2xl uppercase text-[#644F9C] text-center mb-20 font-semibold'>Clients Say About Us</p>
                
                <Slider {...settings} className='pb-12' >
                    <div className='flex review gap-12 justify-center items-center'>
                        <div>
                            <img src={photo} alt="" className='w-[700px] h-[150px]' />
                        </div>
                        <div>
                            <p className='mb-4 text-[#644F9C] font-extrabold'>Anney Deva</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus possimus doloribus ipsa dolorum est dolores saepe fugit a voluptates.</p>
                        </div>
                    </div>
                    <div className='flex review gap-12 justify-center items-center'>
                        <div>
                            <img src={photo} alt="" className='w-[700px] h-[150px]' />
                        </div>
                        <div>
                            <p className='mb-4 text-[#644F9C] font-extrabold'>Anney Deva</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus possimus doloribus ipsa dolorum est dolores saepe fugit a voluptates.</p>
                        </div>
                    </div>
                    <div className='flex review gap-12 justify-center items-center'>
                        <div>
                            <img src={photo} alt="" className='w-[700px] h-[150px]' />
                        </div>
                        <div>
                            <p className='mb-4 text-[#644F9C] font-extrabold'>Anney Deva</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus possimus doloribus ipsa dolorum est dolores saepe fugit a voluptates.</p>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default Reviews;