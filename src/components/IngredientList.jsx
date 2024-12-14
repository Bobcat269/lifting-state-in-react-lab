// src/components/IngredientList.jsx
import { availableIngredients } from "../App";

const IngredientList = ({add2Burger}) => {
 const returnIngredient = (ingredient) => {
    add2Burger(ingredient);
 };
    
    return (

        <ul>
        {availableIngredients.map((ingredient, index) => (
            <li key={index} style={{backgroundColor: `${ingredient.color}`}}>
                <div>{ingredient.name}</div>
                <div>
                    <button onClick={() => returnIngredient(ingredient)}> + </button>
                    </div>
                    </li>
            ))}
    </ul>
    );
  };
  
  export default IngredientList;
  