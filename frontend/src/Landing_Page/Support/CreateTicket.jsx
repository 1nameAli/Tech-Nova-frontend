import React from "react";

const CreateTicket = () => {
  const sections = [
    {
      title: "Open Account",
      items: [
        "Online account opening",
        "Offline account opening",
        "Company partnership and HUF",
        "Account opening NRI",
        "Account opening charges at TechNova",
        "TechNova IDFC First Bank 3-in-1 account",
        "Getting started",
      ],
    },
    {
      title: "Open TechNova account",
      items: [
        "Login credentials",
        "Account modification",
        "Segment edition",
        "PAN ID and bank details",
        "Your profile",
        "Transfer and conversion of shares",
      ],
    },
    {
      title: "Trading Platforms",
      items: [
        "Margin/leverage",
        "Product and order types",
        "Kite web and mobile",
        "Trading FAQs",
        "Corporate actions / Sentinel",
        "Kite API",
        "Pi and other platforms",
        "Stock reports",
        "GTT",
      ],
    },
    {
      title: "Funds",
      items: [
        "Adding funds",
        "Funds withdrawal",
        "Company partnership and HUF",
        "Account opening NRI",
        "Account opening charges at TechNova",
        "TechNova IDFC First Bank 3-in-1 account",
        "Getting started",
      ],
    },
    {
      title: "Console",
      items: [
        "Reports",
        "Ledger",
        "Segment edition",
        "PAN ID and bank details",
        "Your profile",
        "Transfer and conversion of shares",
      ],
    },
    {
      title: "Coin",
      items: [
        "Understanding mutuals",
        "About Coin",
        "Kite web and mobile",
        "Trading FAQs",
        "Corporate actions / Sentinel",
        "Kite API",
        "Pi and other platforms",
        "Stock reports",
        "GTT",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-5">Create Support Ticket</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {sections.map((section, idx) => (
          <div className="col" key={idx}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-semibold text-primary">{section.title}</h5>
                <ul className="list-unstyled mt-3 text-muted small">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="mb-2">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTicket;
