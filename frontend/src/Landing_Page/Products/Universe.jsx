import React from 'react';
import { Link } from "react-router-dom";

const Universe = () => {
  return (
    <div className="container text-center py-5">
      {/* Heading Section */}
      <h1 className="fw-bold text-dark mb-3">The TechNova Universe</h1>
      <p className=" mb-5">
        Extend your trading and investment experience even further with our partner platforms
      </p>

      {/* Logos Grid */}
      <div className="row justify-content-center gy-4">
        {/* Column 1 */}
        <div className="col-6 col-md-4 d-flex flex-column align-items-center gap-3">
          <img src="media/images/smallcaseLogo.png" alt="Smallcase Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
          <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" className="img-fluid" style={{ maxHeight: '60px' }} />
        </div>

        {/* Column 2 */}
        <div className="col-6 col-md-4 d-flex flex-column align-items-center gap-3">
          <img src="media/images/streakLogo.png" alt="Streak Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
          <img src="media/images/goldenpiLogo.png" alt="GoldenPi Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
        </div>

        {/* Column 3 */}
        <div className="col-6 col-md-4 d-flex flex-column align-items-center gap-3">
          <img src="media/images/sensibullLogo.svg" alt="Sensibull Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
          <img src="media/images/dittoLogo.png" alt="Ditto Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
        </div>
      </div>

      {/* Call to Action */}
    
     <Link to="/signup" className="btn btn-primary btn-lg mt-5">Sign up now</Link>
    
    </div>
  );
};

export default Universe;
