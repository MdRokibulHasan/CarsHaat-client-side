import React, { useEffect, useState } from 'react';
import Advertise from '../../Advertise/Advertise';
import UserReview from '../../Dashboard/UserReview/UserReview';
import UserShowReview from '../../Dashboard/UserShowReview/UserShowReview';
import DisplayUserProduct from '../../Products/DisplayUserProduct/DisplayUserProduct';
import Products from '../../Products/Products/Products';
import HomeBanner from '../HomeBanner/HomeBanner';
import LatestNews from '../LatestNews/LatestNews';

const Home = () => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        fetch('https://damp-coast-65795.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setValues(data));
    }, []);
    return (
        <div>

            <HomeBanner></HomeBanner>

            <div className="container mt-3">
                <h1 className="text-center" style={{ color: "#42a5f5" }}>Our Service</h1>
                <p className="text-center">We Provide our Best Service</p>
                <div className="d-flex justify-content-around m-3 gx-3">
                    <div class="card text-center">

                        <div class="card-body">
                            <div >
                                <i class="fas fa-car-side fa-3x"></i>
                            </div>
                            <h5 class="card-title text-dark">Free Driving Course</h5>

                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>

                    </div>
                    <div class="card text-center">

                        <div class="card-body">
                            <div><i class="fas fa-tools fa-3x"></i></div>
                            <h5 class="card-title text-dark">Free Servicing</h5>

                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>

                    </div>
                </div>

            </div>
            <div className="mt-3">
                <h1 className=" text-center" style={{ color: "#42a5f5" }}>Our Best Product</h1>
                <p></p>
                {
                    <div className="container pt-5">

                        <div className="row">


                            {
                                values.slice(0, 6)?.map(product => (<DisplayUserProduct
                                    key={product._id}
                                    product={product}

                                ></DisplayUserProduct>))

                            }
                        </div>
                    </div>
                }
            </div>

            <LatestNews></LatestNews>
            <div>
                <h1 className=" text-center" style={{ color: "#42a5f5" }}>Ours Costomer Feedback</h1>
                <UserShowReview></UserShowReview>
            </div>
        </div>
    );
};

export default Home;