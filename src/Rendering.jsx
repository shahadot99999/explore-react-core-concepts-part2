import { useState } from "react";

const recipeData = [
    {
      id: 1,
      name: 'Vegetable Pasta',
      ingredients: ['pasta', 'tomatoes', 'zucchini', 'garlic'],
      prepTime: '20 mins',
      isVegetarian: true
    },
    {
      id: 2,
      name: 'Beef Tacos',
      ingredients: ['tortillas', 'ground beef', 'lettuce', 'cheese'],
      prepTime: '30 mins',
      isVegetarian: false
    },
    {
      id: 3,
      name: 'Fruit Salad',
      ingredients: ['apples', 'bananas', 'berries', 'honey'],
      prepTime: '10 mins',
      isVegetarian: true
    }
  ];

const Rendering = () => {

    const [showOnlyVegetarian, setShowOnlyVegetarian] = useState(false);

    const filteredRecipes = showOnlyVegetarian
      ? recipeData.filter(recipe => recipe.isVegetarian)
      : recipeData;

      
    return (
    //     <div  className="recipe" style={{ marginBottom: '10px' }}>
    //   {recipes.map(recipe => (
    //     <div key={recipe.id} className="recipe">
    //       <h2>{recipe.name}</h2>
    //       <ul>
    //         {recipe.ingredients.map((ingredient, index) => (
    //           <li key={index}>{ingredient}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   ))}
    // </div>


    <div className="recipe-app">
    <div className="controls">
      <label>
        <input
          type="checkbox"
          checked={showOnlyVegetarian}
          onChange={() => setShowOnlyVegetarian(!showOnlyVegetarian)}
        />
        Show only vegetarian
      </label>
    </div>

    <div className="recipes-container">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h2>
              {recipe.name}
              <span className="prep-time">{recipe.prepTime}</span>
              {recipe.isVegetarian && <span className="veg-tag">🌱 Veg</span>}
            </h2>
            
            <h3>Ingredients:</h3>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={`${recipe.id}-${index}`}>
                  <span className="ingredient-bullet">•</span> {ingredient}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p className="no-recipes">No recipes found. Try adjusting your filters.</p>
      )}
    </div>
  </div>
    );
};

export default Rendering;