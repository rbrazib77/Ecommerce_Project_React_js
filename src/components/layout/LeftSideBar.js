import React from "react";
import SidebrContent from "./SidebrContent";
import { category, colors, brands, price } from "../../data/data";

const LeftSideBar = ({ data }) => {
  return (
    <>
      <SidebrContent
        dorpDown={true}
        droptitle="Shop By Category"
        data={category}
      />
      <SidebrContent dorpDown={false} droptitle="Shop By Color" data={colors} />
      <SidebrContent dorpDown={true} droptitle="Shop By Brand" data={brands} />
      <SidebrContent dorpDown={true} droptitle="Shop By Price" data={price} />
    </>
  );
};

export default LeftSideBar;
