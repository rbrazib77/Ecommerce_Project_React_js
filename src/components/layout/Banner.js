import React, { useState } from "react";
import Slider from "react-slick";
import Image from "./Image";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";

const Banner = () => {
  let [dotActive, setDotActive] = useState(0);
  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "10px 0",
              }
            : {
                width: "30px",
                color: "#262626",
                borderRight: "3px white solid",
                padding: "10px 0",
                color: "transparent",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      fontSize: "12px",
                    }
                  : {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px white solid",
                      color: "transparent",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <Link to="#">
        <div>
          <Image imgsrc="assets/banner.png" />
        </div>
      </Link>
      <Link to="#">
        <div>
          <Image imgsrc="assets/banner.png" />
        </div>
      </Link>
      <Link to="#">
        <div>
          <Image imgsrc="assets/banner.png" />
        </div>
      </Link>
    </Slider>
  );
};

export default Banner;
