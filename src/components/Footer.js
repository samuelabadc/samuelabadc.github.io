import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our weekly news report </p>
        <p className="footer-subscription-text">you can subscript at once</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
          <Link to="/about"><h2>About Us</h2></Link>
            <Link to="/services">How it works</Link>
            {/* <Link to>Testimonials</Link>
            <Link to>Careers</Link>
            <Link to>Investors</Link> */}
            <Link to>Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact us</h2>
            <Link to>comercial@intelectronica.com.co</Link>
            <Link to>+57 312 772 57 39</Link>
            {/* <Link to>Careers</Link>
            <Link to>Investors</Link>
            <Link to>Terms of Service</Link> */}
          </div>
        </div>
        {/* <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to>Testimonials</Link>
            <Link to>Careers</Link>
            <Link to>Investors</Link>
            <Link to>Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to>Testimonials</Link>
            <Link to>Careers</Link>
            <Link to>Investors</Link>
            <Link to>Terms of Service</Link>
          </div>
        </div> */}
      </div>
      <section className="socialmedia">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              INTELECTRONICA <i className="intel-icon"></i>
            </Link>
          </div>
          <small className="website-rights">INTELECTRONICA S.A.S. © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FacebookIcon></FacebookIcon>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <InstagramIcon></InstagramIcon>
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <TwitterIcon></TwitterIcon>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedInIcon></LinkedInIcon>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
