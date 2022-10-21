import React from "react";
import "./Mycarts.css";

import delet from "../../../image/delete.png";
import redheart from "../../../image/redheart.png";
import Counpones from "../Coupones/Counpones";
import { useDispatch, useSelector } from "react-redux";
import { addQuantityAction, removeCartAction, removeQuantityAction } from "../../../Store/action/CartAction";

export default function Mycarts() {
   const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);
  const { cart } = carts;

  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex gap-4 m-20">
              <p className="mycart-fonts-black">1. Shopping Cart</p>
              <p className="mycart-fonts-gray">2. Checkout</p>
              <p className="mycart-fonts-gray">3. Order Succesed</p>
            </div>
            <p className="cart-heading">My Cart</p>
          </div>
        </div>

        <div className="row  ">
          <div className="col-lg-6  ">
            {cart.length > 0 &&
              cart.map((x) => (
                <div className="d-flex my-5 py-3 gap-4">
                  <div className="cart-box p-3 ">
                    <img  className="cart-image  " src={x.image} />
                  </div>

                  <div className="d-flex flex-column ">
                    <p className="cart-heading-h4">{x.title}</p>

                    <div className="d-flex  justify-content-between ">
                      <p className="mycart-fonts-black">
                        Price &#160; &#160; :
                      </p>
                      <p className="mycart-fonts-black">${x.price}</p>
                    </div>

                    <div className="d-flex  justify-content-between  ">
                      <p className="mycart-fonts-black">Quantity &#160; :</p>
                      <div className="d-flex ">
                        <button
                          className="border-0"
                          onClick={() => dispatch(removeQuantityAction(x))}
                          disabled={x.quantity <= 1}
                        >
                          -
                        </button>
                        <input
                          value={x.quantity}
                          disabled
                          style={{
                            width: "40px",
                            height: "40px",
                            border: "none",
                            background: "#E5E5E5",
                            textAlign: "center"
                          }}
                        />
                        <button
                          className="border-0"
                          onClick={() => dispatch(addQuantityAction(x))}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="d-flex gap-3 justify-content-between">
                      <p className="cart-doller p-0 m-0">${x.totalPrice.toFixed(2)}</p>
                      <div className="d-flex gap-3 align-items-center justify-content-between">
                        <div className="delet-box p-2 d-flex justify-content-center aligan-items-end">
                          <img height={19} width={18} src={delet} onClick={()=>dispatch(removeCartAction(x))} />
                        </div>
                        <div className="Wishlist-box p-2 d-flex justify-content-center aligan-items-center ">
                          <p className="product-shop-doller px-2">Wishlist</p>
                          <img height={16.73} width={18.48} src={redheart} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="col-lg-6">
            <Counpones />
          </div>
        </div>
      </div>
    </div>
  );
}
