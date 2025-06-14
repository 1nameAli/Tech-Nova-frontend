import React from 'react';
 import {Link} from "react-router-dom"
const Education = () => {
  return (
    <div className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* Image and Links */}
          <div className="col-md-6 text-center">
            <img
              src="media/images/education.svg"
              alt="education"
              className="img-fluid mb-4"
            />
            
          </div>

          {/* Text Content */}
          <div className="col-md-6">
            <div className="mb-4">
              <h2 className="fw-bold mb-2">Free and open market education</h2>
              <p className="text-muted">
                Varsity — the largest online stock market education book in the world,
                covering everything from the basics to advanced trading.
              </p>
              <Link to="#" className="text-primary text-decoration-none fw-semibold">
                Explore Varsity <i className="fa-solid fa-arrow-right ms-1"></i>
              </Link>
            </div>

            <div>
              <h5 className="fw-semibold">Ask & Learn Together</h5>
              <p className="text-muted">
                TradingQ&A — the most active trading and investment community in Pakistan
                for all your market-related queries.
              </p>
              <Link to="#" className="text-primary text-decoration-none fw-semibold">
                Visit TradingQ&A <i className="fa-solid fa-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;
