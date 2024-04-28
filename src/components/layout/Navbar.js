import React from "react";
import Image from "./Image";
import Flex from "./Flex";
import List from "./List";
import Container from "./Container";
import Listitem from "./Listitem";
import { AiOutlineBars } from "react-icons/ai";
import { useEffect, useState } from "react";
const Navbar = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollwidth(e) {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollwidth();
    window.addEventListener("resize", scrollwidth);
  }, []);

  let handelChang = () => {
    setShow(!show);
  };
  return (
    <nav className="lg:py-8">
      <Container>
        <Flex className="lg:flex">
          <div className="lg:w-1/4">
            <Image imgsrc="assets/logo.png" />
          </div>
          <div className="w-full lg:w-3/4">
            <AiOutlineBars
              onClick={handelChang}
              className="absolute top-2.5 right-2.5 ml-auto block lg:hidden"
            />
            {show && (
              <List className="mt-5   justify-end gap-x-10  text-sm	font-bold lg:mt-0 lg:flex ">
                <Listitem
                  className="my-2.5 font-dm text-sm font-bold hover:font-bold lg:my-0"
                  listname="Home"
                  href="/"
                />
                <Listitem
                  className="my-2.5 font-dm text-sm font-normal hover:font-bold lg:my-0"
                  listname="Shop"
                  href="product"
                />
                <Listitem
                  className="my-2.5 font-dm text-sm font-normal hover:font-bold lg:my-0"
                  listname="About"
                  href="about"
                />
                <Listitem
                  className="my-2.5 font-dm text-sm font-normal hover:font-bold lg:my-0"
                  listname="Contact"
                  href="contact"
                />
                <Listitem
                  className="my-2.5 font-dm text-sm font-normal hover:font-bold lg:my-0"
                  listname="Journal"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
