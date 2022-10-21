import React from "react";
import star from "../../../image/star.png";
import { useDispatch, useSelector } from "react-redux";

export default function Reviews() {
  const products = useSelector((state) => state.products);
  const { individualProduct } = products;
  return (
    <div>
      <div className="container">
        <div className="row">
          <p className="Description-heading my-5">Description</p>
          <div className="col-lg-6 ">
            <p className="paragraph-grey ">
              {individualProduct.description}
            </p>

            <div className="margin-top-40">
              <p className="Description-heading">Reviews (2)</p>
            </div>

            <div className=" d-flex gap-3  ">
              <div className="reviewcircle "></div>

              <div>
                <div className="d-flex justify-content-between  align-items-center">
                  <p className="Description-heading px-3 m-0">Alex Iwobi</p>
                  <div className="d-flex px-5">
                    <img width={24} height={24} src={star} />
                    <img width={24} height={24} src={star} />
                    <img width={24} height={24} src={star} />
                    <img width={24} height={24} src={star} />
                    <img width={24} height={24} src={star} />
                  </div>
                </div>
                <div className="flex-column ">
                  <p className="paragraph-grey px-3">
                    2 March 2021 at 06.30 pm
                  </p>
                  <div className="d-flex gap-2  px-2 ">
                    <div className="review-box"></div>
                    <div className="review-box"></div>
                    <div className="review-box"></div>
                    <div className="review-box"></div>
                  </div>
                  <p className="paragraph-grey py-3 ">
                    Thank you for the article that was made, it really provides{" "}
                    <br></br>
                    insight and knowledge that I didn't know before.
                  </p>
                </div>
              </div>
            </div>
            <div className=" d-flex gap-3  ">
              <div className="reviewcircle "></div>

              <div>
                <div className="d-flex justify-content-between  align-items-center">
                  <p className="Description-heading px-3 m-0">Alex Iwobi</p>
                  <div className="d-flex px-5">
                    <img width={24} height={24} src={star} />
                    <img width={24} height={24} src={star} />
                    <img width={24} height={24} src={star} />
                    <img width={24} height={24} src={star} />
                    <img width={24} height={24} src={star} />
                  </div>
                </div>
                <div className="flex-column ">
                  <p className="paragraph-grey px-3">
                    2 March 2021 at 06.30 pm
                  </p>
                  <div className="d-flex gap-2  px-2 ">
                    <div className="review-box"></div>
                    <div className="review-box"></div>
                    <div className="review-box"></div>
                    <div className="review-box"></div>
                  </div>
                  <p className="paragraph-grey py-3 ">
                    Thank you for the article that was made, it really provides{" "}
                    <br></br>
                    insight and knowledge that I didn't know before.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6  ">
            <div className="my-5 flex-justify-content-center">
              <div className="detail-large-box "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
