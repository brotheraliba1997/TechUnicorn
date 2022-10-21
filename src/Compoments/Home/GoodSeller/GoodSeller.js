import React from 'react'
import left from '../../../image/arrowleft.png'
import right from '../../../image/arrowright.png'

export default function GoodSeller() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 bg-white my-5 p-5">
            <div className="row p-5">
              <div className="col-lg-6">
                <div className="good-seller-card-design">
                  {/* <div className="good-seller-button-left">
                    <img src={left} />
                  </div>
                  <div className="good-seller-button-right">
                    <img src={right} />
                  </div> */}
                </div>
              </div>

              <div className="col-lg-6 ">
                <div className="goolseller-padding">
                  <p className="GoodSeller">Good Seller!</p>
                  <p className="paraghp">
                    I am very happy with the services provided, it is very
                    helpful, starting from the insight that the company gave
                    from the start that I did not understand what it was so I
                    got knowledge and made my website look better
                  </p>
                  <p className="heading-h4">Anna Saraspova</p>
                  <p className="paraghp" style={{ color: "#515151;" }}>
                    Your Beloved Buyer
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
