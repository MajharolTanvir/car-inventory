import React, { useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLink from '../SocialLink/SocialLink';


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, forgetError] = useSendPasswordResetEmail(auth);


    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true })
        toast("SuccessFully Login")
    }

    if (loading) {
        return <p>Loading..</p>;
    }
    const handleResetPassword = async () => {
        toast("Email reset password !!!!")
        const email = emailRef.current.value
        await sendPasswordResetEmail(email)
        sending()
    }

    return (
        <div className='flex justify-center'>
            <div className='md:w-2/6 xs:w-4/6 border-4 border-sky-600 p-10 my-20 text-black rounded-lg shadow-xl shadow-black'>
                <h4 className='text-center pb-4 font-bold'>Login here</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6 text-slate-50">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Your email</label>
                        <input ref={emailRef} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Your password</label>
                        <input ref={passwordRef} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required="" />
                    </div>
                    <div className="flex items-start mb-1">
                        <p>Create new account?</p>
                        <Link to='/registration' className='ml-1 text-gray-50 font-bold hover:text-black'>Registration now</Link>
                    </div>
                    <div className="flex items-start mb-3">
                        <p>Forget password?</p>
                        <button onClick={handleResetPassword} className='ml-1 text-gray-50 font-bold hover:text-black'>Click here</button>
                        <ToastContainer />
                    </div>
                    {
                        error || forgetError ? <p className='text-red-600'>{error?.message || forgetError?.message}</p> : ''
                    }
                    <button type="submit" className='px-10 py-1 rounded-lg border-2 hover:bg-gray-700 text-xl mb-3  text-white border-gray-700' style={{ width: '100%' }}>Log in</button>
                </form>
                <SocialLink></SocialLink>
            </div>
        </div>
    );
};

export default Login;