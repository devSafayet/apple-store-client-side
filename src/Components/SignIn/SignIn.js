import React, { useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toast';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialMedia from '../SocialMedia/SocialMedia';
import './SignIn.css';

const SignIn = () => {
    const [showpass, setShowpass] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    const EmailRef = useRef('');
    const PasswordRef = useRef('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const from = location.state?.from?.pathname || "/";

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const logInUser = event => {
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)

    }

    const hendelForgetPssword = async () => {
        const email = EmailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("email sent");
        }
        else {
            toast('enter your email')
        }

    }


    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {

        console.log(user.user.email);

        const url = `http://localhost:4000/signin`

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user.user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data.token);
                localStorage.setItem("accessToken", data.token) // send token to localsotorage

                navigate(from, { replace: true });
            });


    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    return (
        <div className='signin-container'>
            <div className='signin-title text-primary text-center'>Sign In</div>
            <form className='signin-form-full' onSubmit={logInUser}>
                <div>
                    <form className="signin-form">
                        <input type="email" name="email" ref={EmailRef} id="" required placeholder='Enter your Email' />

                        <input name="password" type={showpass ? "text" : "password"} id="" required placeholder='Enter Password' />
                    </form>

                    <div className='mt-2 ps-2'>
                        <input type="checkbox" name="" id="" onClick={() => setShowpass(!showpass)} /> <span>See Password.</span>
                    </div>

                    <p>
                        {
                            loading && <div className='spinner'><Spinner animation="border" variant="warning" /></div>
                        }
                    </p>
                    {errorElement}
                    <input className='submit-btn bg-primary' type="submit" value="signin" />
                </div>
                <div className='d-flex justify-content-around align-items-center'>
                    <div>
                        <Link className='form-link' to='/signup'>Create new account !  </Link>
                    </div>
                    <div>
                        <button className='form-link btn btn-link' onClick={hendelForgetPssword}>Forget Password !</button>

                    </div>
                </div>


                <SocialMedia></SocialMedia>
                <ToastContainer></ToastContainer>

            </form>
        </div>
    );
};

export default SignIn;