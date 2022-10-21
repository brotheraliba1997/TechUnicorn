import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function Counpones() {
     const carts = useSelector((state) => state.carts);
     const { cart } = carts;
     const [total,setTotal]=useState(0)
     useEffect(()=>{
     setTotal(cart.reduce(
        (previousTotal, currentTotal) => previousTotal + currentTotal.totalPrice,
        0
      ))
     },[cart])
  return (
    <div >
      <div className="coupones-box p-5 ">
        <div className="d-flex flex-column  align-items-star">
          <p className="cart-heading-h4 ">Have a Coupon?</p>
          <div>
            <input
              className="coupones-input"
              placeholder="Input your email here"
            />
          </div>
          <div className="py-3 ">
            <div className="coupones-button  d-flex justify-content-center align-items-center">
              <p className="AddtoCart-fonts mb-0 ">Apply</p>
            </div>
          </div>
        </div>
      </div>

      <div className="margin-top-40">
        <div className="coupones-total ">
          <p className="cart-heading-h4">Cart Totals</p>

          <div className="row ">
            <div className="col-lg-3 col-6 ">
              <p className="mycart-fonts-black">Subtotal</p>
              <p className="mycart-fonts-black">Shipping</p>
            </div>
            <div className="col-lg-9 col-6 ">
              <p className="mycart-fonts-black">${total}</p>
              <p className="mycart-fonts-black">Free Shipping</p>
              <div className="row">
                <div className="col-lg-6 col-6 ">
                  <p className="mycart-fonts-black">Shipping to Sidney</p>
                </div>
                <div className="col-lg-6 col-6  px-3 ">
                  <p className="product-shop-doller">Change</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 py-4">
              <p className="mycart-fonts-black">Total</p>
            </div>
            <div className="col-lg-9 col-6 py-4">
              <p className="mycart-fonts-black">${total}</p>
            </div>
          </div>
          
            <div className="Checkout  d-flex justify-content-center align-items-center">
              <p className="mb-0 AddtoCart-fonts">Checkout</p>
            </div>
          
        </div>
      </div>
    </div>
  );
}
