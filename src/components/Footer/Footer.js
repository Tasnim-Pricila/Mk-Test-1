import React from 'react';
import logo from '../../images/logo.png';
import yt from '../../images/yt.png';
import insta from '../../images/insta.jpg';
import fb from '../../images/fb.png';

const Footer = () => {
    return (
        <div className='grid grid-cols-4 p-20 justify-items-center'>
            <div>
                <p className='text-purple-500 font-extrabold'>We are Social</p>
                <p className='my-6'>Follow Us</p>
                <div className='flex mb-6'>
                    <img src={insta} alt="" className='w-8' />
                    <img src={fb} alt="" className='w-12' />
                    <img src={yt} alt="" className='w-8' />
                </div>
                <img src={logo} alt="" className='w-12' />
            </div>
            <div>
                <p className='text-purple-500 font-extrabold mb-6'>Links</p>
                <div className='flex flex-col gap-4'>
                    <button className='uppercase hover:text-orange-500'>Advertisers</button>
                    <button className='uppercase hover:text-orange-500 text-left'>Publishers</button>
                    <button className='uppercase hover:text-orange-500'>Influencers</button>
                    <button className='uppercase hover:text-orange-500 text-left'>Ad Formats</button>
                </div>
            </div>
            <div>
                <p className='text-purple-500 font-extrabold mb-6'>Documentation</p>
                <div className='flex flex-col gap-4'>
                    <button className='uppercase hover:text-orange-500'>terms &amp; Conditions</button>
                    <button className='uppercase hover:text-orange-500 text-left'>Privacy Policy</button>
                    <button className='uppercase hover:text-orange-500'>Cancellation Policy</button>
                    <button className='uppercase hover:text-orange-500 text-left'>Blog</button>
                </div>
            </div>
            <div>
                <p className='text-purple-500 font-extrabold mb-6'>Support</p>
                <div className='flex flex-col gap-4'>
                    <button className='uppercase hover:text-orange-500 text-left'>terms &amp; FAQ</button>
                    <button className='uppercase hover:text-orange-500 text-left'>Media Kit</button>
                    <button className='uppercase hover:text-orange-500 text-left'>Cancellation Policy</button>
                    <button className='uppercase hover:text-orange-500 text-left'>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;