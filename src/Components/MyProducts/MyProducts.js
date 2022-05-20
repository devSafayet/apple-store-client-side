// import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProducts = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {

        const getMyItems = async () => {
            const email = user?.email;
            console.log(email);
            const url = `http://localhost:4000/product?email=${email}`


            try {
                /* const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setProducts(data); */
            }
            catch (error) {
                toast(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/signin')
                }
            }

        }
        getMyItems()

    }, [user])
    return (
        <div style={{ height: "100%" }}>
            <div className='container'>
                <h4 className='text-center m-3 text-success'>This is My Products</h4>
                <div className='row container'>
                    {
                        products?.map(product => <div className='col-md-4'>
                            <div class="card text-center align-items-center mb-3" style={{ width: "18rem" }}>
                                <img src={product?.img} class="card-img-top" style={{ height: "200px" }} alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-primary">{product?.name}</h5>
                                    <p class="card-text text-info">{product?.decreption}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item text-danger">Price : {product.price}</li>
                                    <li class="list-group-item text-warning">total stoted : {product.quantity}</li>
                                </ul>
                                <div class="card-body">
                                    <Link to='/manageProduct' class="card-link text-decoration-none fw-bold text-info">Manage Product</Link>
                                    <Link to='/manageProduct' class="card-link text-decoration-none text-success fw-bold">Add new Product</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default MyProducts;