import React from "react";
import {Link} from "react-router-dom"
const Stats = () => {
  return (
    <div className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold mb-4">Trust with Confidence</h1>

            <div className="mb-4">
              <h4 className="fw-semibold">Customer first — always</h4>
              <p className="text-muted">
                That's why 1.3+ crore customers trust TechNova with ₹3.5+ lakh crore
                worth of equity investments.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="fw-semibold">No spam or gimmicks</h4>
              <p className="text-muted">
                No gimmicks, spam, gamification, or annoying push notifications —
                just high-quality apps that you use at your pace, the way you like.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="fw-semibold">The TechNova Universe</h4>
              <p className="text-muted">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your needs.
              </p>
            </div>

            <div>
              <h4 className="fw-semibold">Do better with money</h4>
              <p className="text-muted">
                With initiatives like Nudge and Kill Switch, we don't just facilitate
                transactions — we genuinely help you do better with your money.
              </p>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="media/images/ecosystem.png"
              alt="ecosystem"
              className="img-fluid mb-4"
            />
            <div className="d-flex justify-content-center gap-4">
              <Link to="#" className="text-primary fw-semibold text-decoration-none">
                Explore our products <i className="fa-solid fa-arrow-right ms-1"></i>
              </Link>
              <Link to="#" className="text-primary fw-semibold text-decoration-none">
                Try Kite demo <i className="fa-solid fa-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
