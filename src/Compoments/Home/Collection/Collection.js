import React from 'react'
import { Container } from 'react-bootstrap';
import MenuBackgound from "../../../image/menuBackground.png";

 function Collection() {
  return (
    <div className="bg-white">
      <div className="hero-collection-image">
        <div className="container h-100 d-flex align-items-center  justify-content-end">
          <div className="w-50 ">
            <p className="heading">Your Premium Sound, Unplugged!</p>
            <p className="paraghp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
           
              <button>
                <p className="button-fonts">Find out More</p>
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
