import React from "react";
import {Link} from "react-router-dom"
const LeftSection = ({
  productImage,
  productTitile,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  ApplePlay,
}) => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={productImage}
            alt="Kite"
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="col-1"></div>
        {/* Text Section */}
        <div className="col-md-5">
          <h1 className="fw-bold text-dark mb-3">{productTitile}</h1>
          <p className="">{productDescription}</p>

          <div className="mb-3">
            <Link
              to={tryDemo}
              className="me-4 text-decoration-none fw-semibold text-primary"
            >
              Try demo <i className="fa-solid fa-arrow-right ms-1"></i>
            </Link>
            <Link
              to={learnMore}
              className="text-decoration-none fw-semibold text-primary"
            >
              Learn more <i className="fa-solid fa-arrow-right ms-1"></i>
            </Link>
          </div>

          <div className="d-flex gap-3 flex-wrap">
            <img
              src={googlePlay}
              alt="Google Play"
              style={{ height: "50px", cursor: "pointer" }}
            />
            <img
              src={ApplePlay}
              alt="App Store"
              style={{ height: "50px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
