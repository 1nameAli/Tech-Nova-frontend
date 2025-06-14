import React from "react";
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-4 border-top">
      <div className="container">
        <div className="row gy-4">
          {/* Logo and Social */}
          <div className="col-md-3">
            <h4 className="fw-bold text-primary">TECHNOVA</h4>
            <p className="small">© 2010 – 2024, Not TechNova Broking Ltd. <br />All rights reserved.</p>
            <div className="d-flex gap-3 mt-2">
              <Link to="#"><i className="fab fa-twitter text-secondary"></i></Link>
              <Link  to="#"><i className="fab fa-facebook-f text-secondary"></i></Link>
              <Link to="#"><i className="fab fa-instagram text-secondary"></i></Link>
              <Link to="#"><i className="fab fa-linkedin-in text-secondary"></i></Link>
              <Link to="#"><i className="fab fa-telegram-plane text-secondary"></i></Link>
            </div>
          </div>

          {/* Company */}
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled small">
              <li><Link to="#" className="text-decoration-none text-dark">About</Link></li>
              <li><Link to="#" className="text-decoration-none text-dark">Products</Link></li>
              <li><Link to="#" className="text-decoration-none text-dark">Pricing</Link></li>
              <li><Link to="#" className="text-decoration-none text-dark">Referral programme</Link></li>
              <li><Link to="#" className="text-decoration-none text-dark">Careers</Link></li>
              <li><Link to="#" className="text-decoration-none text-dark">TechNova.tech</Link></li>
              <li><Link to="#" className="text-decoration-none text-dark">Press & media</Link></li>
              <li><Link to="#" className="text-decoration-none text-dark">TechNova cares (CSR)</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled small">
              <li><Link to="#" className="text-decoration-none text-dark">Contact</Link></li>
              <li><Link to="#" className="text-decoration-none text-dark">Support portal</Link></li>
              <li><Link to="#" className="text-decoration-none text-dark">T-Connect blog</Link></li>
              <li><Link to="#" className="text-decoration-none text-dark">List of charges</Link></li>
              <li><Link to="#" className="text-decoration-none text-dark">Downloads & resources</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3">Account</h6>
            <ul className="list-unstyled small">
              <li><Link to="#" className="text-decoration-none text-dark">Open an account</Link></li>
              <li><Link to="#" className="text-decoration-none text-dark">Fund transfer</Link></li>
              <li><Link to="#" className="text-decoration-none text-dark">60 day challenge</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal Info */}
        <div className="row mt-4">
          <div className="col small text-muted">
            <p>
              TechNova Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633. Depository services through TechNova Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-123-2024. Trading through TechNova Commodities Pvt. Ltd. – MCX: 46025.
            </p>
            <p>
              Address: #101, 4th Cross, TechPark Phase 2, Bengaluru - 560078. For complaints related to securities broking, please write to complaints@technova.com.
            </p>
            <p>
              KYC is a one-time process. Update your mobile and email with your broker. In case of IPO, there's no need to issue cheques; use UPI-linked accounts only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
