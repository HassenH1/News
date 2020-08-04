import React from "react";
import { Navbar } from "react-bootstrap";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container bg-dark text-white">
        <div className="row bg-dark">
          {/* column 1 */}
          <div className="col">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>Email: hasansaid51@gmail.com</li>
              <li>Phone: (323)445-4642</li>
              <li>Website: https://hassen.ga/</li>
              <li>Github: https://github.com/HassenH1/</li>
            </ul>
          </div>
          {/* 
          <div className="col-md-3 col-sm-6"></div>

          <div className="col-md-3 col-sm-6"></div> */}

          {/* column 4 */}
          <div className="col">
            <h4>News API </h4>
            <ul className="list-unstyled">
              <li>Website: https://newsapi.org/</li>
              <li>Twitter: https://twitter.com/NewsAPIorg</li>
            </ul>
          </div>
        </div>
        {/* footer bottom */}
        <div className="footer-bottom">
          <p className="text-lg-center">
            &copy;{new Date().getFullYear()} News App - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
