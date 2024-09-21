import React, { useEffect, useState } from 'react';
import './RecipeGrid.css';
import Details from '../../pages/Details';
import { useNavigate } from 'react-router-dom';



interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
  reviewCount: number;
  mealType: string;
  rating: number;
  prepTimeMinutes: number;

}



const RecipeGrid: React.FC = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(`/details`); 
  };

  const [recipes, setRecipes] = useState<Recipe[]>([]); // State to hold fetched recipes
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    // Fetch the recipes from the API
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        setRecipes(data.recipes);
        setLoading(false);
      } catch (error) {
        setError('Failed to load recipes');
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);
  return (
<>
    <div className="grid-container" >
      <div className='recipe-grid'>
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe.id} onClick={handleClick}>
        <><div className="image-container">
          <img src={recipe.image} alt={recipe.name} />
          <div className="cuisine-overlay">
            <span>{recipe.name}</span>
          </div>
        </div><div className="recipe-info">
            <div className='base'>
              <h3>{recipe.name}</h3>
              <span className="review-badge">Reviews: {recipe.reviewCount}</span>
            </div>

            <div className="details">
              <p><i className='fa fa-clock-o' style= {{color :"black"}}></i> {recipe.prepTimeMinutes} Minutes</p>
              <p>{recipe.mealType}</p>
            </div>
            <div className="reviews">
              <span className="stars">{'★'.repeat(recipe.rating)}{'☆'.repeat(5 - recipe.rating)}</span>
            </div>
          </div></>
          </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default RecipeGrid;
