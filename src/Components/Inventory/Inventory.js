import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
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
                    toast("Updated Quantity.");
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
                    toast("Updated Quantity.");
                })
        }
    }


    const addProduct = (event) => {
        event.preventDefault()
        const nowQuantity = Number(event.target.quantity.value);
        updatequantity = nowQuantity + updatequantity;
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
                console.log("success", data)
                toast("Updated Quantity.");
            })
    }
    return (
        <div className='inventory-main'>
            <div className='mt-5'>
                <div className=' my-3'>
                    <div className="card container text-center inventory-card " style={{ width: "20rem" }} >
                        <img src={apples?.img} className="rounded" alt="..." />
                        <div className="card-body">
                            <p className="card-text apple-price">Price: {apples?.price}</p>
                            <p className='quantity'>Quantity : {apples?.quantity}</p>
                            <p className='supplier'>Supplier : {apples?.supliername}</p>
                            <p>Supplier E-mail: <span className='supplier-email'>{apples?.email} </span> </p>
                        </div>
                        <div>
                            <button className='delivery-Btn' onClick={manageDelivary}>Delivered</button>

                        </div>
                        <div>
                            <form onSubmit={addProduct} className='m-5'>
                                <h5 className='mctitle'>Update Quantity</h5>
                                <input type="number" name='quantity' className='mb-3' />
                                <button className='button'>Store Product</button>
                                <Link to='/addProducts' className='btn btn-warning mt-2'>Add new product</Link>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <ToastContainer></ToastContainer>
        </div >
    );
};

export default Inventory;