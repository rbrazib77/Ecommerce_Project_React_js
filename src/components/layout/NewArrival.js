import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Heading from "./Heading";
import Product from "./Product";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
const NewArrival = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-5 md:mt-32">
      <Container>
        <Heading title="New Arriral" />
        {/* <Flex className="sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between md:gap-x-10"> */}
        <Slider {...settings}>
          <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
            <Product src="assets/p_1.png" badge={true} />
          </div>
          <div className="sm:max-w-[300px]  md:max-lg:max-w-[345px] lg:max-w-[370px]">
            <Product src="assets/p_2.png" badge={false} />
          </div>
          <div className="sm:max-w-[300px]  md:max-lg:max-w-[345px] lg:max-w-[370px]">
            <Product src="assets/p_3.png" badge={true} />
          </div>
          <div className="sm:max-w-[300px]  md:max-lg:max-w-[345px] lg:max-w-[370px]">
            <Product src="assets/p_4.png" badge={false} />
          </div>
          <div className="sm:max-w-[300px]  md:max-lg:max-w-[345px] lg:max-w-[370px]">
            <Product src="assets/p_4.png" badge={false} />
          </div>
        </Slider>
        {/* </Flex> */}
      </Container>
    </div>
  );
};

export default NewArrival;
