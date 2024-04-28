import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";

const Advertise = () => {
  return (
    <div className="mt-7 md:mt-36">
      <Container>
        <Flex className="flex gap-x-5 md:gap-x-10">
          <div className="max-w-2/4">
            <Link to="#">
              <Image imgsrc="assets/add_1.png" />
            </Link>
          </div>
          <div className="max-w-2/4">
            <Link to="#">
              <Image imgsrc="assets/add_2.png" />
            </Link>
            <Link to="#" className="mt-2 inline-block md:mt-[38px]">
              <Image imgsrc="assets/add_3.png" />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Advertise;
