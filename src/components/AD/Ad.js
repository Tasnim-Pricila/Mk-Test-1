import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';



const Ad = () => {
    return (
        <div className='px-20 mb-8'>
            <p className='text-2xl uppercase pb-4 text-center mt-8 text-purple-500 font-semibold'>Versatile Ad Formats</p>
            <div className='flex gap-12 justify-center py-8'>
                <NavLink to='/' className={({ isActive }) => (isActive ? "bg-orange-500 px-8 py-1 text-white rounded-full " : "bg-white px-8 py-1 text-black rounded-full shadow-2xl ")}>POP-UNDER</NavLink>
                
                <NavLink to='/bannerAd' className={({ isActive }) => (isActive ? "bg-orange-500 px-8 py-1 text-white rounded-full " : "bg-white px-8 py-1 text-black rounded-full shadow-2xl ")}>BANNER AD </NavLink>

                <NavLink to='/native' className={({ isActive }) => (isActive ? "bg-orange-500 px-8 py-1 text-white rounded-full " : "bg-white px-8 py-1 text-black rounded-full shadow-2xl ")}>NATIVE </NavLink>

                <NavLink to='/skim' className={({ isActive }) => (isActive ? "bg-orange-500 px-8 py-1 text-white rounded-full " : "bg-white px-8 py-1 text-black rounded-full shadow-2xl ")}>SKIM </NavLink>
            </div>
            
                <Outlet></Outlet>
                
            </div>
    );
};

export default Ad;