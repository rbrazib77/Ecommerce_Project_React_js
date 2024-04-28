import Container from "./Container";
import React, { useEffect, useRef, useState } from "react";
import Flex from "./Flex";
import Image from "./Image";
import Search from "./Search";
import Dropdown from "./Dropdown";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { GoTriangleDown } from "react-icons/go";
import { ImCross } from "react-icons/im";
import List from "./List";
import Listitem from "./Listitem";
import { NavLink } from "react-router-dom";

const Header = () => {
  let [categoryDropDownShow, setCategoryDropDownShow] = useState(false);
  let [userDropDownShow, setUserDropDownShow] = useState(false);
  let [cartDropDownShow, setCartDropDownShow] = useState(false);
  let categoryDropdownRef = useRef();
  let userDropDownRef = useRef();
  let cartDropDownRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryDropdownRef.current.contains(e.target)) {
        setCategoryDropDownShow(true);
      } else {
        setCategoryDropDownShow(false);
      }
      if (userDropDownRef.current.contains(e.target)) {
        setUserDropDownShow(true);
      } else {
        setUserDropDownShow(false);
      }
      if (cartDropDownRef.current.contains(e.target)) {
        setCartDropDownShow(true);
      } else {
        setCartDropDownShow(false);
      }
    });
  });

  return (
    <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex justify-between ">
          <div className="flex items-center">
            <Dropdown className="relative z-50" dropref={categoryDropdownRef}>
              <p className="flex items-center gap-x-2.5 font-dm font-normal">
                <RiBarChartHorizontalLine />
                <span className="hidden lg:inline-block">Shop by Category</span>
              </p>
              {categoryDropDownShow && (
                <List className="absolute top-8 w-[263px] bg-primary font-dm text-[#767676]">
                  <Listitem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 transition duration-300 ease-in-out hover:px-7 hover:font-bold hover:text-white"
                    listname="Accesories"
                    href="gfdgfdgfg"
                  />
                  <Listitem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 transition duration-300 ease-in-out hover:px-7 hover:font-bold hover:text-white"
                    listname="Furniture"
                  />
                  <Listitem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 transition duration-300 ease-in-out hover:px-7 hover:font-bold hover:text-white"
                    listname="Electronics"
                  />
                  <Listitem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 transition duration-300 ease-in-out hover:px-7 hover:font-bold hover:text-white"
                    listname="Clothes"
                  />
                  <Listitem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 transition duration-300 ease-in-out hover:px-7 hover:font-bold hover:text-white"
                    listname="Bags"
                  />
                  <Listitem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 transition duration-300 ease-in-out hover:px-7 hover:font-bold hover:text-white"
                    listname="Home appliances"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div className="relative w-auto lg:w-[601px]">
            <Search
              className="w-full py-4 px-5 font-dm font-normal placeholder:text-[#c4c4c4]"
              placeholder="Search Products"
            />
            <FaSearch className="absolute top-5 right-3" />
          </div>
          <div className="flex items-center">
            <Flex className="flex gap-x-10	">
              <Dropdown className="relative z-50" dropref={userDropDownRef}>
                <div className="flex items-center">
                  <FaUserAlt className="text-[15px] " />
                  <GoTriangleDown className="text-[9px]" />
                </div>
                {userDropDownShow && (
                  <List className="absolute top-8 right-0 w-[200px] border border-solid border-[#F0F0F0] bg-white text-[#767676]">
                    <Listitem
                      className="font-regular border-b-2	 border-solid border-[#F0F0F0] py-4 px-5 transition duration-150 ease-in-out hover:bg-primary hover:px-7 hover:font-bold hover:text-white"
                      listname="My Account"
                    />
                    <Listitem
                      className="font-regular border-b-2 border-solid border-[#F0F0F0]	 py-4 px-5 font-dm transition duration-150 ease-in-out hover:bg-primary hover:px-7 hover:font-bold hover:text-white"
                      listname="Log Out"
                    />
                  </List>
                )}
              </Dropdown>
              <div>
                <Dropdown className="relative z-50" dropref={cartDropDownRef}>
                  <HiShoppingCart className="text-lg " />
                  {cartDropDownShow && (
                    <div className="absolute top-8 right-0 w-[360px] border border-solid border-[#F0F0F0]">
                      <div className=" bg-[#F5F5F3] p-5">
                        <Flex className="flex justify-between">
                          <div>
                            <Image imgsrc="assets/cartimg.png" />
                          </div>
                          <div className="flex  flex-col justify-center">
                            <h3 className="font-dm text-sm font-bold text-primary">
                              Black Smart Watch
                            </h3>
                            <p className="mt-3 font-dm text-sm font-bold text-primary">
                              $44.00
                            </p>
                          </div>
                          <div className="flex items-center justify-end ">
                            <ImCross className="text-sm" />
                          </div>
                        </Flex>
                      </div>
                      <div className="bg-white p-5">
                        <h4 className="font-regular font-dm text-base text-[#767676]">
                          Subtotal:{" "}
                          <span className="font-bold text-primary">$44.00</span>
                        </h4>
                        <NavLink
                          to="#"
                          className=" mt-3 inline-block border border-solid border-primary px-10 py-4 font-dm text-sm font-bold"
                        >
                          View Cart
                        </NavLink>
                        <NavLink
                          to="#"
                          className="ml-4 mt-3 inline-block border border-solid border-primary bg-primary px-10 py-4 font-dm text-sm font-bold text-white"
                        >
                          CheckOut
                        </NavLink>
                      </div>
                    </div>
                  )}
                </Dropdown>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
