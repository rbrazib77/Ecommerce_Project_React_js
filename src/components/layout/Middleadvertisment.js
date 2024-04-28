import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Image from "./Image";

const Middleadvertisment = () => {
  return (
    <div className="mt-2 md:mt-32">
      <Container>
        <Link to="#">
          <Image imgsrc="assets/middleadd.png" />
        </Link>
      </Container>
    </div>
  );
};

export default Middleadvertisment;
