import React from "react";

const Award = () => {
  return (
    <div className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-6 text-center">
            <img
              src="media/images/largestBroker.svg"
              alt="largestBroker"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5 fw-bold mb-3">
              Largest Stock Broker in Pakistan
            </h1>
            <p className="text-muted">
              2+ million TechNova clients contribute to over 15% of all retail
              order volumes in Pakistan daily by trading and investing in:
            </p>
            <div className="row mt-4">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li>• Futures and Options</li>
                  <li>• Commodity Derivatives</li>
                  <li>• Currency Derivatives</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li>• Stocks and IPOs</li>
                  <li>• Direct Mutual Funds</li>
                  <li>• Bonds and Gold</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-center">
              <img
                src="media/images/pressLogos.png"
                alt="pressLogo"
                className="img-fluid"
                style={{ maxHeight: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
