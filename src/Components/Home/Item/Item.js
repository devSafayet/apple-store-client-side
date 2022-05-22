import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GrUpdate } from "@react-icons/all-files/gr/GrUpdate";
import './Item.css';

const Item = ({ apple }) => {
    const navigate = useNavigate()
    console.log(apple);

    const hendelInventory = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='col-md-4 mb-3'>

            <div className="card h-100 shadow card-bg rounded-5" style={{ width: "19rem" }}>
                <img src={apple?.img} className="card-img-top card-img rounded-2 p-1" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center title-name">{apple?.name}</h5>
                    <p className="card-text text-center text-primary">{apple?.decreption}</p>
                    <div className='text-center'>
                        <p className='apple-price'>Price :{apple?.price}</p>
                        <p className='apple-quantity'>Quantity : {apple?.quantity}</p>
                    </div>
                    <p className='text-center text-success'>Supplier : {apple?.supliername}</p>
                    <div className="text-center">
                        <button onClick={() => hendelInventory(apple?._id)} className="btn btn-primary text-center apple-update">Update Products  <span><GrUpdate /></span> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;