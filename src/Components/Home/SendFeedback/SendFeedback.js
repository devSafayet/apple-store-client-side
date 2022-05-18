import React from 'react';
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import './SendFeedback.css';

const SendFeedback = () => {
    return (
        <div className='container send-feedback-Container p-4'>
            <h4 className='text-center m-3'>Send Your Feedback</h4>
            <form className='text-center'>
                <textarea type="text" className='mb-2 ps-2 rounded w-50' name="text-area" id="" placeholder='Enter Your Description' required /><br></br>
                <input type="text" className='mb-2 ps-2 rounded w-50' placeholder='Enter Your Email' required /><br></br>
                <input type="text" className='mb-2 ps-2 rounded w-50' placeholder='Enter Your Name' required /> <br></br>
                <input type="text" className='mb-2 ps-2 rounded w-50' name="" id="" placeholder='Send your Feedback Rate' required /><br></br> <br />
                <button type="submit" className='btn btn-primary'>Send Your Feedback <FaArrowRight /></button>
            </form>
        </div>
    );
};

export default SendFeedback;