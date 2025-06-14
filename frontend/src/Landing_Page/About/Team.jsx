import React from 'react';

const Team = () => {
  return (
    <div className="container py-5">
      {/* Section Title */}
      <div className="row mb-5 text-center">
        <h1 className="fw-bold display-5 text-primary">Our Inspiration</h1>
      </div>

      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/profile.png"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle shadow mt-4"
            style={{ width: '250px', height: '250px', objectFit: 'cover' }}
          />
          <h2 className="mt-3 fw-bold text-dark">Muhammad Ali Asif</h2>
          <p className="text-muted">Founder & CEO</p>
        </div>

        {/* Description Section */}
        <div className="col-md-6">
          <p className="lead">
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
          </p>
          <p className="lead">
            <a href="#" className="text-decoration-none text-primary fw-semibold">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Pakistani capital market.
          </p>
          <p className="lead">
            And yet, we are always up to something new — catch up on the latest updates on our blog or follow us on social media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
