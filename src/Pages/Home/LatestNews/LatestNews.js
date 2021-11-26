import React from "react";

import img from '../../../images/rolls-royce.jpg'
const LatestNews = () => {
  return (
    <div >
      <h3 className="text-center mt-5"> Best Sell Our Products</h3>

      <p className="text-center">We strive to get our best products to you</p>
      <div>
        <div className="container py-3">
          <div className="row py-3">
            <div className="col-md-4 col-md-4 col-4 ">
              <div class="card">
                <img class="card-img-top" src={img} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title text-dark">Rolls-Royce</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-md-4 col-4 ">
              <div class="card">
                <img class="card-img-top" src={img} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title text-dark">Rolls-Royce</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>


            <div className="col-md-4 col-md-4 col-4 ">
              <div class="card">
                <img class="card-img-top" src={img} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title text-dark">Rolls-Royce</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default LatestNews;
