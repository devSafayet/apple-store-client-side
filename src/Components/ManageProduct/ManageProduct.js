import React from 'react';

const ManageProduct = ({ applestore, hendeldelete }) => {
    // console.log(applestore);
    return (
        <div>
            <tr className=''>
                <th scope="row">{applestore.quantity}</th>
                <td>{applestore.name}</td>
                <td>{applestore.suppliername}</td>
                <td className='text-primary pointer' onClick={() => hendeldelete(applestore._id)} role={"button"}>delete</td>
            </tr>
        </div>
    );
};

export default ManageProduct;