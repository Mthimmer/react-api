"use strict";
import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
          <div className="footer-wrapper">
            <ul>
              <Link to="/">
                <h3>
                  <li>About us</li>
                </h3>
              </Link>
              <Link to="/body">
                <h3>
                  <li>Shop now</li>
                </h3>
              </Link>
              <Link to="/collectie">
                <h3>
                  <li>Our value</li>
                </h3>
              </Link>
            </ul>
          </div>
          <div className="footer-wrapper">
            <h4>design by: Danieldesignwork @ instagram</h4>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
