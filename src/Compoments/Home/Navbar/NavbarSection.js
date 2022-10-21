import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Heart from "../../../image/Vector1.png";
import Baskit from "../../../image/Vector3.png";
import person from "../../../image/Group.png";
import bell from "../../../image/Vector6.png";
import search from "../../../image/search.png"

import { useNavigate } from "react-router-dom";





function NavbarSection() {
  let navigate = useNavigate(); 


  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate("/Shop");
  };

  const product = () => {
    // 👇️ navigate to /contacts
    navigate("/Product");
  };

  
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="d-flex my-3 navber-product justify-content-between">
            <div className="d-flex gap-5  justify-content-between align-items-center">
              <p onClick={navigateToContacts} className="mb-0">
                Shop
              </p>

              <p className="mb-0">Promo</p>
              <p className="mb-0">About</p>
              <p className="mb-0">Blog</p>
            </div>

            <div className="navbar-Input d-flex gap-2 px-2 align-items-center bg-white  ">
              <input
                type="text"
                placeholder="Insert your mail here"
                style={{
                  border: "none",
                  width: "100%",
                  background: "none",
                }}
              />
              <div className="d-flex justify-content-center  px-3">
                <img src={search} />
              </div>
            </div>

            <div className="d-flex gap-4 align-items-center justify-content-between ">
              <div className="p-2">
                <img width={24} height={24} src={Heart} />
              </div>
              <div className="p-2 " onClick={product}>
                <img width={24} height={24} src={Baskit} />
              </div>

              <div className="p-2">
                <img width={24} height={24} src={person} />
              </div>

              <div className="p-2">
                <img width={24} height={24} src={bell} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarSection;
