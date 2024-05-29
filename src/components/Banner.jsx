

import React from "react";
import bannerImg from "../assets/images/landing-img.png";

const Banner = () => {
  return (
    <React.Fragment>
      <div className="banner">
        <div className="left-banner">
          <img src={bannerImg} alt="banner" />
        </div>
        <div className="right-banner">
          <div className="box">
            <div className="text-banner-container">
              <p className="text-box">Get personalised home interiors</p>
              <h1>in just 50 days</h1>
            </div>
            <div className="container-btn banner-btn">
              <button>SPEAK WITH AN ONLINE CONSULTANT</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
