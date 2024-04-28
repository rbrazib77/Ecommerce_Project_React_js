import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { TbNumber2 } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa";
import { RxReload } from "react-icons/rx";

const AdditionalInfo = () => {
  return (
    <div className="mt-[-6px] border border-solid border-[#F0F0F0F0] py-2 sm:py-7">
      <Container>
        <Flex className="flex justify-between">
          <Flex className="flex items-center gap-x-1 sm:gap-x-4">
            <TbNumber2 className="text-[10px] sm:text-2xl" />
            <p className="font-regular font-dm text-[10px] text-[#d6d6d6] sm:text-base">
              Two years warranty
            </p>
          </Flex>
          <Flex className="flex items-center gap-x-1 sm:gap-x-4">
            <FaCarSide className="text-[10px] sm:text-2xl" />
            <p className="font-regular te font-dm text-[10px] text-[#d6d6d6] sm:text-base">
              Free shipping
            </p>
          </Flex>
          <Flex className="flex items-center gap-x-1 sm:gap-x-4">
            <RxReload className="text-[10px] sm:text-2xl" />
            <p className="font-regular font-dm text-[10px] text-[#d6d6d6] sm:text-base">
              Return policy in 30 days
            </p>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default AdditionalInfo;
