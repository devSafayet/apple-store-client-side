import React, { useRef, useState } from 'react';
import { Spinner, ToastContainer } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialMedia from '../SocialMedia/SocialMedia';
import './SignUp.css';

const SignUp = () => {
    const [showpass, setShowpass] = useState(false);
    const [error, setError] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        passerror,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const hendelSignup = event => {
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmpassword = event.target.confirmpassword.value;

        if (password !== confirmpassword) {
            setError('password does not match')
        }

        createUserWithEmailAndPassword(email, password)


    }
    if (user) {
        navigate(from, { replace: true })
        console.log(user);
    }
    return (
        <div className='signin-container'>
            <div className='signin-title text-primary text-center'>Sign Up</div>
            <form onSubmit={hendelSignup}>
                <div>
                    <form className="signin-form">
                        <input type="text" name="name" id="" required placeholder='Enter your Name' />

                        <input type="email" name="email" id="" required placeholder='Enter your Email' />

                        <input name="password" type={showpass ? "text" : "password"} id="" placeholder='Enter Password' required />


                        <input name="confirmpassword" type={showpass ? "text" : "password"} id="" required placeholder='Enter Confirm Password' />

                    </form>

                    <div className='mt-2 ps-2'>
                        <input type="checkbox" name="" id="" onClick={() => setShowpass(!showpass)} /> <span>See All Password</span>
                    </div>

                    <p>
                        {
                            loading && <div className='spinner'><Spinner animation="border" variant="warning" /></div>
                        }
                    </p>

                    <p className='text-center text-danger'>{error}</p>

                    <input className='submit-btn bg-primary' type="submit" value="signup" />
                </div>
                <div className='d-flex justify-content-around align-items-center'>
                    <div>
                        Already have an Account? <Link className='form-link' to='/signin'>Sign In</Link>
                    </div>

                </div>


                <SocialMedia></SocialMedia>
                <ToastContainer />

            </form>
        </div>
    );
};

export default SignUp;