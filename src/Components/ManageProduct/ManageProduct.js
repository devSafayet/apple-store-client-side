import React from 'react';

const ManageProduct = ({ applestore, hendeldelete }) => {
    // console.log(applestore);
    return (
        // <table className='table table-dark table-striped'>
        //     <tr className=''>
        //         <th scope="col">{applestore.quantity}</th>
        //         <td scope="col">{applestore.name}</td>
        //         <td scope="col">{applestore.suppliername}</td>
        //         <td className='text-primary pointer' onClick={() => hendeldelete(applestore._id)} role={"button"}>delete</td>
        //     </tr>
        // </table>
        <table className="table">
            <thead>
                <tr>
                    <td scope="col">{applestore.quantity}</td>
                    <th scope="col">{applestore.name}</th>
                    <th scope="col">{applestore.suppliername}</th>
                    <td className='text-primary pointer' onClick={() => hendeldelete(applestore._id)} role={"button"}>delete</td>
                </tr>
            </thead>
        </table>
    );
};

export default ManageProduct;