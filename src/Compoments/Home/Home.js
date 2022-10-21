import React from "react";

import Acompany from "../../image/Acompany.png";
import Company from "../../image/Company.png";
import companyText from "../../image/companyText.png";
import textLogo from "../../image/text-logo.png";
import arrowfull from "../../image/arrowfull.png";


import "./Home.css";

import PrimiumCollection from "./primiumCollection/PrimiumCollection";
import TopItem from "./TopItems/TopItem";
import Brands from "./Brands/Brands";
import StoreBrands from "./StoryBrands/StoreBrands";
import Header from "./Header/Header";
import NavbarSection from "./Navbar/NavbarSection";
import Collection from "./Collection/Collection";
import Achievemnet from "./Achievement/Achievemnet";
import GoodSeller from "./GoodSeller/GoodSeller";
import Articles from "./Articles/Articles";
import Footer from "./Footer/Footer";
import { Col } from "react-bootstrap";
import Letters from "./Letters/Letters";

function Home() {
  return (
    <div>
      <Header />
      <NavbarSection />
      <Collection />

      <PrimiumCollection />

      <TopItem />

      <StoreBrands />

      <Achievemnet />

      <GoodSeller />

      <Articles />

      <Letters />

      <div className="m-100">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
