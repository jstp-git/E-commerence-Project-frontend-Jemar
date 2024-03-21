import React, { useState } from 'react';
import './App.css';
import { ItemList } from '../src/NotGame/NotGame.jsx';
import DisplayInfo from './NotGame/displayClass.js';
import {Basketlist as Item} from './NotGame/displayClass.js';
import image from './NotGame/ps5.png';
// import api and make async function 




function App() {
  // Define state for displayproduct

  console.log()
  const [displayproduct, setDisplayproduct] = useState([
    new DisplayInfo("Ps5", "Play Like Never Before.The PS5 console unleashes new gaming possibilities that you never anticipated.", <img src={image} alt="PS5"></img>, ""),
    new DisplayInfo("Xbox", "parag", <img src></img>),
    new DisplayInfo("Switch", "ph", "im"),
    new DisplayInfo("pc", "par", "im")
  ]);
  
    const [basketList, setBasketList] = useState([
      new Item("price", "shipping", "tax", "discount"),
      new Item(450, 5, 20, 15 ),
      new Item( 350, 20, 5, 15 ),
      new Item(400 , 20, 30 , 2)
    ]);

    const ps5= new Item ("price", "shipping", "tax", "discount")
const xbox= new Item (450, 5, 20, 15 )
const switchh = new Item( 350, 20, 5, 15 )
 const pc = new Item(400 , 20, 30 , 2)

 const [currentInfo, setcurrentInfo] = useState(0);

const [basketadder,setBasketadder]= useState(false)
 
  return (
    <div className="App">
  
    {/* //render parent conponent  */}

    <ItemList basketadder={basketadder}
   
    />




    </div>
  );
}

export default App
// make an array and use .map to show information within basket(shppoingList)


