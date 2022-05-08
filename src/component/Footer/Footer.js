import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='text-center flex justify-center items-center rounded-sm'>
                <div className='h-10 w-1 bg-gray-700'></div>
                <div className='h-1 w-20 bg-gray-800'></div>
                <h3 className='border-4 rounded-lg px-3 border-gray-800'>Contact with us</h3>
                <div className='h-1 w-20 bg-gray-800'></div>
                <div className='h-10 w-1 bg-gray-700'></div>
            </div>
            <div className='flex justify-center'>
                <a className='text-xl sm:text-3xl border-2 p-2 sm:p-3 rounded-full my-10 text-yellow-50 hover:bg-yellow-50 mx-2 lg:mx-20 md:mx-8 shadow-xl shadow-zinc-800' href="https://www.facebook.com" rel="noreferrer noopener" target="_blank"><FaFacebook /></a>
                <a className='text-xl sm:text-3xl border-2 p-2 sm:p-3 rounded-full my-10 text-yellow-50 hover:bg-yellow-50 mx-2 lg:mx-20 md:mx-8 shadow-xl shadow-zinc-800' href="https://www.Whatsapp.com" rel="noreferrer noopener" target="_blank"><FaWhatsapp /></a>
                <a className='text-xl sm:text-3xl border-2 p-2 sm:p-3 rounded-full my-10 text-yellow-50 hover:bg-yellow-50 mx-2 lg:mx-20 md:mx-8 shadow-xl shadow-zinc-800' href="https://www.instagram.com" rel="noreferrer noopener" target="_blank"><FaInstagram /></a>
                <a className='text-xl sm:text-3xl border-2 p-2 sm:p-3 rounded-full my-10 text-yellow-50 hover:bg-yellow-50 mx-2 lg:mx-20 md:mx-8 shadow-xl shadow-zinc-800' href="https://www.linkedin.com" rel="noreferrer noopener" target="_blank"><FaLinkedin /></a>
                <a className='text-xl sm:text-3xl border-2 p-2 sm:p-3 rounded-full my-10 text-yellow-50 hover:bg-yellow-50 mx-2 lg:mx-20 md:mx-8 shadow-xl shadow-zinc-800' href="https://www.github.com" rel="noreferrer noopener" target="_blank"><FaGithub /></a>
            </div>
            <div>
                <h6 className='m-0 py-2 text-center bg-gray-800 text-white'>&copy; All rights reserved by <Link className='text-yellow-100 hover:text-indigo-300' to="/">Car inventory</Link></h6>
            </div>
        </div>
    );
};

export default Footer;