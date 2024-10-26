import React from "react";
import { FaRegHeart, FaMobileAlt, FaCamera, FaHeadphones, FaLaptop, FaGamepad } from "react-icons/fa";

type Category = {
  name: string;
  icon: JSX.Element;
};

const categories: Category[] = [
    { name: "Phones", icon: <FaMobileAlt className="text-2xl" /> },
    { name: "Smart Watches", icon: <FaRegHeart className="text-2xl" /> },
    { name: "Cameras", icon: <FaCamera className="text-2xl" /> },
    { name: "Headphones", icon: <FaHeadphones className="text-2xl" /> },
    { name: "Computers", icon: <FaLaptop className="text-2xl" /> },
    { name: "Gaming", icon: <FaGamepad className="text-2xl" /> },
  ];

const HeroThree: React.FC = () => {
  return (
    <div className="p-4 py-24  bg-[#FAFAFA]">
      <h2 className="text-3xl pb-10 font-bold mb-4 text-center ">Browse By Category</h2>
      <div className=" gap-4 flex flex-wrap justify-center items-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col cursor-pointer items-center p-4 w-[140px] sm:w-[180px] md:w-[200px] lg:w-[340px] xl:[400px] bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            {category.icon}
            <span className="mt-2 text-center text-sm font-medium">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroThree;
