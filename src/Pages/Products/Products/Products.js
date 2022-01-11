import React, { useEffect, useState } from 'react';
import DisplayUserProduct from '../DisplayUserProduct/DisplayUserProduct';


const Products = () => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        fetch('https://damp-coast-65795.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setValues(data));
    }, []);


    return (

        <div className="container pt-5">

            <div className="row">

                {/* product list */}
                {
                    values?.map(product => (<DisplayUserProduct
                        key={product._id}
                        product={product}

                    ></DisplayUserProduct>))

                }
            </div>
        </div>
    );


};

export default Products;