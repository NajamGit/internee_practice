import React, { useState, useEffect } from "react";
import Reciepe from "./Reciepe";

const ContentArea = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes); // Update the state with the fetched recipes
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error); // Handle any errors
      });
  }, []);
  return (
    <div className="container mx-auto py-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((item) => (
          <Reciepe
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            cuisine={item.cuisine}
            reviewCount={item.reviewCount}
            cookTimeMinutes={item.cookTimeMinutes}
            mealType={item.mealType}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentArea;
