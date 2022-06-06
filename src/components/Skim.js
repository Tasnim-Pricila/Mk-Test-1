import React from 'react';
import artwork from '../images/artwork.jpg';

const Skim = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <img src={artwork} alt="" className='w-1/2 mx-auto' />
                </div>
                <div className='flex flex-col justify-start'>
                    <h2 className='my-4 text-xl font-semibold'>Skim</h2>
                    <p>SKIM" is a link that a publisher inserts on a specific site
                        element, and after clicking on it, an advertisement appears
                        to the user.
                        SKIM gives 100% control of your sold traffic amount, higher
                        CR to advertisers and CPM rates to publishers.</p>
                    <div>
                        <button className='text-purple-500 justify-self-end mt-8'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skim;