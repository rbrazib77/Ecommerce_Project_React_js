import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
const LeftSidebarItem = (props) => {
  let [show, setShow] = useState(false);
  let [drop, setDrop] = useState(props.subDropDown);
  return (
    <>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className=" flex cursor-pointer items-center justify-between border-b border-solid border-[#767676] py-5"
        >
          <h3 className="font-regular cursor-pointer font-dm text-base text-[#767676]">
            {props.color && (
              <span
                className="mr-2 inline-block h-[11px] w-[11px] rounded-full"
                style={{ background: props.color }}
              ></span>
            )}
            {props.title}
          </h3>
          <BsPlus />
        </div>
      ) : (
        <div className=" flex cursor-pointer items-center justify-between border-b border-solid border-[#767676] py-5">
          <h3 className="font-regular cursor-pointer font-dm text-base text-[#767676]">
            {props.color && (
              <span
                className="mr-2 inline-block h-[11px] w-[11px] rounded-full"
                style={{ background: props.color }}
              ></span>
            )}
            {props.title}
          </h3>
          <BsPlus />
        </div>
      )}

      {show && (
        <div>
          <p>{props.children}</p>
        </div>
      )}
    </>
  );
};

export default LeftSidebarItem;
