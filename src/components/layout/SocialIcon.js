import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import Flex from "./Flex";
const SocialIcon = () => {
  return (
    <Flex className="flex text-base">
      <TiSocialFacebook />
      <AiOutlineInstagram className="mx-6" />
      <RiLinkedinFill />
    </Flex>
  );
};

export default SocialIcon;
