import React from 'react'
import heart from '../../../image/heart.png'
import star from '../../../image/star.png'

export default function Shopcard() {
  return (
    <div className="col-lg-9 ">
      <div className="row">
        <div className="col-lg-11   mx-auto">
          <div className="d-flex m-70 Card-media-flex justify-content-between">
            <div className="ShopCards margin-top-40 ">
              <div className="d-flex justify-content-end p-3">
                <div className="shop-like-product  d-flex justify-content-center align-items-center">
                  <img width={13.65} height={12.49} src={heart} />
                </div>
              </div>

              <div className="d-flex h-75 m-20 justify-content-center">
                <div className=" d-flex flex-column justify-content-end align-items-center ">
                  <p className="heading p-0 m-1"> Urbano Jacket</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                  </div>

                  <p className="paragraph-grey p-0 m-0">watchmenow</p>
                  <p className="card-doller ">$99</p>
                </div>
              </div>
            </div>

            <div className="ShopCards margin-top-40 ">
              <div className="d-flex justify-content-end p-3">
                <div className="shop-like-product  d-flex justify-content-center align-items-center">
                  <img width={13.65} height={12.49} src={heart} />
                </div>
              </div>

              <div className="d-flex h-75 m-20 justify-content-center">
                <div className=" d-flex flex-column justify-content-end align-items-center ">
                  <p className="heading p-0 m-1"> Urbano Jacket</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                  </div>
                  <p className="paragraph-grey p-0 m-0">watchmenow</p>
                  <p className="card-doller">$99</p>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center my-5 align-items-center">
            <div className="Shop-Card-button margin-top-40">
              <div className=" d-flex py-3 justify-content-center align-items-center ">
                <p className="paragraph-white ">See More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
