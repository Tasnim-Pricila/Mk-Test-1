import React from 'react';
import artwork from '../images/artwork.jpg';

const PopUnder = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <img src={artwork} alt="" className='w-1/2 mx-auto' />
                </div>
                <div className='flex flex-col justify-start'>
                    <h2 className='my-4 text-xl font-semibold'>POP-UNDER</h2>
                    <p>This is one of the most popular ads. After user’s click, this
                        ad opens landing page in behind. So, the user experience is
                        not hampered much.</p>
                    <div>
                        <button className='text-purple-500 justify-self-end mt-8 font-semibold '>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUnder;