import React from 'react';
import logo from '../../images/logo.png';
import yt from '../../images/yt.png';
import insta from '../../images/insta.jpg';
import fb from '../../images/fb.png';

const Footer = () => {
    return (
        <div className='grid md:grid-cols-4 grid-cols-1 md:p-20 py-4 justify-items-center bg-slate-100 gap-8 md:gap-0'>
            <div>
                <p className='text-[#644F9C] font-extrabold text-xl'>We are Social</p>
                <p className='my-6'>Follow Us</p>
                <div className='flex mb-6'>
                    <img src={insta} alt="" className='w-8' />
                    <img src={fb} alt="" className='w-12' />
                    <img src={yt} alt="" className='w-8' />
                </div>
                <img src={logo} alt="" className='w-12' />
            </div>
            <div>
                <p className='text-[#644F9C] font-extrabold mb-6'>Links</p>
                <div className='flex flex-col gap-4'>
                    <button className='uppercase hover:text-orange-500'>Advertisers</button>
                    <button className='uppercase hover:text-orange-500 text-left'>Publishers</button>
                    <button className='uppercase hover:text-orange-500'>Influencers</button>
                    <button className='uppercase hover:text-orange-500 text-left'>Ad Formats</button>
                </div>
            </div>
            <div>
                <p className='text-[#644F9C] font-extrabold mb-6'>Documentation</p>
                <div className='flex flex-col gap-4'>
                    <button className='uppercase hover:text-orange-500 text-left'>terms &amp; Conditions</button>
                    <button className='uppercase hover:text-orange-500 text-left'>Privacy Policy</button>
                    <button className='uppercase hover:text-orange-500 text-left'>Cancellation Policy</button>
                    <button className='uppercase hover:text-orange-500 text-left'>Blog</button>
                </div>
            </div>
            <div>
                <p className='text-[#644F9C] font-extrabold mb-6'>Support</p>
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