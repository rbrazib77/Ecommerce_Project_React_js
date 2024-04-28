import React, { useState } from "react";
import Breadcurmb from "../components/layout/Breadcurmb";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import LeftSideBar from "../components/layout/LeftSideBar";
import Pagination from "../components/layout/Pagination";

const Shop = () => {
  // console.log(window.location.pathname.split("/")[1]);

  let [shownumber, setShowNumber] = useState(12);

  let handelPaginationChange = (e) => {
    setShowNumber(+e.target.value);
  };
  return (
    <Container>
      <Breadcurmb />
      <Flex className="flex gap-x-10">
        <div className="w-[25%] ">
          <LeftSideBar />
        </div>
        <div className="relative w-[75%]">
          <div className="mb-10 flex gap-x-10">
            <div className="items-center gap-x-3.5 text-primary md:flex">
              <span className="font-regular inline-block font-dm text-[#767675]">
                Sort By:
              </span>
              <select
                id="countries"
                class="focus:border-black-500 font-regular block rounded-lg border border-[#F0F0F0] bg-gray-50 p-2.5 font-dm text-[#767675] md:w-[239px]  "
              >
                <option
                  selected
                  className="font-regular font-dm text-[#767675] "
                >
                  Featured
                </option>
                <option
                  className="font-regular font-dm text-[#767675]"
                  value="US"
                >
                  United States
                </option>
                <option
                  className="font-regular font-dm text-[#767675] "
                  value="CA"
                >
                  Canada
                </option>
                <option
                  className="font-regular font-dm text-[#767675]"
                  value="FR"
                >
                  France
                </option>
                <option
                  className="font-regular font-dm text-[#767675] "
                  value="DE"
                >
                  Germany
                </option>
              </select>{" "}
            </div>
            <div className=" items-center gap-x-3.5 text-primary md:flex">
              <span className="font-regular inline-block font-dm text-[#767675]">
                Show:
              </span>
              <select
                onChange={handelPaginationChange}
                id="countries"
                class="focus:border-black-500 font-regular block rounded-lg border border-[#F0F0F0] bg-gray-50 p-2.5 font-dm text-[#767675] md:w-[239px]  "
              >
                <option
                  value="12"
                  className="font-regular font-dm text-[#767675] "
                >
                  12
                </option>
                <option
                  className="font-regular font-dm text-[#767675]"
                  value="24"
                >
                  24
                </option>
                <option
                  className="font-regular font-dm text-[#767675] "
                  value="36"
                >
                  36
                </option>
                <option
                  className="font-regular font-dm text-[#767675]"
                  value="48"
                >
                  48
                </option>
              </select>
            </div>
          </div>
          <Pagination itemsPerPage={shownumber} />
        </div>
      </Flex>
    </Container>
  );
};

export default Shop;
