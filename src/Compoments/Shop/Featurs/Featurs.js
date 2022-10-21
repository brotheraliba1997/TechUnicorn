import React from 'react'
import search from '../../../image/search.png'
import arrowright from '../../../image/shop-right-arrow.png'
import shopcleaner from "../../../image/shop-cleaner.png";

export default function Featurs() {
  return (
    
      <div className="col-lg-3 ">
        <div className="shop-shop-section m-100">
          <div className="shop-input-design d-flex gap-2 px-2 align-items-center  ">
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

          <div className=" margin-top  d-flex justify-content-between">
            <p className="heading">Price</p>
            <div className="">
              <img />
            </div>
          </div>
          <hr></hr>

          <div className="d-flex justify-content-between  ">
            <p className="paragraph">Range</p>
            <p className="paragraph">$5-$20</p>
          </div>

          <div className="m-20 d-flex justify-content-between">
            <p className="heading">Product Categories</p>
            <div>
              <img src={shopcleaner} />
            </div>
          </div>

          <div className="my-4 d-flex justify-content-between">
            <p className="paragraph p-0 m-0">Coat and Jackets</p>
            <div className=" ">
              <img src={arrowright} />
            </div>
          </div>
          <div className="my-4 d-flex justify-content-between">
            <p className="paragraph p-0 m-0">Dressses</p>
            <div className=" ">
              <img src={arrowright} />
            </div>
          </div>
          <div className="my-4 d-flex justify-content-between">
            <p className="paragraph p-0 m-0">Short</p>
            <div className=" ">
              <img src={arrowright} />
            </div>
          </div>
          <div className="my-4 d-flex justify-content-between">
            <p className="paragraph p-0 m-0">Top</p>
            <div className=" ">
              <img src={arrowright} />
            </div>
          </div>
          <div className="my-4 d-flex justify-content-between">
            <p className="paragraph p-0 m-0">Bottoms</p>
            <div className=" ">
              <img src={arrowright} />
            </div>
          </div>

          <div className="m-20 ">
            <p className="heading">Featured Product</p>
          </div>

          <div className="py-3">
            <div className="m-20 d-flex ">
              <div className="shop-box"></div>
              <div className=" p-3">
                <p className="paragraph m-0 ">Tropical Playsuit</p>
                <p className="shop-doller m-0">$100</p>
              </div>
            </div>
            <div className="m-20 d-flex ">
              <div className="shop-box"></div>
              <div className=" p-3">
                <p className="paragraph m-0 ">Tropical Playsuit</p>
                <p className="shop-doller m-0">$100</p>
              </div>
            </div>
            <div className="m-20 d-flex ">
              <div className="shop-box"></div>
              <div className=" p-3">
                <p className="paragraph m-0 ">Tropical Playsuit</p>
                <p className="shop-doller m-0">$100</p>
              </div>
            </div>
            <div className="m-20 d-flex ">
              <div className="shop-box"></div>
              <div className=" p-3">
                <p className="paragraph m-0 ">Tropical Playsuit</p>
                <p className="shop-doller m-0">$100</p>
              </div>
            </div>
            <div className="m-20 d-flex ">
              <div className="shop-box"></div>
              <div className=" p-3">
                <p className="paragraph m-0 ">Tropical Playsuit</p>
                <p className="shop-doller m-0">$100</p>
              </div>
            </div>

            <div className="m-20 d-flex ">
              <div className="shop-box"></div>
              <div className=" p-3">
                <p className="paragraph m-0 ">Tropical Playsuit</p>
                <p className="shop-doller m-0">$100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
