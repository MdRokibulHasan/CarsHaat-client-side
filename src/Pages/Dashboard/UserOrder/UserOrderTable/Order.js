import React, { useEffect, useState } from 'react';

const Order = (props) => {
    const [order, setOrder] = useState([]);
    const { _id, title, payment, status } = props.iteam

    // console.log(props.sl);

    useEffect(() => {
        fetch('https://frozen-fjord-73803.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);
    // console.log(order);

    const getStatus = (status) => {

        return (status == 1) ? "pendding" : "Shipping"

    }
    // console.log(status);

    const handleDelete = id => {
        const confirmation = window.confirm('Are you sure to Delete!!')
        // console.log(id);
        if (confirmation) {
            const url = `https://frozen-fjord-73803.herokuapp.com/order/${id}`;
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
                })
        }
    }

    return (
        <>
            <tr>
                <td></td>
                <td>{title}</td>
                <td>{payment}</td>
                <td>{getStatus(status)}</td>
                <td><button onClick={() => handleDelete(_id)}  >Cencle</button></td>
            </tr>

        </>
    );
};

export default Order;