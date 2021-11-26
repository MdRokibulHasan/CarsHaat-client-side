import React, { useEffect, useState } from 'react';

const OrderDisplay = (props) => {
    const [order, setOrder] = useState();
    const { _id, title, name, email, phone, address, status } = props.iteam

    // console.log(props.sl);
    useEffect(() => {
        fetch('https://damp-coast-65795.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);
    // console.log(order);

    const getStatus = (status) => {

        return (status == 1) ? "Pendding" : "Shipping"

    }
    // console.log(status);
    function handleDelete(id) {
        // console.log(id);
        const confirmation = window.confirm('Are you sure to Delete!!')
        if (confirmation) {
            const url = `https://damp-coast-65795.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'delete',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount == 1) {
                        alert('Delete Successfully')
                        const remaining = order.filter(iteam => iteam._id !== id);
                        setOrder(remaining);
                    }
                    else {
                        alert('Something is wrong');
                    }
                });
        }

    }

    function handleConfirm(id) {
        const confirmation = window.confirm('Are you sure to Confirm!!')
        if (confirmation) {
            fetch(`https://damp-coast-65795.herokuapp.com/order/${id}`, {
                method: "put"
            })
                .then(res => res.json())
                .then(data => {

                })
        }
    }
    return (
        <tr>
            <td></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{title}</td>
            <td>{address}</td>
            <td>{getStatus(status)}</td>
            <td>
                <button onClick={() => handleConfirm(_id)}  >Confirm</button>
                <button onClick={() => handleDelete(_id)}  >Delete</button>

            </td>
        </tr>
    );
};

export default OrderDisplay;