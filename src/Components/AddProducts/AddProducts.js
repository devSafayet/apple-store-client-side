import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toast';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProducts = () => {
    const [user] = useAuthState(auth);
    const navigae = useNavigate()
    // console.log(user.email);

    const addProduct = event => {
        event.preventDefault()

        const email = event?.target?.email?.value;
        const name = event?.target?.productname?.value;
        const supliername = event?.target?.supplier?.value;
        const price = event?.target?.price?.value;
        const quantity = event?.target?.quantity?.value;
        const decreption = event?.target?.description?.value;
        const img = event?.target?.img?.value;

        const product = {
            email, name, price, quantity, decreption, img, supliername
        }
        console.log(product);

        const url = "http://localhost:4000/products";

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                // 'authorization': `${user.email} ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                // toast(data.success)
                event.target.reset()
            });



    }
    return (
        <div className='signin-container text-center'>
            <div className='signin-title text-primary text-center'>Add Your Product</div>

            <form onSubmit={addProduct}>
                <div className=''>

                    <div className="signin-form">
                        <input type="email" name="email" id="" required placeholder='' value={user.email} />

                        <input type="text" name="supplier" id="" required placeholder='Enter the Supplier name' />

                        <input type="text" name="productname" id="" required placeholder='Enter Name or model' />

                        <input type="text" name="price" id="" required placeholder='Enter price' />

                        <input type="text" name="quantity" id="" required placeholder='Enter Quantity' />

                        <input type="text" name="description" id="" required placeholder='Enter simple Description' />

                        <input type="text" name="img" id="" required placeholder='image URL Link' />
                    </div>

                    <input className='submit-btn bg-warning' type="submit" value="Add your Product" />
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProducts;