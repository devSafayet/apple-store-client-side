import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './CustomerFeedback.css';

const CustomerFeedback = () => {
    const [feedback, setFeedback] = useState([])

    useEffect(() => {
        fetch('customer.json')
            .then(res => res.json())
            .then(data => setFeedback(data))
    }, [])
    return (
        <div className='container feedback-container mt-md-5'>
            <h3 className='text-center my-md-2 text-warning'>This is Customer Feedback Section</h3>

            <div className='row container text-center align-center'>
                {
                    feedback.map(feedback => <div className='col-md-4 feedback-container' key={feedback.id}>
                        <Card className='align-items-center m-md-3 m-sm-1' style={{ width: '280px', height: "300px", marginRight: "5px" }}>
                            <div className='background-Effect'>
                                <Card.Img className='card-img-feedback' variant="top" src={feedback.img} />
                                <Card.Body>
                                    <Card.Title>{feedback.name}</Card.Title>
                                    <Card.Text>
                                        {feedback.comment}
                                    </Card.Text>
                                    <p className='text-warning'>{feedback.star}</p>
                                </Card.Body>
                            </div>
                        </Card>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CustomerFeedback;