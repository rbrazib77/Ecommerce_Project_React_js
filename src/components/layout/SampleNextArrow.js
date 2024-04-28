import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-[35%] right-[30px] !flex h-16 w-16 items-center justify-center rounded-full bg-green-500 "
      style={{ ...style }}
      onClick={onClick}
    >
      <HiOutlineArrowSmRight className="text-3xl text-white" />
    </div>
  );
};

export default SampleNextArrow;
