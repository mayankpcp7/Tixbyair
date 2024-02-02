import React from "react";
import { React, useState } from "react";
import logo from "";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
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
      <section className="relative z-[2] animate__rotateInDownRight">
        <div className="container">
          <div className="flex justify-between items-center py-[14px]">
            <div></div>
            <div onClick={showUl} className="z-20 md:hidden">
              <h3 className="text-white text-3xl">
                {head ? <BiMenu /> : <RxCross1 />}
              </h3>
            </div>
            <div
              className={`flex flex-col md:flex-row fixed md:relative w-full min-h-screen md:min-h-0 top-[0] left-[-100%] md:left-0 ttransition-opacity duration-700 md:transition-none  justify-center md:justify-end
           items-center ${head ? "" : "!left-0 backdrop-blur-lg"}`}
            >
              <ul className="flex gap-6 flex-col md:flex-row items-center lg:gap-7">
                <li className="relative transition-all duration-100">
                  <a
                    onClick={showUl}
                    className="font-helvetaMedium before:w-0 before:transition-all before:duration-300 before:ease-linear text-white before:content-[''] before:h-[3px] w-0  hover:before:w-full before:absolute before:left-0 before:bottom-[-3%] before:bg-white text-base font-medium"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="relative">
                  <a
                    onClick={showUl}
                    className="font-helvetaMedium before:w-0 before:transition-all before:duration-300 before:ease-linear text-white text-base  before:h-[3px] w-0 transition-all duration-300 hover:before:w-full before:absolute before:bottom-[-3%] before:bg-white font-medium"
                    href="#features"
                  >
                    Features
                  </a>
                </li>
                <li className="relative">
                  <a
                    onClick={showUl}
                    className="font-helvetaMedium before:w-0 before:transition-all before:duration-300 before:ease-linear text-white   before:h-[3px] w-0 transition-all duration-300 hover:before:w-full before:absolute before:bottom-[-3%] before:bg-white text-base font-medium"
                    href="#pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li className="relative">
                  <a
                    onClick={showUl}
                    className="font-helvetaMedium before:w-0 before:transition-all before:duration-300 before:ease-linear   before:h-[3px] w-0 transition-all duration-300 hover:before:w-full before:absolute before:bottom-[-3%] before:bg-white text-white text-base font-medium"
                    href="#freetrial"
                  >
                    Free Trial
                  </a>
                </li>
              </ul>
              <button className="md:ms-7 mt-6 md:mt-0 bg-[#5B95E0] rounded-[100px] text-white py-[11px] px-[30px] font-roboto font-normal text-xl hover:bg-white hover:text-[#5B95E0] transition-all duration-300">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
