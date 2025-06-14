import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductsPage = () => {
  return (
    <div>
      <Hero />
      <LeftSection
        productImage="media/images/kite.png"
        productTitile="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="media/images/googlePlayBadge.svg"
        ApplePlay="media/images/appstoreBadge.svg"
      />
      <RightSection
        productImage="media/images/console.png"
        productTitle="Console"
        productDescription="The central dashboard for your techno account gain insights into your trades and investments with indep reports and visualisations"
        learnMore="#"
      />
      <LeftSection
        productImage="media/images/coin.png"
        productTitile="Coin"
        productDescription="Buy direct mutual funds online commission free delivered directly to your demart account enjoy the investment experience on your Android and IOS devices"
        tryDemo="#"
        learnMore="#"
        googlePlay="media/images/googlePlayBadge.svg"
        ApplePlay="media/images/appstoreBadge.svg"
      />
      <RightSection
        productImage="media/images/kiteconnect.png"
        productTitle="Kite Connect Api"
        productDescription="Built powerful trading platforms and experience is with our super simple http / jashan API if you are a startup build your investment app and showcase it to our client base"
        learnMore="#"
      />
      <LeftSection
        productImage="media/images/varsity.png"
        productTitile="Varsity mobile"
        productDescription="An easy to grapes collection of stock market lessons with in indepth coverage and illustration content is broken down into bight size cards to help you learn on the go"
        tryDemo="#"
        learnMore="#"
        googlePlay="media/images/googlePlayBadge.svg"
        ApplePlay="media/images/appstoreBadge.svg"
      />
      <p className="text-center mt-4">Want to know about our technology stack? Check out our TechNova.tech.blog</p>
      <Universe />
    </div>
  );
};

export default ProductsPage;
