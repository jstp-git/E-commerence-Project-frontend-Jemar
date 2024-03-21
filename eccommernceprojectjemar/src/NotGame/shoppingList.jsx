import { useState } from "react"
import {Basketlist} from '../NotGame/displayClass'



    function Shoppinglist(props) {
      const [basketList, setBasketList] = useState([
        new Basketlist("price", "shipping", "tax", "discount"),
        new Basketlist(450, 5, 20, 15 )
      ]);
    // need props to equal last string in main conponet

    const sumtotal1= (a,b,c,d) => {
        return Number(a)+Number(b)+Number(c)*Number(d);
        }
       const result= sumtotal1(props.productPrice,props.shipping,props.tax,props.discount)
const [showData, setShowData]= useState(true);
const [buttonText, setButtonText] = useState('Remove'); // Initial button text is 'Remove'


const toggleShowData = () => {
  setShowData(!showData); // Toggle showData
  setButtonText(showData ? 'Undo' : 'Remove'); // Change button text based on the toggled state
};

const ShowText = () => {
  if (showData) {
    return (
      <>
        <li>Product price: £{props.productPrice}</li>
        <li>tax: £{props.tax}</li>
        <li>dpd shipping: £{props.shipping}</li>
        <li>discount: ${props.discount}</li>
        <li>Grand Total: £{props.productPrice + props.tax + props.shipping - props.discount}</li>
      </>
    );
  } else {
    return (
      <>
        <li>Product price: £0</li>
        <li>tax: £0</li>
        <li>dpd shipping: £0</li>
        <li>discount: $0</li>
        <li>Grand Total: £0</li>
      </>
    );
  }
};

return (
  <div className="basketdiv">
    <p>Basket</p>
    <ul>{ShowText()}</ul>
    <button onClick={ () => {toggleShowData();props.decreasecounter();}} >{buttonText}</button>
  </div>
);}



export {Shoppinglist}

//1
// important, i will need to create a page
//  that display all the fees including
//   the price of the item. also i need 
//   to pass these values down to this 
//   conponent using props.
//2
{/* //need a calulator of some sort */}


//3
  {/* this.price=price
this.shipping=shipping
this.tax=tax
this.discount=discount
    */}
//4
    // you will use above to put in the
    //  fixed costs like shipping and use
    //   a forloop to acess data for each 
    //   like how you done in main conponent 


    //now break it down step by step
   // get everything to show first then start building up

   // use function on onclick to show new page. then another to return all of the total price 

   //may have to link onclick for display to this somehow 



















