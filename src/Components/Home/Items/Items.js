import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const [apples, setApples] = useState([]);

    useEffect(() => {
        const url = "http://localhost:4000/products";


        fetch(url)
            .then(res => res.json())
            .then(data => setApples(data))
    }, [])
    const newApples = apples.slice(0, 6)
    return (
        <div className='mt-5 p-3'>
            <h3 className='text-center mb-3  text-success'>Collection of Apple Store</h3>
            <div className='row storeCollections'>
                {
                    newApples.map(apple => <Item key={apple?._id} apple={apple}></Item>)
                }
            </div>
        </div>
    );
};

export default Items;