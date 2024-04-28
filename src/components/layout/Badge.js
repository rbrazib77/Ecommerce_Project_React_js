import React from "react";

const Badge = ({ title }) => {
  return (
    <span className="absolute top-5 left-5 inline-block bg-primary px-8 py-2 font-dm text-sm font-bold text-white">
      {title}
    </span>
  );
};

export default Badge;
