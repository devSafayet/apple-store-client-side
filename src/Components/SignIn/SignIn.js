import React, { useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toast';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './SignIn.css';

const SignIn = () => {
    const EmailRef = useRef('');
    const PasswordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [showpass, setShowpass] = useState(false);

    let from = location.state?.from?.pathname || "/";

    let errorElement;
    // user log in with email and password 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    //password reset or forgot password
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );


    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const logInUser = (event) => {
        event.preventDefault();
        const email = EmailRef.current.value;
        const password = PasswordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const handelForgetPssword = async () => {
        const email = EmailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast("email sent");
        }
        else {
            toast('enter your email')
        }


    }
    return (
        <div className='login-container'>
            <div className='login-title text-primary text-center'>Sign In</div>
            <form className='login-form-full' onSubmit={logInUser}>
                <div>

                    <form className="login-form">
                        <input type="email" ref={EmailRef} required placeholder='Enter your Email' />

                        <input ref={PasswordRef} type={showpass ? "text" : "password"} required placeholder='Enter Password' />
                    </form>
                    <div className='mt-2 ps-2'>
                        <input type="checkbox" name="" id="" onClick={() => setShowpass(!showpass)} /> <span>See Password</span>
                    </div>


                    <p>
                        {
                            loading && <div className='spinner'><Spinner animation="border" variant="warning" /></div>
                        }
                    </p>
                    {errorElement}
                    <input className='submit-btn bg-primary' type="submit" value="Login" />
                </div>

                <div className='d-flex justify-content-around align-items-center'>
                    <div>
                        <Link className='form-link' to='/signup'>Create new account !  </Link>
                    </div>
                    <div>
                        <button className='form-link btn btn-link' onClick={handelForgetPssword}>Forgotten password?</button>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </form>
        </div>
    );
};

export default SignIn;