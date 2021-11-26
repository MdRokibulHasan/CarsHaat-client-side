import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const UserReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://damp-coast-65795.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added review successfully');
                    reset();
                }
            })

    }
    return (
        <div className="container " style={{ marginTop: 100 }}>
            <div className="row mt-5" >
                <div className="col-lg-6 col-md-6 col-12">
                    <div class="card text-center">
                        <div class="card-body">
                            <p class="card-text text-center">Your Support</p>

                            <div className="info">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("name")} defaultValue={user?.displayName} />
                                    <input type="email" {...register("email")} defaultValue={user?.email} />
                                    <input type="number" {...register("rating")} placeholder="Rating 1 to 5 any number" />
                                    <textarea type="text" {...register("sDescription")} placeholder="Short Description" style={{ width: '150% ' }}></textarea>

                                    <input type="submit" />
                                </form>

                            </div>

                            {/* <div>
                                <img src="" alt="profile-pic" />
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <img src={`https://i.ibb.co/xLJwc8j/undraw-Filing-system-re-56h6.png`} alt="" height="200px" />

                </div>

            </div>
        </div>
    );
};

export default UserReview;