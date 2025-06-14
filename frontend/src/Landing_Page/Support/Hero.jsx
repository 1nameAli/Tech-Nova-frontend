import React from "react";
import {Link} from "react-router-dom"
const Hero = () => {
  return (
    <div className="bg-primary text-white py-5">
      <div className="container">
        {/* Top Row */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold">Support Portal</h3>
          <Link href="#" className="text-white text-decoration-underline">
            Track Tickets
          </Link>
        </div>

        {/* Main Content */}
        <div className="row">
          {/* Left Side */}
          <div className="col-md-6 mb-4">
            <p className="fs-5">Search for an answer or browse help topics to create a ticket</p>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
            />
            <div className="d-flex flex-wrap gap-3">
              <Link to="#" className="text-white text-decoration-underline small">Track account opening</Link>
              <Link to="#" className="text-white text-decoration-underline small">Track segment activation</Link>
              <Link to="#" className="text-white text-decoration-underline small">Intraday</Link>
              <Link to="#" className="text-white text-decoration-underline small">Margins</Link>
              <Link to="#" className="text-white text-decoration-underline small">Kite user manual</Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6">
            <h4 className="fw-semibold">Featured</h4>
            <ol className="text-white">
              <li>
                <Link to="#" className="text-white text-decoration-underline">
                  Current Takeovers and Delisting – January 2024
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white text-decoration-underline">
                  Latest Intraday leverages – MIS & CO
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
