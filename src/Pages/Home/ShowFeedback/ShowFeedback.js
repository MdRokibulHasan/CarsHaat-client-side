import React, { useEffect, useState } from 'react';

const ShowFeedback = () => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        fetch('https://damp-coast-65795.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setValues(data));
    }, []);


    return (
        <div>

        </div>
    );
};

export default ShowFeedback;