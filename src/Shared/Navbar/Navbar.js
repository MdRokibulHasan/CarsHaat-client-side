import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './Navbar.css';
const Navbar = () => {
  const { user, logOut, admin } = useAuth();
  // console.log(admin);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand " >
            <span
              style={{
                color: "#EE5624",
              }}
            >
              {" "}
              Cars
            </span>
            Haat
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/home">
                <li className="nav-item">
                  <a className="nav-link">Home</a>
                </li>
              </Link>
              <Link to="/about">
                <li className="nav-item">
                  <a className="nav-link">About</a>
                </li>
              </Link>
              <Link to="/products">
                <li className="nav-item">
                  <a className="nav-link">Products</a>
                </li>
              </Link>

              <Link to="/contact">
                <li className="nav-item">
                  <a className="nav-link">Contact</a>
                </li>
              </Link>
              {
                user?.email && <Link to="/dashboard">
                  <li className="nav-item">
                    <a className="nav-link">Dashboard</a>
                  </li>
                </Link>
              }

            </ul>

            {user?.email ? (
              <button onClick={logOut}>LogOut </button>
            ) : (
              <Link to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
