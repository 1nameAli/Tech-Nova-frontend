import React from 'react';

const Hero = () => {
  return (
    <div className="container py-5">
      <div className="row mb-4 text-center">
        <h1 className="display-5 fw-bold text-primary">
          We pioneer the discount broking model in Pakistan
        </h1>
        <h2 className="h4 text-secondary">
          Now we are breaking ground with a technology
        </h2>
      </div>

      <div className="row">
        {/* Left Column */}
        <div className="col-md-6 mb-4">
          <p className="lead">
            We started operations on the 15th of August 2010 with the goal of breaking all barriers that traders and investors face in Pakistan in terms of cost, support, and technology. We named the company TechNova, a combination of “tech” and “Nova” — the Sanskrit word for barrier.
          </p>
          <p className="lead">
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in Pakistan.
          </p>
          <p className="lead">
            Over 1 crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Pakistan retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-md-6 mb-4">
          <p className="lead">
            In addition, we run a number of popular open online education and community initiatives to empower traders and investors.
          </p>
          <p className="lead">
            And yet, we are always up to something new. Catch up on the latest updates on our blog.
          </p>
          <p className="lead">
            Follow us on social media to see what’s happening and how we are changing the investment game every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
