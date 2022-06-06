import React from 'react';
import mike from '../../images/mike.jpg';
import influencer from '../../images/influencer.png';
import telegram from '../../images/telegram.png';

const Available = () => {
    return (
        <div>
            <div className='text-center py-12'>
                <p className='text-2xl uppercase text-purple-700 font-semibold'>Available For Everyone</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, qui.</p>
                <div className='pt-20 grid md:grid-cols-3 grid-cols-1 justify-center items-center md:px-48 px-4 gap-12'>
                    <div>
                        <img src={mike} alt="" className='rounded-full w-[150px] h-[150px] mx-auto mb-6' />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident a eos, nisi quia ad, sunt, enim tempora quae natus amet cumque? Hic minima molestiae porro labore, adipisci quam accusamus aspernatur.</p>
                        <button className='bg-purple-700 w-full font-semibold py-2 rounded-full mt-4 text-white '>Hello 1</button>
                    </div>
                    <div>
                        <img src={telegram} alt="" className='rounded-full w-[150px] h-[150px] mx-auto mb-6' />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident a eos, nisi quia ad, sunt, enim tempora quae natus amet cumque? Hic minima molestiae porro labore, adipisci quam accusamus aspernatur.</p>
                        <button className='bg-purple-700 w-full font-semibold py-2 rounded-full mt-4 text-white'>Hello 2</button>
                    </div>
                    <div>
                        <img src={influencer} alt="" className='rounded-full w-[150px] h-[150px] mx-auto mb-6' />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident a eos, nisi quia ad, sunt, enim tempora quae natus amet cumque? Hic minima molestiae porro labore, adipisci quam accusamus aspernatur.</p>
                        <button className='bg-purple-700 w-full font-semibold py-2 rounded-full mt-4 text-white'>Hello 3</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Available;