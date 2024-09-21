import React from 'react';
import './RecipeCard.css';

interface RecipeProps {
  recipe: {
    title: string;
    image: string;
    cuisine: string;
    time: string;
  };
}

const RecipeCard: React.FC<RecipeProps> = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-info">
        <h3>{recipe.title}</h3>
        <p>{recipe.cuisine}</p>
        <p>{recipe.time}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
