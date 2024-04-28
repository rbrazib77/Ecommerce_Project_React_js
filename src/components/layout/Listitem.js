import React from "react";
import { NavLink } from "react-router-dom";
const Listitem = ({ listname, className ,href}) => {
  return <li className={className}>
    <NavLink to={href}>
      {listname}
    </NavLink>
    </li>;
};

export default Listitem;
