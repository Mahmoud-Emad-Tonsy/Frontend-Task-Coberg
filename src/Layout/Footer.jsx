import logo from "../assets/svg/logo.svg";
import facebookIcon from '../assets/svg/brandico_facebook-rect.svg';
import instagramIcon from "../assets/svg/bx_bxl-instagram.svg";
import linkedinIcon from "../assets/svg/linkedin.svg";
import twitterIcon from "../assets/svg/twitter.svg";
import youtubeIcon from "../assets/svg/youtube.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left xl-col-4">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <p className="text-left-footer">
          We introduce our selves as LAND Interior and Architectural Design
          Consultancy – one of the best interior designers in Chennai. Chennai
          Luxury Interior and Architectural Design Consultancy has challenged
          the conventional way of interior designing and given new dimensions to
          the art of interior designing.
        </p>
        <div className="contact-info-left">
          <p>landinteriors@gmail.com</p>
          <p>+91 98987 65656</p>
        </div>
        <div className="social">
          <img src={facebookIcon} alt="facebookIcon" />
          <img src={instagramIcon} alt="instagramIcon" />
          <img src={linkedinIcon} alt="linkedinIcon" />
          <img src={twitterIcon} alt="twitterIcon" />
          <img src={youtubeIcon} alt="youtubeIcon" />
        </div>
      </div>
      <div className="center xl-col-4">
        <h6>What we do</h6>
        <div className="servies-footer">
          <p>Modular Kitchen</p>
          <p>Bedroom</p>
          <p>Living room</p>
          <p>Home office</p>
          <p>Modular Kitchen</p>
        </div>
      </div>
      <div className="right xl-col-4">
        <h6>Get in touch</h6>
        <div className="contact-info">
          <p>landinteriors@gmail.com</p>
          <p>+91 98987 65656</p>
        </div>
        <div className="nav-footer">
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Studio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer