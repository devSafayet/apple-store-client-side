import React from 'react';
import { Carousel } from 'react-bootstrap';
import Items from '../Items/Items';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';

const Home = () => {
    return (
        <div>
            <div className='mt-5'>
                <Carousel className='w-100'>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://ibb.co/sQRNvFc"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://ibb.co/FxD9Zxy"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://ibb.co/BVL52T3"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
            <Items></Items>
            <CustomerFeedback></CustomerFeedback>
        </div>
    );
};

export default Home;