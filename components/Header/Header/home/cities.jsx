import React from "react";
import lagos from "../../../../assets/lagos.jpg";
import Abuja from "../../../../assets/Abuja.jpg";
import kano from "../../../../assets/city1.jpg";
import ibadan from "../../../../assets/city.jpg";
import ph from "../../../../assets/city2.jpg";
import Image from "next/image";
const Cities = () => {
  const City = [
    {
      id: 1,
      name: "Lagos",
      flag: "",
      image: lagos,
    },
    {
      id: 2,
      name: "Abuja",
      image: Abuja,
    },

    {
      id: 3,
      name: "Ibadan",
      image: ibadan,
    },
    {
      id: 4,
      name: "Kano",
      image: kano,
    },
    {
      id: 5,
      name: "portharcourt",
      image: ph,
    },
  ];
  return (
    <div>
      <h4>Explore stays in popular destinations</h4>

      <div className=" flex flex-wrap items-center gap-4">
        {City
          ? City.map((items, i) => {
              return (
                <div className="mx-auto w-max border-2 relative">
                  <Image
                    src={items.image}
                    alt={items.name}
                    style={{
                      width: "400px",
                      height: "400px",
                    }}
                  />
                  <div className="flex items-center justify-between px-3 absolute top-4 text-white">
                    <span className="text-xl font-semibold ">{items.name}</span>
                  </div>
                </div>
              );
            })
          : [0, 1, 2, 3].map((items, i) => {
              return <div className="w-96 border-2">{/* <Skeleton /> */}</div>;
            })}
      </div>
    </div>
  );
};

export default Cities;
