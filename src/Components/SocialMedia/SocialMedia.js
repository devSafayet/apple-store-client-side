import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../Images/google.png';

const SocialMedia = () => {
    const location = useLocation();
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

    if (googleUser) {
        navigate(from, { replace: true })

    }
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className="bg-primary w-25"></div>
                <p className='mt-3 px-2'>Or</p>
                <div style={{ height: '1px' }} className="bg-primary w-25"></div>
            </div>

            <button onClick={() => signInWithGoogle()} className='form-btn-text my-2 text-primary' type="submit">
                <div className='img-google'>
                    <span><small><img src={google} alt="" /></small> Sign In with Google</span>
                </div>
            </button>

        </div>
    );
};

export default SocialMedia;