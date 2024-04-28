import React from "react";
import Flex from "./Flex";
import SocialIcon from "./SocialIcon";
const FooterBottom = () => {
  return (
    <Flex className="flex items-center justify-between">
      <SocialIcon />
      <p className="regular font-dm text-sm text-[#6D6D6D]">
        2020 Orebi Minimal eCommerce Figma Template by Adveits
      </p>
    </Flex>
  );
};

export default FooterBottom;
