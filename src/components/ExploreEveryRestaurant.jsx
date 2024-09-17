import React, { useEffect, useState } from "react";

const ExploreEveryRestaurant = () => {
  const [data, setData] = useState([]);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/top-restaurant-chains"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto my-6 px-4">
      <h2 className="text-[25px] font-bold mb-4 text-center">
        Explore Every Restaurant Near Me
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* First div: "Explore Restaurants Near Me" */}
        <div className="flex-1 px-4 py-3 bg-[#e2e2e7] text-black rounded-lg text-center text-[18px] md:text-[20px]">
          Explore Restaurants Near Me
        </div>

        {/* Second div: "Explore Top Rated Restaurants Near Me" */}
        <div className="flex-1 px-4 py-3 bg-[#e2e2e7] text-black rounded-lg text-center text-[18px] md:text-[20px]">
          Explore Top Rated Restaurants Near Me
        </div>
      </div>
    </div>
  );
};

export default ExploreEveryRestaurant;
