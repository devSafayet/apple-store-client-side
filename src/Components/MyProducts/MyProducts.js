import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyProducts.css';

const MyProducts = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://limitless-fortress-44672.herokuapp.com/myitem/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [user])

    return (
        <div style={{ height: "100%" }}>
            <div className='container'>
                <h4 className='text-center m-5 text-primary'>This is My Products</h4>
                <div className='row container card-bg'>
                    {
                        products?.map(product => <div className='col-md-4'>
                            <div class="card text-center align-items-center mb-3" style={{ width: "18rem" }}>
                                <img src={product?.img} className="card-img-top rounded-3 p-1" style={{ height: "200px" }} alt="..." />
                                <div class="card-body">
                                    <h5 className="card-title title-name">{product?.name}</h5>
                                    <p className="card-text text-primary">{product?.decreption}</p>
                                </div>
                                <div className='text-center'>
                                    <p className='apple-price'>Price :{product.price}</p>
                                    <p className='apple-quantity'>Quantity : {product.quantity}</p>
                                </div>


                                <div class="card-body">
                                    <Link to='/manageProduct' className=" btn btn-success">Manage Product</Link> <br /> <br />
                                    <Link to='/addProducts' className="btn btn-primary">Add new Product</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProducts;