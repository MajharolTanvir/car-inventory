import React from 'react';
import auth from '../../Firebase.init';
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLink = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate('')
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';


    const handleSignInWithGoogle = event => {
        event.preventDefault()
        signInWithGoogle();
    }
    if (googleUser) {
        navigate(from, { replace: true })
    }
    if (googleLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <div className='flex items-center my-3 justify-center'>
                <div style={{ height: '3px' }} className='bg-gray-700 w-32 mr-4 rounded-lg'></div>
                <p>OR</p>
                <div style={{ height: '3px' }} className='bg-gray-700 w-32 ml-4 rounded-lg'></div>
            </div>
            <div className='justify-center'>
                <div>
                    <button className='px-10 py-2 my-10 rounded-lg border-2 hover:bg-gray-700 text-xl mb-3  text-white border-gray-700 flex items-center justify-center w-full' onClick={handleSignInWithGoogle}><FaGoogle className='mr-2 text-xl' />Google sign in</button>
                    {googleError ? <p className='text-red-600'>{googleError.message}</p> : ''}
                </div>
            </div>
        </div>
    );
};

export default SocialLink;