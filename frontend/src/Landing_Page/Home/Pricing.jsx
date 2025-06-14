import React from "react";
import {Link} from "react-router-dom"
const Pricing = () => {
  return (
    <div className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Section */}
          <div className="col-md-4">
            <h1 className="fw-bold mb-3">Unbeatable Pricing</h1>
            <p className="text-muted mb-4">
              We pioneered the concept of discount broking and price transparency
              in Pakistan — flat fees and no hidden charges.
            </p>
            <Link to="#" className="text-primary fw-semibold text-decoration-none">
              See Pricing <i className="fa-solid fa-arrow-right ms-1"></i>
            </Link>
          </div>

          {/* Spacer (Optional) */}
          <div className="col-md-2 d-none d-md-block"></div>

          {/* Pricing Boxes */}
          <div className="col-md-6">
            <div className="row text-center g-4">
              <div className="col-sm-6">
                <div className="border rounded p-4 h-100 bg-white shadow-sm">
                  <h2 className="text-success fw-bold">Rs 0</h2>
                  <p className="text-muted">
                    Free equity delivery and direct mutual funds
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="border rounded p-4 h-100 bg-white shadow-sm">
                  <h2 className="text-success fw-bold">Rs 20</h2>
                  <p className="text-muted">Intraday and F&amp;O</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
