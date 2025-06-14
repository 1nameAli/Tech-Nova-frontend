import React from 'react';
import {Link} from "react-router-dom"
const OpenAccount = () => {
  return (
    <section className="bg-white py-5">
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3 text-dark">
              Open a TechNova account
            </h1>
            <p className="lead text-muted mb-4">
              Modern platforms and apps. Rs0 investments and flat Rs20 intraday & F&O trades.
            </p>
            <Link to="/signup" className="btn btn-primary btn-lg px-4 shadow-sm">
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenAccount;
