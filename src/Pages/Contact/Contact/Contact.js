import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h3 className="text-center mt-5">Get In Touch</h3>
      <div>

      </div>

      <div className="row py-5">
        <div className="col-lg-5 col-md-5 col-12">
          <img src={`https://i.ibb.co/GtWb4Dn/undraw-Popular-re-mlfe.png`} alt="" height="300px" />
        </div>
        <div className="col-lg-5 col-md-5 col-12">
          <div class="form-group">
            <textarea
              class="form-control"
              placeholder="Enter Messages"
              //   onChange={handelMessages}
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>

            <div class="row my-3">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  //   onChange={hadelname}
                  placeholder="Enter Name "
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  //   onChange={handelemail}
                  placeholder="Enter Email"
                />
              </div>
            </div>

            <input
              type="text"
              className="my-3 form-control"
              //   onChange={handelSubject}
              placeholder="Enter Subject"
            />
            <div className="getintouchtitle py-2">
              <button
                type="button"
                // onChange={handelsentdata}
                class="btn btn-primary btn-lg w-25"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
