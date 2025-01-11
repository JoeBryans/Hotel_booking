"use client";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

const Search = () => {
  const [open, setOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [destination, setDestination] = useState("");
  // const [date, setDate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // ]);
  const [options, setOptions] = useState({
    Adult: 1,
    children: 3,
    room: 2,
  });

  const handleButton = ({ type }) => {};

  return (
    <div
      className={
        // type === "Nobg"
        //   ? "bg-slate-300 mb-3:"

        "w-screen h-fit bg-blue-600 text-pretty text-slate-50 flex top-0 z-40 px-5"
      }
    >
      <div className="hidden w-max md:flex mx-auto flex-col justify-start gap-1 text-left relative top-2">
        <div className="flex justify-between my-4  w-max  border-2 text-slate-800  px-2 items-center rounded gap-2 search relative  bg-slate-300">
          <input
            type="text"
            placeholder="Hotel..."
            className="input focus:outline-none bg-white w-full max-w-xs font-semibold"
            onChange={(e) => setDestination(e.target.value)}
          />
          <div className="calender w-80 mx-2 relative">
            <span
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center gap-2"
            >
              <FaIcons.FaCalendarAlt className="text-slate-200" size={25} />
              {/* {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`} */}
            </span>
            {/* {open && (
                  <DateRange
                    className="absolute left-0 top-12 z-20"
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                  />
                )} */}
          </div>
          <div className="flex w-72 border-2 py-2 rounded-lg  items-center justify-center gap-2 relative">
            <FaIcons.FaUser />
            <span
              onClick={() => setOpenOptions(!openOptions)}
            >{`${options.Adult} adult . ${options.children} children . ${options.room} room`}</span>
            <div
              className={
                openOptions
                  ? " absolute top-14 left-0 bg-slate-50 shadow-md text-slate-700 font-bold px-3 py-2 flex flex-col justify-center gap-2 z-20"
                  : "hidden"
              }
            >
              <div className="flex item-center justify-between w-44 ">
                <span> {`adult `}</span>
                <div className="flex gap-2 items-center">
                  <button onClick={handleButton}>-</button>
                  <span> {`${options.Adult}`}</span>

                  <button onClick={handleButton}>+</button>
                </div>
              </div>

              <div className="flex item-center justify-between  w-44 ">
                {" "}
                <span> {`children`}</span>
                <div className="flex">
                  <div className="flex gap-2 items-center ">
                    <button onClick={handleButton}>-</button>
                    <span> {`${options.children}`}</span>

                    <button onClick={handleButton}>+</button>
                  </div>
                </div>
              </div>

              <div className="flex item-center justify-between w-44 ">
                {" "}
                <span> {`room `}</span>
                <div className="flex">
                  <div className="flex gap-2 items-center">
                    <button onClick={handleButton}>-</button>
                    <span> {`${options.room}`}</span>

                    <button onClick={handleButton}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className=" bg-green-600 text-white h-14  rounded w-28 ">
            Search
          </button>
        </div>
      </div>
      {/* small screen */}
      <div className="flex md:hidden w-full  flex-col justify-start gap-1  text-left relative top-0 py-3">
        <div className="flex flex-col my-4 items-center rounded gap-2 search relative ">
          <div className="w-full border-4 rounded-lg">
            <input
              type="text"
              placeholder="Hotel..."
              className="input focus:outline-none bg-transparent  w-full max-w-xs font-semibold"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="my-2 border-4 rounded-lg p-2 w-full mx-2 relative">
            <span
              onClick={() => setOpen(!open)}
              className="flex items-center flex-wrap justify-start  gap-2"
            >
              <FaIcons.FaCalendarAlt className="text-slate-200" size={25} />
              {/* {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`} */}
            </span>
            {/* {open && (
                <DateRange
                  className="absolute left-0 top-12   z-50"
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              )} */}
          </div>
          <div className="flex w-full my-2 border-4 rounded-lg items-center p-2 justify-start gap-2 relative">
            <FaIcons.FaUser />
            <span
              onClick={() => setOpenOptions(!openOptions)}
            >{`${options.Adult} adult . ${options.children} children . ${options.room} room`}</span>
            <div
              className={
                openOptions
                  ? " absolute top-14 left-0 bg-slate-50 shadow-md text-slate-700 font-bold px-3 py-2 flex flex-col justify-center gap-2 z-20"
                  : "hidden"
              }
            >
              <div className="flex item-center justify-between w-44 ">
                <span> {`adult `}</span>
                <div className="flex gap-2 items-center  ">
                  <Button onClick={handleButton}>-</Button>
                  <span> {`${options.Adult}`}</span>

                  <Button onClick={handleButton}>+</Button>
                </div>
              </div>

              <div className="flex item-center justify-between  w-44 ">
                {" "}
                <span> {`children`}</span>
                <div className="flex">
                  <div className="flex gap-2 items-center ">
                    <Button onClick={handleButton}>-</Button>
                    <span> {`${options.children}`}</span>

                    <Button onClick={handleButton}>+</Button>
                  </div>
                </div>
              </div>

              <div className="flex item-center justify-between w-44 ">
                {" "}
                <span> {`room `}</span>
                <div className="flex">
                  <div className="flex gap-2 items-center">
                    <Button onClick={handleButton}>-</Button>
                    <span> {`${options.room}`}</span>

                    <Button onClick={handleButton}>+</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-ghost w-full hover:bg-white hover:text-blue-400 rounded-box bg-white text-xl text-blue-600 h-14   md:w-28 ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
