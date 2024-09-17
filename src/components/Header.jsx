import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";

const Header = () => {
    const[toggle,setToggle]=useState(false);

    const showSideMenu=()=>{
        setToggle(true);
    }
    const hideSideMenu=()=>{
        setToggle(false);
    }
    const links = [
      {
        icon: <IoIosSearch />,
        name: "Search",
      },
      {
        icon: <CiDiscount1 />,
        name: "Offers",
      },
      {
        icon: "",
        name: "Help",
      },
      {
        icon: "",
        name: "Signin",
      },
      {
        icon: "",
        name: "Cart",
      },
    ];

  return (
    <>
      <div
        className=" black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white z-[9999] h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="sticky top-0 bg-white p-3 shadow-xl text-[#686b78] z-50">
        <div className="max-w-[1200px] mx-auto   flex items-center">
          <div className="w-[100px]">
            <img src={logo} alt="logo" className="w-full" />
          </div>
          <div>
            <span className="font-bold border-b-[3px] border-black">
              Hemsurapada
            </span>{" "}
            Angul, Odisha 759122, India{" "}
            <RxCaretDown
              fontSize={25}
              className="inline text-[#fc8019] cursor-pointer"
              onClick={showSideMenu}
            />
          </div>
          <nav className="flex list-none gap-10 ml-auto text-[18px] font-semibold">
            {links.map((link, index) => {
              return (
                <li key={index} className="flex items-center gap-2">
                  {link.icon}
                  {link.name}
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
