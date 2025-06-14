import React from "react";

const Brokerage = () => {
  return (
    <div className="container py-5">
      <div className="row g-5">
        {/* Brokerage Info */}
        <div className="col-md-8">
          <h2 className="fw-bold text-primary mb-4">Brokerage Calculator</h2>

          <ul className="list-unstyled text-muted fs-6">
            <li className="mb-3">
              📞 Call & Trade and RMS auto square-off incur an additional charge of <strong>$50 + GST</strong> per order.
            </li>
            <li className="mb-3">
              📨 Digital contract notes will be sent via email.
            </li>
            <li className="mb-3">
              📄 Physical copies of contract notes (if required) will be charged <strong>$20</strong> per note. Courier charges apply.
            </li>
            <li className="mb-3">
              🌍 For <strong>NRI (Non-PIS)</strong> accounts: <strong>0.5%</strong> or <strong>$100</strong> per executed equity order (whichever is lower).
            </li>
            <li className="mb-3">
              🌐 For <strong>NRI (PIS)</strong> accounts: <strong>0.5%</strong> or <strong>$200</strong> per executed equity order (whichever is lower).
            </li>
            <li className="mb-3">
              ⚠️ If the account has a debit balance, orders will be charged <strong>$40</strong> per executed order instead of <strong>$25</strong>.
            </li>
          </ul>
        </div>

        {/* Charges Box */}
        <div className="col-md-4">
          <div className="bg-light p-4 rounded shadow-sm h-100">
            <h4 className="fw-semibold text-dark">📋 List of Charges</h4>
            <ul className="mt-3 text-muted small">
              <li>Account Opening: $200</li>
              <li>Annual Maintenance: $300/year</li>
              <li>DP Charges: $13.5 per scrip</li>
              <li>GST: 18% on brokerage & services</li>
              <li>SEBI Charges: $10 per crore</li>
              <li>Transaction Charges: As per exchange</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
