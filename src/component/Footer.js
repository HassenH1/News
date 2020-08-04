import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container bg-dark text-white">
        <div className="row bg-dark ">
          {/* column 1 */}
          <div className="col">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>hasansaid51@gmail.com</li>
              <li>
                <a href="https://hassen.ga/">My Portfolio</a>
              </li>
              <li>
                <a href="https://github.com/HassenH1/">My Github</a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h4>News API </h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://newsapi.org/">NewAPI website</a>
              </li>
              <li>
                <a href="https://twitter.com/NewsAPIorg">NewAPI Twitter</a>
              </li>
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
