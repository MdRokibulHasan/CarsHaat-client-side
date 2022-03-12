import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import img1 from "../../../images/Jaguar2.jpg"
import img2 from "../../../images/bmw.jpg"
import img3 from "../../../images/rolls-royce.jpg"

import './HomeBanner.css'
// import { Link } from "react-router-dom";
const HomeBanner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              style={{
                minHeight: "15%",
                maxHeight: 400,
              }}
              alt="..."
            />
            <div className="carousel-caption d-flex align-items-center justify-content-center">
              <div>
                <h1 data-aos="fade-down" data-aos-delay="200" style={{ color: "#42a5f5" }}>
                  {" "}
                  About Us
                  {" "}
                </h1>

                <p
                  className="text-white fs-5"
                  data-aos="fade-up"
                  data-aos-delay="220"
                >

                </p>

                <div>
                  <Link to="/about" href="#">
                    <button
                      className="button-read-more"
                      data-aos="fade-right"
                      data-aos-delay="250"
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              style={{
                minHeight: "15%",
                maxHeight: 400,
              }}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-flex align-items-center justify-content-center">
              <div>
                <h1 data-aos="fade-down" data-aos-delay="200" style={{ color: "#42a5f5" }}>
                  Our Best Product
                </h1>
                <p
                  className="text-white fs-5"
                  data-aos="fade-up"
                  data-aos-delay="220"
                >

                </p>

                <div>
                  <Link to="#" href="#">
                    <button
                      className="button-read-more"
                      data-aos="fade-right"
                      data-aos-delay="250"
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              style={{
                minHeight: "15%",
                maxHeight: 400,
              }}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-flex align-items-center justify-content-center">
              <div>
                <h1 style={{ color: "#42a5f5" }}>Best Sells</h1>
                <p className="text-white fs-5">

                </p>

                <div>
                  <Link to="#" href="#">
                    <button
                      className="button-read-more"
                      data-aos="fade-right"
                      data-aos-delay="250"
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
