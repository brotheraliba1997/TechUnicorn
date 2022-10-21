import React from "react";
import "./Shop.css";
import search from "../../image/search.png";
import Featurs from "./Featurs/Featurs";
import Shopcard from "./ShopCards/Shopcard";
import Collection from "../Home/Collection/Collection";
import Articles from "../Home/Articles/Articles";
import Letters from "../Home/Letters/Letters";
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";

import NavbarSection from "../Home/Navbar/NavbarSection";




function Shop() {
  return (
    <div>
      <Header />
      <NavbarSection />
      <Collection />
      <div className="container">
        <div className="row">
          <Featurs />
          <Shopcard />
          <div className="m-80">
            <Letters />
          </div>
        </div>
      </div>
      <div className="m-100 ">
        <Footer />
      </div>
    </div>
  );
}

export default Shop;
