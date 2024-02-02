import React from "react";
import { useState } from "react";
import logo from "../assets/images/webp/navlogo.webp";
// import { RxCross1 } from "react-icons/rx";
// import { BiMenu } from "react-icons/bi";
const Nav = () => {
  const [head, sethead] = useState(true);
  function showUl() {
    sethead(!head);
  }
  if (!head) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  return (
    <>

    </>
  );
};

export default Nav;
