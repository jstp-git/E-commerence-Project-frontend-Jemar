
import './App.css';
import {Items, Shoppinglist} from '../src/NotGame/NotGame.jsx';
import { useState } from 'react';
import DisplayInfo from './NotGame/displayClass.js';
import image from './NotGame/ps5.png'

  
 
function App() {

  const [displayproduct, setDisplayproduct]= useState([
    new DisplayInfo("Ps5","Play Like Never Before.The PS5 console unleashes new gaming possibilities that you never anticipated.",<img src={image}></img>, " £450"),
    new DisplayInfo("Xbox","parag","im"),
    new DisplayInfo("Switch","ph","im"),
    new DisplayInfo("pc","par","im")
   ])
  return (
    <div className="App">
      {/* two components below */}
<Items/>
<Shoppinglist/>
    </div>
  );
}

export default App;
