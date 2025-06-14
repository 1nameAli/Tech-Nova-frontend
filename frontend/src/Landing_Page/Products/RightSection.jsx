import React from "react";
import {Link} from "react-router-dom"
 const RightSection = ({
  productImage,
  productTitle = "Product Title",
  productDescription = "This is a product description that gives users insight into what the platform or service offers.",
  learnMore = "#",
}) => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 order-2 order-md-1">
          <h1 className="fw-bold text-dark mb-3">{productTitle}</h1>
          <p >{productDescription}</p>
          <Link
            to={learnMore}
            className="text-decoration-none fw-semibold text-primary"
          >
            Learn more <i className="fa-solid fa-arrow-right ms-1"></i>
          </Link>
        </div>

        {/* Image Section */}
        <div className="col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0">
          <img
            src={productImage}
            alt={productTitle}
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
