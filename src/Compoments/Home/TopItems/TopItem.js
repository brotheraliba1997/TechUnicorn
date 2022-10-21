import React from 'react'
import  { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./TopItem.css";
import { Pagination } from "swiper";


export default function TopItem() {
  return (
    <>
      <div>
        <div className="bg-white py-5">
          <div className="container ">
            <div className="row">
              <div className="col-lg-12 text-center">
                <p className="Top-items-heading ">Top Items</p>
                <p className="Top-items-Paragh text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod <br></br> tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>

              <Swiper
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                spaceBetween={20}
                slidesPerGroup={1}
                autoplay={{
                  delay: 8000,
                  duration: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className=" ">
                    <div className="position-slider-Card margin-top ">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" ">
                    <div className="position-slider-Card margin-top ">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" ">
                    <div className="position-slider-Card margin-top ">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" ">
                    <div className="position-slider-Card margin-top ">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" ">
                    <div className="position-slider-Card margin-top ">
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
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
