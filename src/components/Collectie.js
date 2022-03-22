"use strict";

import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function Collectie() {
  return (
    <div>
      <Nav />
      <Header />
      <div className="duoWrapper reveal">
        <div className="duo1">
          <img src="https://source.unsplash.com/3iiyde9Zj8A" alt="bank"></img>
          <button>shop all</button>
        </div>
        <div className="duo2">
          <img src="https://source.unsplash.com/ZIihTgf5uGg" alt="fles"></img>
          <button>new release</button>
        </div>
      </div>

      <div className="duoWrapper title2">
        <div className="duo1">
          <h2>Always the best plant-friendly based products.</h2>
        </div>
        <div className="duo2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dignissim consectetur lacus vitae blandit. Aenean ac elit non risus
            pellentesque accumsan. Nullam tristique pellentesque erat sit amet
            maximus. Morbi eu orci nunc. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Nam elit nunc, mattis
            non sem non, fermentum varius erat. Donec a tortor ante.
          </p>
        </div>
      </div>
      <div className="productTypes">
        <ul>
          <li>
            <div className="color1"></div>
            <h3>nature-inspired.</h3>
          </li>
          <li>
            <div className="color2"></div>
            <h3>quality control.</h3>
          </li>
          <li>
            <div className="color3"></div>
            <h3>animal cruelty-free.</h3>
          </li>
          <li>
            <div className="color4"></div>
            <h3>purposeful business.</h3>
          </li>
        </ul>
      </div>

      <div className="imageWrapper reveal">
        <div>
          <img src="https://source.unsplash.com/3sdaJDCJNeI" alt="bank"></img>
          <h2>home.</h2>
        </div>
        <div>
          <img src="https://source.unsplash.com/GnWKTJlMYsQ" alt="bank"></img>
          <h2>laundry.</h2>
        </div>
        <div>
          <img src="https://source.unsplash.com/VItxz6u036U" alt="bank"></img>
          <h2>hands.</h2>
        </div>
        <div>
          <img src="https://source.unsplash.com/OyUtwyP5zRg" alt="bank"></img>
          <h2>body.</h2>
        </div>
      </div>

      <div className="methodWrapper reveal">
        <div>
          <img src="https://source.unsplash.com/wK0h-mlvfuc" alt="bank"></img>
        </div>
        <div>
          <h3>method men</h3>
          <h1>heads up, men.</h1>
          <h2>men face + shave is here.</h2>
          <p>
            the new method men skincare + shaving range is new available
            exclusively online.
          </p>
          <button>shop men</button>
          <button className="secondaryBtn">learn more</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Collectie;
