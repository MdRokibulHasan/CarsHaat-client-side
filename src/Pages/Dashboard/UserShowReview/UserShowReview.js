import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const UserShowReview = () => {
    const [order, setOrder] = useState();
    useEffect(() => {
        fetch('https://damp-coast-65795.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);

    return (
        <div className="container">
            <div className="row">
                {
                    order?.map(pd => {
                        const { rating, sDescription, name } = pd
                        return (<div className="col-lg-4 col-md-4 col-12">
                            <div class="card text-center m-2" style={{ heigth: "20px" }}>
                                <div class="card-body">
                                    <h4>
                                        <Rating
                                            initialRating={rating}
                                            emptySymbol="far fa-star text-warning "
                                            fullSymbol="fas fa-star text-warning "
                                            readonly
                                        />
                                    </h4>

                                    <p class="card-text text-center">{name}</p>

                                    <div>
                                        <p className="text-center"> {sDescription} </p>
                                    </div>


                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
    );
};

export default UserShowReview;