import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './Inventory.css';

const Inventory = () => {
    const { user } = useAuthState(auth)
    const { id } = useParams();
    const [apples, setApples] = useState();

    useEffect(() => {
        const url = `http://localhost:4000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setApples(data))
    }, [apples])

    if (!user) {
        <Loading></Loading>
    }
    let updatequantity = Number(apples?.quantity);


    const manageDelivary = () => {
        if (updatequantity > 0) {
            updatequantity = updatequantity - 1;

            const quantity = { updatequantity }

            console.log(quantity);

            const url = `http://localhost:4000/products/${id}`
            console.log(url);
            fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(quantity)

            })
                .then(res => res.json())
                .then(data => {
                    toast("update quantity");
                })

        }
        if (updatequantity <= 0) {
            const updatequantity = "stock Out"
            const quantity = { updatequantity }
            const url = `http://localhost:4000/products/${id}`
            console.log(url);
            fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(quantity)

            })
                .then(res => res.json())
                .then(data => {
                    toast("update quntity");
                })
        }
    }


    const addProduct = (event) => {
        event.preventDefault()
        const nowQuantity = Number(event.target.quantity.value);
        updatequantity = nowQuantity + updatequantity;
        const quantity = { updatequantity }
        console.log(quantity);

        const url = `http://localhost:4000/${id}`
        console.log(url);
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(quantity)

        })
            .then(res => res.json())
            .then(data => {
                console.log("success", data)
                toast("update quntity");
            })
    }
    return (
        <div className='inventory-main'>
            <div className='mt-5'>
                <div className=' my-3'>
                    <div className="card container text-center invrntory-card " style={{ width: "20rem" }} >
                        <img src={apples?.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text apple-price">price: {apples?.price}</p>
                            <p className='quantity'>quantity : {apples?.quantity}</p>
                            <p className='mcsuplier'>Suplier : {apples?.supliername}</p>
                            <p>Supliear email: {apples?.email}</p>
                        </div>
                        <div>
                            <button className='dellivary-Btn' onClick={manageDelivary}>delivered</button>

                        </div>
                        <div>
                            <form onSubmit={addProduct} className='m-5'>
                                <h5 className='apple-title'>Update Quantity</h5>
                                <input type="number" name='quantity' className='mb-3' />
                                <button className='submit-btn'>Store Product</button>
                                <Link to='/addProducts' className='btn btn-warning mt-2'>Add new product</Link>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Inventory;