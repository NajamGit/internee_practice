import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const [recipe, setRecipe] = useState(null); // Initialize as null for a single recipe
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/recipes/${productId}`
        );
        const data = await response.json();

        // Check if a recipe is available in the response
        if (data) {
          setRecipe(data); // Set the single recipe
        } else {
          console.error("No recipe found:", data);
          setRecipe(null); // Set to null if no recipe
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchRecipeData();
  }, [productId]); // Fetch data when productId changes

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>; // Show a loading state
  }

  if (!recipe) {
    return <div className="text-center text-xl">Recipe not found</div>; // Handle missing recipe
  }

  return (
    <div className="container mx-auto py-10 px-5">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
        {/* Left Section: Recipe details */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full lg:w-1/3">
          {/* Recipe title */}
          <h1 className="text-2xl font-bold mb-4">{recipe.name}</h1>

          {/* Recipe description */}
          <p className="text-gray-700 mb-6">{recipe.instructions}</p>

          {/* Ingredients */}
          <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {recipe.ingredients && recipe.ingredients.length > 0 ? (
              recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center">
                  <span className="bg-green-500 mr-2 w-7 h-7 text-center rounded-full text-white">
                    &#10003;
                  </span>
                  {ingredient}
                </li>
              ))
            ) : (
              <li>No ingredients listed</li>
            )}
          </ul>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="rounded-full shadow-lg max-w-xs lg:max-w-md"
            src={recipe.image} // Use placeholder if no image
            alt={recipe.title || "Recipe Image"}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
