import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [menuIcon, setMenuIcon] = useState(false);
    return (
        <div className='px-12 pt-4 '>
            <div className='flex justify-between items-center'>
                <img src={logo} alt="" className='w-12' />
                <small className='font-extrabold'>
                    <button className='text-green-400 font-extrabold'>BN&nbsp;</button> /
                    <button className='font-extrabold'> &nbsp; EN </button>
                </small>
            </div>

            <div className='flex justify-between items-center text-purple-700 sticky top-0 z-50'>
                <div className={`flex md:flex-row md:gap-8 flex-col md:static duration-1000 absolute bg-[#1B1E1E] md:bg-transparent text-center uppercase items-center
                 ${menuIcon ? 'right-0 left-0 top-14 py-4 gap-2' : 'right-0 left-0 top-[-220px]'} `}
                >
                    <NavLink to='/' className={({ isActive }) => (isActive ? "text-orange-600" : "")}> Home </NavLink>
                    <NavLink to='/advertisers' className={({ isActive }) => (isActive ? "text-orange-600" : "")} > Advertisers
                    </NavLink>
                    <NavLink to='/publishers' className={({ isActive }) => (isActive ? "text-orange-600" : "")} > Publishers </NavLink>
                    <NavLink to='/influencers' className={({ isActive }) => (isActive ? "text-orange-600" : "")}  > Influencers </NavLink>
                    <NavLink to='/ad' className={({ isActive }) => (isActive ? "text-orange-600" : "")} > AD Formats </NavLink>
                    <NavLink to='/blog' className={({ isActive }) => (isActive ? "text-orange-600" : "")} > Blog </NavLink>
                    <NavLink to='/contact' className={({ isActive }) => (isActive ? "text-orange-600" : "")} > Contact Us </NavLink>
                </div>

                <div onClick={() => setMenuIcon(!menuIcon)} className='w-6 h-6 md:hidden'>
                    {menuIcon ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>

                <div className='bg-white text-black py-4 px-8 rounded-full shadow-lg uppercase'>
                    <button>Login</button>
                    <button className="bg-orange-600 px-6 py-2 rounded-full ml-4 text-white shadow-lg" > Signup </button> 
                </div>
            </div>
        </div>
    );
};

export default Header;