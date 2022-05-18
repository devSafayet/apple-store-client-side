import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='text-center text-danger error-section mt-3'>
            <h1>oooops! This Page is Not Found! 404</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdAQ8iTjm4itAUjvKdzcq3wFlIOnKeiUeVHn1y6Ij0J93AhR_nHSlDB6d0vDIn_ceKGM&usqp=CAU" alt="" />
        </div>
    );
};

export default NotFound;