import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-area'>
            <div>
                <h3 className='text-success '>Apple Store</h3>
            </div>
            <div className='footer-text-area'>
                <div>
                    <p>About Apple Store</p>
                    <p>Sign Up to get Offer</p>
                    <p>Get Helps</p>
                </div>
                <div>
                    <p>Add your comment</p>
                    <p>Read FAQs</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;