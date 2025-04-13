import Recipe from "./Recipe";


const RecipeList = () => {

    const recipes = [
        {
          id: 1,
          name: 'Pancakes',
          ingredients: ['flour', 'eggs', 'milk', 'butter']
        },
        {
          id: 2,
          name: 'Omelette',
          ingredients: ['eggs', 'cheese', 'mushrooms']
        }
      ];

    return (
          <div>
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.id} // Key goes HERE on the extracted component
          id={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
    );
};

export default RecipeList;