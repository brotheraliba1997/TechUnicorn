import React from 'react'

export default function Brands() {
  return (
    <div>
      <div className="bg-white py-5">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="Top-items-heading ">Top Items</p>
              <p className="Top-items-Paragh">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>

            <div className="col-lg-3 col-12 p-2">
              <div className="position-slider-Card  ">
                <div className="absoloute  ">
                  <p className="Slider-Fonts ">Sale</p>
                </div>

                <div className="absoloute-Font-heading ">
                  <p className="Slider-Heading ">Tracksuit Hyped</p>
                  <p className="Slider-paragh ">Apple Cherry</p>
                  <div className=" d-flex gap-2 justify-content-center">
                    <p className="Slider-Rupes  ">$384</p>
                    <p className="Slider-Rupes-Second ">$454</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
