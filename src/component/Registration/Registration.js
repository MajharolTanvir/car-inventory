import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import { toast } from 'react-toastify';


const Registration = () => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate('')
    const [createUserWithEmailAndPassword, User] = useCreateUserWithEmailAndPassword(auth);

    if (User) {
        navigate('/')
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }


    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Please enter the same password')
            return;
        }
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);

        createUserWithEmailAndPassword(email, password);
        toast("Check your email");
    }


    return (
        <div>
            <h2 className='text-center my-4'>Registration here</h2>
            <Form noValidate validated={validated} className='max-w-xl mx-auto my-10 border-2 border-slate-500 p-5 rounded-xl' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Please choose input a email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" name='password' placeholder="Password" required />
                    <Form.Control.Feedback type="invalid">
                        Please choose a Password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="password" name='confirm-password' placeholder="Confirm Password" required />
                    <Form.Control.Feedback type="invalid">
                        Please choose a confirm Password.
                    </Form.Control.Feedback>
                </Form.Group>
                <p>
                    Already have an account? <Link to='/login'>Login here</Link>
                </p>
                {error ? <p style={{ color: 'red' }}>Error: {error}</p> : ''}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Registration;