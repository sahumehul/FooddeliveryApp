import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="fw-bold">&copy; 2024 Your Company. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/mehul-sahu-4352181b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="ri-linkedin-box-line"
              style={{ fontSize: "19px" }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/mehul.mg.16/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-line" style={{ fontSize: "19px" }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
