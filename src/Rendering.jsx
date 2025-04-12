
const recipes = [
    {
      id: 1,
      name: 'Pancakes',
      ingredients: ['flour', 'eggs', 'milk', 'butter']
    },
    {
      id: 2,
      name: 'Omelette',
      ingredients: ['eggs', 'cheese', 'mushrooms', 'salt']
    },
    {
      id: 3,
      name: 'Salad',
      ingredients: ['lettuce', 'tomatoes', 'cucumber', 'olive oil']
    }
  ];

const Rendering = () => {
    return (
        <div  className="recipe" style={{ marginBottom: '10px' }}>
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe">
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    );
};

export default Rendering;