// import React from "react";
// `src/components/BurgerStack.jsx`
const BurgerStack = ({burgerIngredients, removeFromBurger}) => {
  const returnIngredient = (ingredient) => {
    removeFromBurger(ingredient);
  }
    return (
    <ul>

      {burgerIngredients.map((ingredient, index) => (
        <li key={index} style={{backgroundColor: `${ingredient.color}`}}>
          <div>{ingredient.name}</div>
          <div>
            <button onClick={() => returnIngredient(ingredient)}>-</button>
          </div>
        </li>
        ))}
      </ul>
    );
  };
  
  export default BurgerStack;
  