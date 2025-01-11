"use client";
import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import axios from "axios";
import Link from "next/link";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const Bar = () => {
    setOpenNav(!openNav);
    console.log(openNav);
  };
  const user = true;
  return (
    <div className="bg-blue-600 border-b-1 border-slate-700 lg:px-52 md:px-14 px-10">
      <div className="navbar w-full  bg-blue-600">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost flex gap-0 ">
            <h2 className="text-yellow-500 text-xl">Hotel.</h2>{" "}
            <span className="text-white text-md mt-3">booking</span>
          </Link>{" "}
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div> */}
        <div className="navbar-end">
          <ul className="hidden md:flex  dropdown-content  text-white text-xl font-semibold gap-6 items-center">
            <li>
              <a className="btn btn-ghost text-xl">NGN</a>
            </li>
            <li>
              <Link href="">List your property</Link>
            </li>
            <li>
              <Link href="">Trips</Link>
            </li>
            <li>
              <Link href="">sign in</Link>
            </li>
            {/* <li>
              <Link href="">List your property</Link>
            </li> */}
          </ul>

          <div className="md:hidden flex ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <FaIcons.FaBars color="white" size={25} />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content bg-blue-600 rounded-box z-[1] mt-3 w-40 -m-20 p-3 shadow text-white flex flex-col gap-4"
              >
                <li>
                  <Link
                    href=""
                    className="hover:border-b-2 hover:border-slate-500 text-white"
                  >
                    List your property
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="hover:border-b-2 hover:border-slate-500 text-white"
                  >
                    Trips
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="hover:border-b-2 hover:border-slate-500 text-white"
                  >
                    sign in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
