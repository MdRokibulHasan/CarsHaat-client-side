import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();
  console.log(loginData);
  const location = useLocation();
  const history = useHistory();
  const handelonchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newlogindata = { ...loginData };
    newlogindata[field] = value;
    setLoginData(newlogindata);
    // console.log(value);
  };

  const handelLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault()
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center ">
        <div className="sign-in shadow-lg my-5  px-5" style={{ height: "400px" }}>
          <h3 className="text-center pt-5"> LOGIN TO Car-Haat</h3>
          <hr className="w-75 ms-auto me-auto" />


          {!isLoading && <form onSubmit={handelLoginSubmit}>

            <div className="form-group my-3">
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
            <div className="form-group">
              <input
                type="password"
                name="password"
                onChange={handelonchange}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="my-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>

            <NavLink to="/registration">
              <button>new User ? Please Register</button>
            </NavLink>
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

export default Login;
