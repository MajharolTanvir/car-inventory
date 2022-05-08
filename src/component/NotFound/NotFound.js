import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/stay_together_tech_issues2-1080x540.jpg' 

const NotFound = () => {
    return (
        <div className='container my-10'>
            <div className='md:flex items-center'>
                <div>
                    <h1 className='font-bold text-6xl md:text-9xl text-red-600'>404</h1>
                    <h3 className='font-medium'>This page is not available in this time...</h3>
                    <Link to="/"><button className='px-10 py-1 rounded-lg border-2 hover:bg-gray-700 text-xl no-underline text-slate-900 hover:text-slate-100 border-gray-700 my-10'>Home</button></Link>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;