import React, { useState } from 'react';
import auth from '../../Firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useValidate from '../../Hooks/useValidate';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';
    const [validated] = useValidate()
    const [error, setError] = useState('')


    const [
        signInWithEmailAndPassword,
        user,
        SignInLoading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);


    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true })
    }

    if (signInError) {
        setError(signInError)
        setError('')
    }
    return (
        <div className='container'>
            <h2 className='text-center my-4'>Login here</h2>
            <div >
                <Form className=' max-w-xl mx-auto my-10 border-2 border-slate-500 p-5 rounded-xl' noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Please choose input a email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                        <Form.Control.Feedback type="invalid">
                            Please choose a Password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <p>Create new account? <Link to="/registration" >Registration here</Link></p>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <p>{error.message}{SignInLoading}</p>
                </Form>
            </div>
        </div>
    );
};

export default Login;