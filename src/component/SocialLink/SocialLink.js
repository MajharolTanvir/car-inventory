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
                <div style={{ height: '3px' }} className='bg-slate-400 w-32 mr-4 rounded-lg'></div>
                <p>OR</p>
                <div style={{ height: '3px' }} className='bg-slate-400 w-32 ml-4 rounded-lg'></div>
            </div>
            <div className='justify-center'>
                <div>
                    <button className='border-2 border-cyan-300 hover:border-indigo-600 my-2 rounded-lg bg-cyan-300 hover:bg-indigo-600 text-black flex items-center justify-center text-md font-bold py-2 w-full px-10' onClick={handleSignInWithGoogle}><FaGoogle className='mr-2 text-xl' />Google sign in</button>
                    {googleError ? <p className='text-yellow-400'>{googleError.message}</p> : ''}
                </div>
            </div>
        </div>
    );
};

export default SocialLink;