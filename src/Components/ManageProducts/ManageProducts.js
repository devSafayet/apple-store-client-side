import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import './ManageProducts.css';

const ManageProducts = () => {
    const [applestores, setApplestores] = useState([]);

    useEffect(() => {
        const url = "http://localhost:4000/products";

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setApplestores(data)
            })
    }, [])

    const hendeldelete = id => {

        const procide = window.confirm("Are you Sure? You want to Delete?")
        if (procide) {
            console.log(id);
            const url = `http://localhost:4000/products/${id}`
            console.log(url);
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

                <table class="table table-dark table-striped table-style manage-main">
                    <thead>
                        <tr>
                            <th scope="col">Quantity</th>
                            <th scope="col">Model</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applestores.map(applestore => <ManageProduct key={applestore._id} applestore={applestore} hendeldelete={hendeldelete}></ManageProduct>)
                        }

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ManageProducts;