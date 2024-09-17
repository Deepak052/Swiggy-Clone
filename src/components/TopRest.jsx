import React, { useEffect, useState, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Card from "./Card";

const TopRest = () => {
  const [data, setData] = useState([]);
  const scrollRef = useRef(null); // Reference for the scrollable container

  const fetchTopRestaurant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  // Scroll to the left by a fixed amount
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Amount to scroll left
        behavior: "smooth",
      });
    }
  };

  // Scroll to the right by a fixed amount
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Amount to scroll right
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Top restaurant chains in Angul
        </div>
        <div
          className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
          onClick={scrollLeft}
        >
          <FaArrowLeft />
        </div>
        <div
          className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
          onClick={scrollRight}
        >
          <FaArrowRight />
        </div>
      </div>
      <div />
      <div
        className="flex gap-5 overflow-x-auto scroll-smooth hide-scrollbar"
        ref={scrollRef}
      >
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
      <hr className="my-4 border-[1px]" />
    </div>
  );
};

export default TopRest;
