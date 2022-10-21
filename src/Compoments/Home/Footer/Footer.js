import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="bg-white  ">
        <div className="container padding-all-size">
          <div className="row">
            <div className="col-lg-4  ">
              <div className="footer-box my-5"></div>
            </div>
            <div className="col-lg-8  ">
              <div className=" padding-all-size  ">
                <div className="d-flex  justify-content-between align-items-center  p-2">
                  <p className="heading" style={{ color: "#F86338" }}>
                    Dealerz.
                  </p>
                  <div className="d-flex gap-2 justify-content-between">
                    <div className="footer-circle ">
                      <p className="fonts p-2">YT</p>
                    </div>
                    <div className="footer-circle">
                      <p className="fonts p-2">FB</p>
                    </div>
                    <div className="footer-circle">
                      <p className="fonts p-2">TW</p>
                    </div>
                    <div className="footer-circle">
                      <p className="fonts p-2">LG</p>
                    </div>
                  </div>
                </div>

                <div className="paraghp px-3" style={{ color: "#11142D" }}>
                  <p>Privacy Policy</p>
                  <p>Terms and Condition</p>
                  <p className="padding-all-size">
                    @2020 TanahAir Studio. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
