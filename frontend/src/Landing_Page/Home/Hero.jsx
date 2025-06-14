import React from "react";
import {Link} from "react-router-dom"
const Hero = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <img
            src="media\images\homeHero.png"
            alt="heroHome"
            className="img-fluid mb-4"
          />
          <h1 className="display-4 fw-bold">Invest in Everything</h1>
          <p className="lead text-muted">
            Online platform to invest in stocks, derivatives, mutual funds, and more.
          </p>
          <Link to="/signup" className="btn btn-primary btn-lg mt-3">
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
