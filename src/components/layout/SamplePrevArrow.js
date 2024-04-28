import React from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="left-0-0 absolute top-[35%] z-50 !flex h-16 w-16 items-center justify-center rounded-full bg-green-500 "
      style={{ ...style }}
      onClick={onClick}
    >
      <HiOutlineArrowSmLeft className="text-3xl text-white" />
    </div>
  );
};

export default SamplePrevArrow;
