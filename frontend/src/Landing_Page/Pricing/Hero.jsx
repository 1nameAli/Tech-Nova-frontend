import React from "react";

const Hero = () => {
  return (
    <div className="container py-5 text-center">
      {/* Section Title */}
      <h1 className="fw-bold text-primary mb-3">Pricing</h1>
      <p className="lead text-muted mb-4">
        Free equity investments and flat  $20 on intraday and F&O trades
      </p>
      <hr className="mb-5" />

      {/* Pricing Cards */}
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <img
                src="media/images/pricingEquity.svg"
                alt="pricingEquity"
                className="mb-3"
                style={{ height: "60px" }}
              />
              <h5 className="fw-bold">Free Equity Delivery</h5>
              <p className="text-muted">
                All equity delivery investments (NSE & BSE) are absolutely free —  $0 brokerage.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <img
                src="media/images/intradayTrades.svg"
                alt="intradayTrades"
                className="mb-3"
                style={{ height: "60px" }}
              />
              <h5 className="fw-bold">Intraday & F&O Trades</h5>
              <p className="text-muted">
                Flat  $20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <img
                src="media/images/pricingMF.svg"
                alt="pricingMF"
                className="mb-3"
                style={{ height: "60px" }}
              />
              <h5 className="fw-bold">Free Direct Mutual Funds</h5>
              <p className="text-muted">
                All direct mutual fund investments are absolutely free —  $0 commissions and DP charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
