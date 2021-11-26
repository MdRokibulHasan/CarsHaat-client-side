import React, { useEffect, useState } from 'react';
import OrderDisplay from './OrderDisplay/OrderDisplay';
const ManageOrder = () => {
    const [order, setOrder] = useState();
    useEffect(() => {
        fetch('https://damp-coast-65795.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);
    return (
        <div className="mt-5">
            <h1>Manage Order</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Products</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        order?.map((iteam) => (<OrderDisplay
                            key={iteam._id}
                            iteam={iteam}
                        > </OrderDisplay>))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageOrder;