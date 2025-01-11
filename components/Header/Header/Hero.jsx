import Link from "next/link";
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

const Hero = ({ type }) => {
  return (
    <div className="bg-blue-600   lg:px-52 md:px-14 px-10">
      <div className=" w-full flex  items-center justify-center gap-3  md:gap-10 py-6">
        <Link
          href="/"
          className="flex items-center gap-2  w-max p-2 rounded-full border text-white cusor-pointer "
        >
          <FaIcons.FaBed size={20} />
          <span className="font-semibold text-white hover:text-slate-300  md:text-lg ">
            Stay
          </span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2  w-max p-2 rounded-full border text-white cusor-pointer "
        >
          <FaIcons.FaPlane size={20} />
          <span className="font-semibold text-white hover:text-slate-300  md:text-lg ">
            Flights
          </span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2  w-max p-2 rounded-full border text-white cusor-pointer "
        >
          <FaIcons.FaCar size={20} />
          <span className="font-semibold text-white hover:text-slate-300  md:text-lg ">
            rentals
          </span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2  w-max p-2 rounded-full border text-white cusor-pointer "
        >
          <FaIcons.FaCar size={20} />
          <span className="font-semibold text-white hover:text-slate-300  md:text-lg ">
            Carb
          </span>
        </Link>
        {/* <Link
            href="/"
            className="flex items-center gap-2  w-max p-2 rounded-full border text-white cusor-pointer "
          >
            <FaIcons.FaBed size={20} />
            <span className="font-semibold text-white hover:text-slate-300  md:text-lg ">
              Stay
            </span>
          </Link> */}
      </div>
      {type === "home" && (
        <div className="flex flex-col gap-4 mt-5">
          <span className="text-xl text-white font-semibold">
            Find your next stay
          </span>
          <p className="text-md text-white ">
            Search deals on hotels, homes, and much more...
          </p>
        </div>
      )}{" "}
    </div>
  );
};

export default Hero;
