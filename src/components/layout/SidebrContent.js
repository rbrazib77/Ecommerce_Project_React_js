import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import LeftSidebarItem from "../layout/LeftSidebarItem";
const SideContent = ({ dorpDown, droptitle, data }) => {
  let [show, setShow] = useState(dorpDown);
  let [drop, setDrop] = useState(dorpDown);
  return (
    <div className="mb-14">
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="mb-9 flex cursor-pointer items-center justify-between"
        >
          <h3 className="cursor-pointer font-dm text-xl font-bold">
            {droptitle}
          </h3>
          <GoTriangleDown />
        </div>
      ) : (
        <h3 className="mb-9 cursor-pointer font-dm text-xl font-bold">
          {droptitle}
        </h3>
      )}

      {show && (
        <div>
          {data.map((item, index) =>
            item.subcategory ? (
              <LeftSidebarItem
                subDropDown={item.subcategory ? true : false}
                title={item.name}
                color={item.code}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <h1 className="font-regular  cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                      {sitem.name}
                    </h1>
                  ))}
              </LeftSidebarItem>
            ) : (
              <LeftSidebarItem
                subDropDown={item.subcategory ? true : false}
                title={item.name}
                color={item.code}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <h1 className="font-regular  cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                      {sitem.name}
                    </h1>
                  ))}
              </LeftSidebarItem>
            )
          )}
        </div>
      )}
      {!drop && (
        <div>
          {data.map((item, index) =>
            item.subcategory ? (
              <LeftSidebarItem
                subDropDown={item.subcategory ? true : false}
                title={item.name}
                color={item.code}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <h1 className="font-regular  cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                      {sitem.name}
                    </h1>
                  ))}
              </LeftSidebarItem>
            ) : (
              <LeftSidebarItem
                subDropDown={item.subcategory ? true : false}
                title={item.name}
                color={item.code}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <h1 className="font-regular  cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                      {sitem.name}
                    </h1>
                  ))}
              </LeftSidebarItem>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SideContent;
