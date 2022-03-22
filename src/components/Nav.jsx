import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
// import MobileNav from "./MobileNav";
import { FaBars } from "react-icons/fa";
import {
  UserIcon,
  ShoppingCartIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  let mobileNav;

  function toggle() {
    setShowMenu(!showMenu);
  }
  if (showMenu) {
    mobileNav = (
      <div>
        <ul className="hamburgerOpen">
          <div className="overlay-content">
            <Link to="/">
              <li>About us</li>
            </Link>
            <Link to="/body">
              <li>Shope now</li>
            </Link>
            <Link to="/collectie">
              <li>Our value</li>
            </Link>
          </div>
        </ul>
      </div>
    );
  }

  return (
    <nav>
      <div className="logoWrapper">
        <img
          src={logo}
          className="App-logo"
          width="70"
          height="auto"
          alt="logo"
        />
      </div>

      <ul className="nav-items">
        <Link to="/">
          <li>ABOUT US</li>
        </Link>
        <Link to="/body">
          <li>SHOP NOW</li>
        </Link>
        <Link to="/collectie">
          <li>OUR VALUE</li>
        </Link>
      </ul>

      <ul className="heroWrapper">
        <Link to="/">
          <li>
            <SearchIcon className="heroIcon" />
          </li>
        </Link>
        <Link to="/">
          <UserIcon className="heroIcon" />
        </Link>
        <Link to="/">
          <ShoppingCartIcon className="heroIcon" />
        </Link>
      </ul>

      <div>
        <div className="mobileMenu">
          {/* <button  /> */}
          <FaBars onClick={toggle}></FaBars>
        </div>
        {mobileNav}
      </div>
    </nav>
  );
}

export default Nav;
