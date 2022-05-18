import React from 'react';
import { Carousel } from 'react-bootstrap';
import Items from '../Items/Items';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import slider1 from '../../../Images/slider(1).png';
import slider2 from '../../../Images/slider (2).png';
import slider3 from '../../../Images/slider-3.png';
import SendFeedback from '../SendFeedback/SendFeedback';

const Home = () => {
    return (
        <div>
            <div className='mt-5'>
                <Carousel className='w-100'>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider3}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
            <Items></Items>
            <CustomerFeedback></CustomerFeedback>
            <SendFeedback></SendFeedback>
        </div>
    );
};

export default Home;