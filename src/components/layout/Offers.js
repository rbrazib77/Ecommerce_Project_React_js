import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Heading from "./Heading";
import Product from "./Product";

const Offers = () => {
  return (
    <div className="mt-5 md:mt-32">
      <Container>
        <Heading title="Special Offers" />
        <Flex className="sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between md:gap-x-10">
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
        </Flex>
      </Container>
    </div>
  );
};

export default Offers;
