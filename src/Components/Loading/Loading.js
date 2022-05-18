import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css';

const Loading = () => {
    return (
        <div className='container text-center  align-middle loading'>
            <Spinner animation="border" variant="info" />
        </div>
    );
};

export default Loading;