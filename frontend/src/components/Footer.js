import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Crop Health Monitor</h4>
          <p>
            AI-powered disease detection system designed specifically for farmers to help identify and manage crop diseases effectively.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/predict">Predict</a></li>
            <li><a href="/history">History</a></li>
            <li><a href="/diseases">Diseases</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@crophealth.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <div className="social-links">
            <a href="#" title="Facebook">f</a>
            <a href="#" title="Twitter">𝕏</a>
            <a href="#" title="Instagram">📷</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Crop Health Monitor. All rights reserved. Developed with ❤️ for farmers.</p>
      </div>
    </footer>
  );
}

export default Footer;
