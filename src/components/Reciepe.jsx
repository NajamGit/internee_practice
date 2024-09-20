import React from "react";
import { Link } from "react-router-dom";

const Reciepe = ({
  id,
  image,
  name,
  mealType,
  cookTimeMinutes,
  cuisine,
  reviewCount,
}) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover hover:scale-110 transition ease-in-out"
          />
          <span className="absolute top-36 left-36 bg-black bg-opacity-50 text-white text-lg font-semibold px-3 py-1 rounded">
            {cuisine}
          </span>
        </div>
        <div className="p-5">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <span className="bg-lime-500 text-white px-3 py-1 rounded text-sm">
            Reviews: {reviewCount}
          </span>
          <div className="mt-4 text-gray-600">
            <p className="flex items-center">
              <span className="mr-2">⏱️</span> {cookTimeMinutes} minutes
            </p>
            <p className="text-right mt-1">Meal Type: {mealType + " "}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Reciepe;
