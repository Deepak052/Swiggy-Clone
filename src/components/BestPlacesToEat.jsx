import React, { useEffect, useState } from "react";

const BestCuisinesNearMe = () => {
  const [data, setData] = useState([]);

  const fetchCuisines = async () => {
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
    fetchCuisines();
  }, []);

  // Extract unique places from the data
  const uniquePlaces = [...new Set(data.map((item) => item.place))];

  return (
    <div className="max-w-[1200px] mx-auto my-6">
      <h2 className="text-[25px] font-bold mb-4">Best Cuisines Near Me</h2>
      <div className="flex flex-wrap gap-3">
        {uniquePlaces.map((place, index) => (
          <div
            key={index}
            className="px-4 py-2 bg-[#e2e2e7] text-black rounded-full text-sm"
          >
            Best places in {place}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestCuisinesNearMe;
