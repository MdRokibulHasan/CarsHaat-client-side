import { getAuth } from "@firebase/auth";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const Registration = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const auth = getAuth();
  const { user, registerUser, isLoading, authError } = useAuth();
  console.log(registerUser);
  const handelonchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newlogindata = { ...loginData };
    newlogindata[field] = value;
    setLoginData(newlogindata);
    console.log(newlogindata);
  };

  const handelloginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Please password did not match ");
      return;
    }

    registerUser(loginData.email, loginData.password, loginData.name, history);

    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center ">
        <div className="sign-in shadow-lg my-5  px-5" style={{ height: "420px" }}>
          <h3 className="text-center pt-5"> Rigister TO Car-Haat</h3>
          <hr className="w-75 ms-auto me-auto" />
          {!isLoading && <form onSubmit={handelloginSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                name="name"
                onChange={handelonchange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                onChange={handelonchange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group my-3">
              <input
                type="password"
                name="password"
                onChange={handelonchange}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password2"
                onChange={handelonchange}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Re-Type Password"
              />
            </div>
            <div className="my-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div>
              <NavLink to="/login">
                <button>Alredy Register ? Please Login </button>
              </NavLink>
            </div>
          </form>}
          {isLoading && <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>}
          {
            user?.email && <div class="alert alert-success" role="alert">
              User Register successful!
            </div>
          }
          {
            authError && <div class="alert alert-warning" role="alert">
              {authError}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Registration;
