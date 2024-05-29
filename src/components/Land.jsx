import React from 'react'
import icon1 from "../assets/svg/calender-icon.svg";
import icon2 from "../assets/svg/certifcate-icon.svg";
import icon3 from "../assets/svg/home-icon.svg";
import icon4 from "../assets/svg/Vector.png";

const Land = () => {
  
  return (
    <section className="land-section">
      <h2>Why LAND Interiors</h2>
      <div className="icon-container">
        <div className="icon">
          <div className="cal">
            <img className="cal-icon" src={icon1} alt="Icon 1" />
            <img src={icon4} alt="Icon 1" />
          </div>

          <p>50 days & we pay your rent</p>
        </div>
        <div className="icon">
          <img src={icon2} alt="Icon 2" />
          <p>1500+ happy customers</p>
        </div>
        <div className="icon">
          <img src={icon3} alt="Icon 3" />
          <p>300+ design expertise</p>
        </div>
      </div>
    </section>
  );
}

export default Land