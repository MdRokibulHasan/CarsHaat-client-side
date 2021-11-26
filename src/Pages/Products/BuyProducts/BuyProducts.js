import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './BuyProducts.css';

const BuyProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const { user } = useAuth();
    // console.log('user id', user);
    const [details, setDetails] = useState([])
    const [specificDetail, setSpecificDetail] = useState({})



    useEffect(() =>
        fetch("https://damp-coast-65795.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setDetails(data))

        , []);

    useEffect(() => {
        if (details.length > 0) {
            const matchedData = details?.find(detail => detail._id == id)
            setSpecificDetail(matchedData);
        }

    }

        , [details]);
    // console.log(specificDetail);

    const { title, payment } = specificDetail;

    // const { displayName, email } = user;

    const onSubmit = data => {
        console.log(data);
        axios.post('https://damp-coast-65795.herokuapp.com/order', { ...{ title, payment }, ...data, 'status': 1 })
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

    }
    return (
        <div className="container py-3">
            <h1 className="text-uppercase text-center p-3"> Buy Products </h1>
            <div className="row">
                <div className="col-md-7">
                    <div>
                        <div class="card">

                            <img src={specificDetail.thabnil} class="card-img-top" alt="..." height='260px' />
                            <div class="card-body">
                                <h5 class="card-title text-dark">{specificDetail.title}
                                </h5>
                                <div>
                                    <span> Price </span> <span > {specificDetail.payment} </span>
                                </div>

                                <div>
                                    <span> </span> <span > {specificDetail.discription} </span>
                                </div>


                            </div>
                            <div class="card-footer">

                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-5">
                    {/* Buy car  */}

                    <div className="info">
                        <h3>  Seller details </h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name")} defaultValue={user?.displayName} />
                            <input type="email" {...register("email")} defaultValue={user?.email} />
                            <input type="text" {...register("address")} placeholder="Address" />
                            <input type="number" {...register("phone")} placeholder="Phone" />

                            <input type="submit" />
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BuyProducts;