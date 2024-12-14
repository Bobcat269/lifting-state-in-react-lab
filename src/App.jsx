// src/App.jsx

import './App.css';
import { useState } from 'react';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];



const App = () => {
  const [burgerIngredients, setBurgerIngredients] = useState([]);

const addToBurger = (ingredient) => {
  setBurgerIngredients([...burgerIngredients, ingredient])
//  burgerIngredients.push(ingredient)
 console.log(burgerIngredients);
}

const removeIngredient = (ingredient) => {
  setBurgerIngredients(burgerIngredients.filter(item => item !==ingredient))
  
}

// intentionally used add2Burger and addToBurger below so 
// I could visualize what was being passed to where
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList  add2Burger={addToBurger}/> // add here! 
        <BurgerStack burgerIngredients={burgerIngredients} removeFromBurger={removeIngredient}/> 
      </section>
    </main>
  );
};

export default App;
