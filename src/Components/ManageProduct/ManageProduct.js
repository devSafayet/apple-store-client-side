import React from 'react';

const ManageProduct = ({ applestore, hendeldelete }) => {
    // console.log(applestore);
    return (
        <tbody >
            <tr>
                <td scope="col">{applestore.quantity}</td>
                <td scope="col">{applestore.name}</td>
                <td scope="col">{applestore.supliername}</td>
                {/* <th scope="col">{applestore.suppliername}</th> */}
                <td className='text-primary pointer' onClick={() => hendeldelete(applestore._id)} role={"button"}>delete</td>
            </tr>
        </tbody>

    );
};

export default ManageProduct;