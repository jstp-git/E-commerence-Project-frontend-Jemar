//functional component must be Capitalised
import DisplayInfo from './displayClass';
import {useState} from'react';
import image from '../NotGame/ps5.png'

//give the component access to its CSS
// import"./countStyles.css"
export function Items(){
    //variables and function go here

const [displayproduct, setDisplayproduct]= useState([
new DisplayInfo("Ps5","Play Like Never Before.The PS5 console unleashes new gaming possibilities that you never anticipated.",<img src={image}></img>, " £450"),
new DisplayInfo("Xbox","parag","im"),
new DisplayInfo("Switch","ph","im"),
new DisplayInfo("pc","par","im")

])

const[currentInfo,setcurrentInfo ]= useState(0);


function add(a,b,c){

    return
    this.price=price
    this.shipping=shipping
    this.tax=tax
    this.discount=discount
}
    //  html goes in return  
    return (
        <div>
     <div className="container">

        <header className="header">
            <h1 > NotGame     </h1>
            <h1 className="search">Search....</h1>
            <button className="headerButtons"> profile</button>
            <button className="headerButtons"> Basket</button>


        </header>
{/* these are just other options user can click on not too important right now */}
        <body>

            <div className="extras">
        <h2>Menu</h2>
        <h3>Xbox</h3>
        <h3>Switch</h3>
        <h3>PC</h3>
        <h3>Deals</h3>
        </div>

{/* this will display my items to user */}
<div className="display">
  {displayproduct.map((display, index) => (
    <div className="buttonDiv">
    <div key={index}>
      <button className="headerButtons" onClick={() => setcurrentInfo(index)}>{display.header}</button>
    </div>
    </div>
  ))}


<div className="informationDiv">

        <div className="image">

{displayproduct[currentInfo].image}
</div>
<div className="info"> {displayproduct[currentInfo].para}</div>
</div>
          {/* {displayproduct[targetInfo].para}
          {displayproduct.image} */}
                  price=  {displayproduct[currentInfo].price}
          </div>
       



        </body>

        <footer >
<div className="panelSwitcher">
            <button></button>
            <button></button>
            <button></button>

</div>
<div className="darkMode">
    <button></button>
    <button></button>
</div>

        </footer>
     </div>
        </div>
    )
};
export function Shoppinglist(){
    //variables and function go here




    //  html goes in return  
    return (
        <div>
      this is my component
        </div>
    )
}


