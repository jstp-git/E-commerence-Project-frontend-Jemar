//this is item conponents 

//functional component must be Capitalised
import DisplayInfo from '../NotGame/displayClass.js';
import { Basketlist as Item } from '../NotGame/displayClass.js';
import { useState } from 'react';
import image from '../NotGame/ps5.png'
import { Shoppinglist } from './shoppingList.jsx'
// import { Shoppinglist } from './shoppingList';


// //give the component access to its CSS
// import"./countStyles.css"
export function ItemList() {
  //variables and function go here
  const [displayproduct, setDisplayproduct] = useState([
    new DisplayInfo("Ps5", <>
      Play Like Never Before

The PS5 console unleashes new gaming possibilities that you never anticipated.

Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.

3D audio via built-in TV speakers or analog/USB stereo headphones. Set up and latest system software update required.

Internet connection required to pair Disc Drive and PS5 console upon setup.

Vertical stand sold separately.

Insured Delivery Information
Insured Delivery is subject to customer submitting a DPD Lost in Transit claim via GAME customer services and DPD validating such claim, Insured Delivery entitles customer to either;
a) a free of charge replacement console, and a partial refund of £50 to the original method of payment; or
b) a full refund of the price paid for the console ordered and the £19.99 delivery charge (payable to original method of payment), together with £50 compensation (payable at customer’s choice, either by BACS, Cheque or onto a GAME Gift card).
Please note that DPD's Lost in Transit claim procedure can take up to 21 days to complete.
Slim Design
With PS5, players get powerful gaming technology packed inside a sleek and compact console design.

1TB of Storage
Keep your favorite games ready and waiting for you to jump in and play with 1TB of SSD storage built in.

Ultra-High Speed SSD
Maximize your play sessions with near instant load times for installed PS5 games.

Integrated I/O
The custom integration of the PS5 console's systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible.

Ray Tracing
Immerse yourself in worlds with a new level of realism as rays of light are individually simulated, creating true-to-life shadows and reflections in supported PS5 games.

4K-TV Gaming
Play your favorite PS5 games on your stunning 4K TV.

Up to 120fps with 120Hz output
Enjoy smooth and fluid high frame rate gameplay at up to 120fps for compatible games, with support for 120Hz output on 4K displays.

HDR Technology
With an HDR TV, supported PS5 games display an unbelievably vibrant and lifelike range of colors.

Tempest 3D AudioTech
Immerse yourself in soundscapes where it feels as if the sound comes from every direction. Your surroundings truly come alive with Tempest 3D AudioTech in supported games.

Haptic Feedback
Experience haptic feedback via the DualSense wireless controller in select PS5 titles and feel the effects and impact of your in-game actions through dynamic sensory feedback.

Adaptive Triggers
Get to grips with immersive adaptive triggers, featuring dynamic resistance levels which simulate the physical impact of in-game activities in select PS5 games.

Includes ASTRO’S Playroom
Explore four worlds, each one showcasing innovative gameplay using the versatile features of the DualSense wireless controller, in this game included for all PS5 console users.

Lightning Speed
Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do.

Stunning Games
Marvel at incredible graphics and experience new PS5 features. Play a back catalog of supported PS4 games.

Breathtaking Immersion
Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.

Backwards Compatibility & Game Boost
The PS5 console can play over 4,000 PS4 games. With the Game Boost feature, you can even enjoy faster and smoother frame rates in some of the PS4 console’s greatest games.
SKU: 837822-product
Release Date: 29/11/2023
    </>,
      <img src={image}></img>, "450"),
    new DisplayInfo("Xbox", "hi", <img src></img>),
    new DisplayInfo("Switch", "ph", "im"),
    new DisplayInfo("pc", "par", "im", "500")

  ])


  const [basketList, setBasketList] = useState([
    new Item("price", "shipping", "tax", "Discount"),
    new Item(350, 5, 15, 1),
    new Item(450, 5, 20, 15),
    new Item(200, 5, 20, 15),
    new Item(0,0,0,0)



  ]);

  const [number, setNumber] = useState(0);
  const [currentInfo, setcurrentInfo] = useState(0);
  const [showBasket, setshowBasket] = useState(false);
  const [basketadder, setBasketadder] = useState(false);
  const [color, setcolor] = useState(false);
  const [remove, setRemove] = useState(4);

  // Function to decrease quantity
  function decreasequantity() {
    if (number > 0) {
      setNumber(number - 1);
    }
  }

  // Function to retrieve shipping data
  function removeData() {
    return basketList[remove].shipping;
  }

  const addquanity=() => {
    if (number <= 0) {
      setNumber(number + 1);
    }
  }


      return (
        <div>
          <div className="container">

            <header className="header">
              <h1> NotGame     </h1>
              <h1 className="search">Search....</h1>
              <button className="headerButtons"> <h1> profile </h1></button>

              {/* //nesting child element into parent element.
              now i can pass props values down to basket */}
              {/* <button  className="headerButtons" ><a href="./shoppingList.jsx">
              <h1>basket</h1>
                    </a>
                 </button>  */}
              <button className="headerButtonsBasket"
                onClick={() => setshowBasket(!basketadder)}>
                {basketadder == false &&
                  <h1> Basket</h1>}


                {basketadder == true &&
                  <p>         <Shoppinglist productPrice={basketList[currentInfo].price}
                    shipping={basketList[currentInfo].shipping}
                    tax={basketList[currentInfo].tax}
                    discount={basketList[currentInfo].discount}
                    removedata={removeData}
                    decreasecounter={decreasequantity}
                  ></Shoppinglist> </p>}






              </button>




              <h5> {number}</h5>


            </header>
            {/* these are just other options user can click on not too important right now */}
            <body>
              {/* <Shoppinglist value= {"value"}/> */}
              <div className="extras">
                <h3 className='extrasMenu'> Menu</h3>
                <h3 className='extrasXbox'>Xbox</h3>
                <h3 className='extrasSwitch'> Switch</h3>
                <h3 className='extrasPc'> PC</h3>
                <h3 className='extrasDeals'> Deals</h3>


              </div>

              {/* this will display my items to user */}
              <div className="forloop">
                {displayproduct.map((display, index) => (
                  <div className="buttonDiv">
                    <div key={index}>
                      <button className="headerButtons" onClick={() => setcurrentInfo(index)}>{display.header}</button>
                    </div>
                  </div>
                ))}

              </div>
              <div className="display">

                <div className="imagediv">

                  <div className="image">

                    {displayproduct[currentInfo].image}
                  </div>
                  {/* <div className="info">  */}
                </div>
                {/* {displayproduct[targetInfo].para}
          {displayproduct.image} */}

                <div className='flexcontainer'>
                  <div className="flex">
                    <p>{displayproduct[currentInfo].para}</p>




                  </div>

                  <div ClassName="flexx">


                    <button
                      // onClick={function addquanity() { setnumber(number + 1); }}
                      onClick={() => {
                        setBasketadder(!basketadder);
                        addquanity();
                      } }
                    >
                      {basketadder == false &&
                        <p>Add to basket </p>}





                      {basketadder == true &&
                        <p>Added to basket</p>}



                    </button>

                    <div>

                    </div>
                  </div>
                </div>
              </div>




            </body>

            <footer>
              <div className="panelSwitcher">

                <button></button>
                <button></button>
                <button></button>

              </div>
              <div className="darkMode">
                <button>light</button>
                <button
                  onClick={() => setcolor(!color)}
                  style={{ header: color ? 'blue' : 'initial' }}
                >
                  {color ? 'light' : 'dark'}
                </button>

              </div>

            </footer>
          </div>


        </div>
      );
    }


 



