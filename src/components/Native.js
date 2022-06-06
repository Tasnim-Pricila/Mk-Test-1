import React from 'react';
import artwork from '../images/artwork.jpg';

const Native = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <img src={artwork} alt="" className='w-1/2 mx-auto' />
                </div>
                <div className='flex flex-col justify-start'>
                    <h2 className='my-4 text-xl font-semibold'>Native</h2>
                    <p>Ad format with the image and the title, that perfectly fits into
                        the content of the site.
                        Native ads are placed in the most visible areas of the page
                        and, thus, this format shows good results and the level of
                        interaction.</p>
                    <div>
                        <button className='text-purple-500 justify-self-end mt-8'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Native;