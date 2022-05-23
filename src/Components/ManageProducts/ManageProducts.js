import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import './ManageProducts.css';

const ManageProducts = () => {
    const [applestores, setApplestores] = useState([]);

    useEffect(() => {
        const url = "https://limitless-fortress-44672.herokuapp.com/products";

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setApplestores(data)
            })
    }, [])

    const hendeldelete = id => {

        const procide = window.confirm("Are you Sure? You want to Delete?")
        if (procide) {
            const url = `https://limitless-fortress-44672.herokuapp.com/products/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        console.log("deleted");
                        const restproduct = applestores.filter(applestore => applestore._id !== id)
                        setApplestores(restproduct)
                    }
                })
        }

    }
    return (
        <div style={{ height: "100%" }}>
            <div className='container ps-3 h-100'>

                <table className="table table-style manage-main m-auto mt-5 mb-5 table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Quantity</th>
                            <th scope="col">Model</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>


                    {
                        applestores.map(applestore => <ManageProduct key={applestore._id} applestore={applestore} hendeldelete={hendeldelete}></ManageProduct>)
                    }

                </table>


            </div>
        </div>
    );
};

export default ManageProducts;