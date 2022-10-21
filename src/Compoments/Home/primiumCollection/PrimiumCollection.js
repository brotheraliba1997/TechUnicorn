import React, { useEffect } from 'react'
import arrownormall from '../../../image/arrownormall.png'
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import { getProductByAction } from '../../../Store/action/Productaction';


export default function PrimiumCollection() {

  
  let navigate = useNavigate();
  const dispatch=useDispatch();
  const products = useSelector(state=>state.products)
const {productList}=products


  const product = (id) => {
    // 👇️ navigate to /contacts
    console.log(id,"id")
    navigate(`/product/${id}`)
  };



   


  useEffect(()=>{
      dispatch(getProductByAction());
},[])
console.log('prodct',products);
  return (
    <div>
      <div className="container head-product margin-top">
        <p className="menu-Collection-font text-center">
          Our Premium Collection
        </p>
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="d-flex gap-4 justify-content-around flex-wrap menu-flex  mb-3 ">
              <div className="p-2 menu-flex-font ">Product</div>
              <div className="p-2 ">Electronic</div>
              <div className="p-2 ">Men's clothing</div>
              <div className="p-2 ">women's clothing</div>
              <div className="p-2 ">Short</div>
              <div className="p-2 ">Skirt</div>
              <div className="p-2 ">T-Shirt</div>
            </div>
          </div>
        </div>

        <div className="row">
          {productList.length > 0 &&
            productList.map((x, i) => (
              <div className="col-lg-4 ">
                <div className="Home-box-product p-3  my-5">
                  <img className="img-size-fix" src={x.image} />

                  <div className="d-flex  p-5 flex-column justify-content-center align-items-start">
                    <p
                      className="paraghp m-0"
                      style={{ height: "45px", overflow: "hidden" }}
                    >
                      {x.title}
                    </p>
                    <p className="heading ">{x.category}</p>
                    <div className="card-button" onClick={()=>product(x.id)}>
                      <img src={arrownormall} />
                      <img />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="d-flex padding justify-content-center">
          <button className="button ">
            <p className="button-fonts">Find out More</p>
          </button>
        </div>
      </div>
    </div>
  );
}
