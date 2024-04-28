import React from "react";

const Button = ({ title }) => {
  return (
    <div className="text-center md:text-start">
      <button className=" bg-primary py-4 px-24  font-dm text-sm font-bold text-white">
        {title}
      </button>
    </div>
  );
};

export default Button;
