// components/Footer.js
import React from 'react';
// import '../App.css'; 
import './styles/Footer.css'
// Import Footer.css

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-section">
          <div className="first-container">
            <div className="join-team">
              <h2>Join our Vierdo Team</h2>
              <p>Get the latest updates and news from our team.</p>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Enter Email..." />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
  
        <div className="footer-section">
          <div className="social-icons-container">
            <table>
              <thead>
                <tr>
                  <th>Instagram</th>
                  <th>LinkedIn</th>
                  <th>Facebook</th>
                  <th>Twitter</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
  
        {/* Third Container */}

        <div className="footer-section">
        <div className="additional-info">
          <p>NEED HELP</p>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Couple T-Shirts</li>
            <li>Disney®</li>
            <li>Marvel®</li>
            <li>Starwars®</li>
          </ul>
          <p>COMPANY</p>
          <ul>
            <li>Blogs</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Work With Us</li>
          </ul>
          <p>CUSTOMER SERVICE</p>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Track Order</li>
            <li>Return Policy</li>
            <li>Shipping Policy</li>
          </ul>
        </div>
      </div>
 {/* Fourth Container */}
        <div className="footer-section">
          <div className="copy-rights">
            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
