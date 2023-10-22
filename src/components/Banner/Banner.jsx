import React from 'react';
import banner from '../../assets/img/3.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className=' relative banner '>
            <div className=' absolute top-36 md:left-2/4 p-4'>
                <h1 className='text-xl text-white'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-xs my-2 text-yellow-50'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of  every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='bg-orange-300 px-2 py-1 mt-4'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;