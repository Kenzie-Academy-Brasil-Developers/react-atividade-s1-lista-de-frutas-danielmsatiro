import { useState } from 'react';
import './App.css';
import FruitList from './components/FruitList'

function App() {
const [fruits, setFruits] =  useState([
  { name: "banana", color: "yellow", price: 2 },
  { name: "cherry", color: "red", price: 3 },
  { name: "strawberry", color: "red", price: 4 },
])

const totalPrice = fruits.reduce((acc,fruit)=>acc+fruit.price,0)

function filterRedFruits(){
  return setFruits(fruits.filter(fruit=>fruit.color==="red"))
}

  return (
    <div className="App">
      <span>Preço total = {totalPrice}</span>
      <ul>
        <FruitList fruits={fruits}/>
        {/* {fruits.map((fruit,index)=><li key={index}>{fruit.name}</li>)} */}
      </ul>
      <button onClick={() => filterRedFruits()}>Mostrar frutas vermelhas</button>
    </div>
  );
}

export default App;
