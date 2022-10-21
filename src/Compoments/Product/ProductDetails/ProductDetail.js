import React, { useEffect, useState } from 'react'
import star from "../../../image/star.png";
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdAction } from '../../../Store/action/Productaction';
import { addCartAction } from '../../../Store/action/CartAction';

export default function ProductDetail() {

  const [count , setCount] = useState(1)
  const [totalPrice,setTotalPrice]=useState()

   const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { individualProduct } = products;
  const params=useParams();

   useEffect(() => {
     dispatch(getProductByIdAction(params.id));
   }, []);

 useEffect(() => {
   setTotalPrice(count*individualProduct.price)
 }, [count,individualProduct]);


   console.log(individualProduct)


  let navigate = useNavigate();
   const Addtocart = () => {
     // 👇️ navigate to /contacts
     let data={
      ...individualProduct,
      totalPrice,
      quantity:count
     }
     dispatch(addCartAction(data))
     navigate("/Cart");
   };
  return (
    <div>
      <div className="bg-white py-5">
        <div className="container">
          <div className="row">
            <p className="heading m-20">Grocery Fruits Japan Oranges</p>
            <div className="col-lg-6">
              <div className="product-box-alignment">
                <div className="Product-box-details p-3">
                  <img
                    className="product-image  "
                    src={individualProduct.image}
                  />
                </div>
                <div className="d-flex  m-20 justify-content-between ">
                  <div className="product-small-box-detail">
                    <img
                      className="product-image   "
                      src={individualProduct.image}
                    />
                  </div>
                  <div className="product-small-box-detail">
                    <img
                      className="product-image "
                      src={individualProduct.image}
                    />
                  </div>
                  <div className="product-small-box-detail">
                    <img
                      className="product-image "
                      src={individualProduct.image}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 px-5">
              <div className="d-flex justify-content-flex-start ">
                <p className="product-heading ">{individualProduct.title}</p>
              </div>
              <div className="d-flex gap-2 justify-content-flex-start align-items-center">
                <img width={32} height={32} src={star} />
                <img width={32} height={32} src={star} />
                <img width={32} height={32} src={star} />
                <img width={32} height={32} src={star} />
                <img width={32} height={32} src={star} />
              </div>

              <p className="product-rate">${individualProduct.price}</p>
              <p className="heading">Details Product</p>
              <p className="paragraph-grey">{individualProduct.description}</p>

              <div className="d-flex justify-content-between align-items-center">
                <p className="paragraph">Quantity</p>
                <div className="product-quality">
                  <div className="d-flex bg-white justify-content-center">
                    <button
                    className='border-0'
                      onClick={()=>setCount(count - 1)}
                      disabled={count<=1}
                      style={{ background: "white"}}
                    >
                      -
                    </button>
                    <input onChange={(e)=>{setCount(e.target.value)}}
                      type="number"
                      min={1}
                      value={count}
                      style={{
                        width: "50%",
                        background: "white",
                        border: "white",
                        textAlign: "center",
                      }}
                    />
                    <button
                    className='border-0'
                      onClick={()=>setCount(count + 1)}
                      width={10}
                      height={20} 
                      style={{ background: "white" }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="product-shop-doller">Add note</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="paragraph">Sub Total</p>
                <p className="paragraph">${totalPrice}</p>
              </div>

              <div className="d-flex gap-2 ">
                <div className="Wishlist d-flex justify-content-center align-items-end">
                  <p className="product-shop-doller">Wishlist</p>
                </div>
                <div
                  onClick={Addtocart}
                  className="Addtocart d-flex justify-content-center align-items-end"
                >
                  <p className="AddtoCart-fonts">Add to Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
