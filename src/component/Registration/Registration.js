import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init'
import SocialLink from '../SocialLink/SocialLink';

const Registration = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPassRef = useRef('')

    const [createUserWithEmailAndPassword, createUser, createUserLoading, createError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPass = confirmPassRef.current.value;

        if (password !== confirmPass) {
            setError('Please enter same password')
            return;
        }
        if (!password.length >= 8) {
            setError('Please input atleast 8 digit password')
            return;
        }
        else {
            createUserWithEmailAndPassword(email, password);
        }
        if (createUser) {
            navigate(from, { replace: true })
        }
        if (createUserLoading) {
            return <p>Loading...</p>
        }

    }
    return (
        <div className='flex justify-center text-slate-50'>
            <div className='md:w-2/6 xs:w-4/6 border-4 border-sky-600 p-10 my-20 text-black rounded-lg shadow-xl shadow-black'>
                <h4 className='text-center pb-4 font-bold'>Registration here</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Your email</label>
                        <input ref={emailRef} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Your password</label>
                        <input ref={passwordRef} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required="" />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="floating_repeat_password" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Confirm password</label>
                        <input ref={confirmPassRef} type="password" name="repeat_password" id="floating_repeat_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm Password" required="" />
                    </div>
                    {error || createError ? <p className='text-red-500'>{error || createError?.message}</p> : ''}
                    <div className="flex items-start mb-3">
                        <p className='text-black'>Already have an account?</p>
                        <Link to='/login' className='ml-1 font-bold text-slate-50 hover:text-black'>Log in</Link>
                    </div>
                    <button type="submit" className='px-10 py-1 rounded-lg border-2 hover:bg-gray-700 text-xl mb-3  text-white border-gray-700' style={{ width: '100%' }}>Registration</button>
                </form>
                <SocialLink></SocialLink>
            </div>
        </div>
    );
};

export default Registration;