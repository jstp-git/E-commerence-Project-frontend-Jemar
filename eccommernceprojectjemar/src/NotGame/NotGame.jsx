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
    new DisplayInfo("Xbox",
    <>
     "Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming.*
     Includes 24 months of Xbox Game Pass Ultimate, with over 100 high-quality games on console, PC, phones, and tablets, new games on day one like Halo Infinite and Forza Horizon 5, online multiplayer to play with friends, and an EA Play membership.
     Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS – all powered by Xbox Velocity Architecture.*
     Enjoy thousands of games from four generations of Xbox, with hundreds of optimized titles that look and play better than ever.
     Minimize load times and increase frame rates with a custom-built NVMe SSD, which enables larger, more robust games to operate at their full capacity. Bring your games and movies to life with the rich, dynamic sound environments at a high quality.
     
     Important Information:
     Xbox Game Pass: Game catalogue varies over time and by region (xbox.com/gamepass).
     Smart Delivery: Supported games only.
     
     Disclaimer: Missing payments can have serious consequences for you. Your credit rating may be affected which will make it more difficult or more expensive for you to obtain credit in the future.
     Game Retail Limited acts as a credit intermediary and not a lender. Game Retail Limited offers credit products provided by Klarna Bank AB (publ) and PayPal (Europe) S.à rl et Cie. Terms and conditions apply. Subject to status. Only available to UK residents 18 or over.
     Klarna Bank AB (publ) is authorised by the Swedish Financial Supervisory Authority (Finansinspektionen) and subject to limited regulation by the Financial Conduct Authority and Prudential Regulation Authority. Details about the extent of this regulation by the Financial Conduct Authority and Prudential Regulation Authority are available from Klarna Bank AB (publ) on request.
     ^ Finance is only available to permanent UK residents aged 18+, subject to status, terms and conditions apply. Klarna Bank AB (publ) registered office: Sveavägen 46, 111 34 Stockholm, Sweden. Corporation ID number: 556737-0431. If you make your payments by the due date each month, the monthly payment should allow you to pay off the purchase within 24 months with no extra cost (0% APR).
     * At GAME; prices vary by console. Xbox Game Pass Ultimate: 24-month subscription; game catalogue varies over time, by region, by device. Internet access required (ISP fees apply). Membership conversion: your existing Xbox Live Gold and Xbox Game Pass, and EA Play (console) membership(s) will automatically convert to Ultimate at a conversion ratio, learn more http://xbox.com/gamepass, https://www.ea.com/ea-play/terms. Game streaming: requires compatible controller (sold separately). Halo Infinite expected 2021. EA Play: expected Holiday 2020. Digital Direct: Your digital content will be delivered directly to your console during set-up; no codes required. All included digital content will be attached to the first Microsoft Account that redeems it. For more information, visit xbox.com/digitaldirect. Warranty: console is under a 1 year limited hardware warranty (90 days for controller/accessories) regardless of length of financing. (Microsoft Limited Hardware Warranty: https://support.microsoft.com/warranty). See product terms at Xbox.com/XboxAllAccessTerms.
     Upgrade: You are eligible to apply for upgrade to the next Xbox console coming at the end of 2020 (excludes Xbox One X, S, and S All Digital Edition) after you have made the equivalent of 18 full payments (and any upgrade may be subject to eligibility requirements). Microsoft or Klarna may contact you about your upgrade options. Requires return of console in good condition or payment of the console balance. The next Xbox console available under the upgrade option may vary due to applicable laws. See product and upgrade terms at Xbox.com/XboxAllAccessTerms.
     New application with Klarna, including credit assessment, contract, terms and pricing apply. See Klarna Credit Agreement for terms and conditions.
     SKU: 151657-kit"
     </>,
     <img src="https://i1.wp.com/wildbreaktech.com/wp-content/uploads/2020/11/xboxgamcon01.png?resize=1024%2C1024&ssl=1"></img>),
    new DisplayInfo("Switch", 
    <>
    Nintendo Switch - Neon
Play the Nintendo Switch on your TV by slotting the tablet into the docking station and watch your games come to life on the big screen. Invite your friends over for a fun multiplayer battle, or go solo in single player mode – it’s all possible with the Neon Red/Neon Blue Nintendo Switch. The powerful 6.2-inch screen enhances your gaming experience no matter where you are. The bright HD graphics can help bring any game to life when playing as a handheld device. Whether you’re on the bus, in the park or in your living room, the Neon Red/Neon Blue Nintendo Switch is perfect for all. The detachable Joy-Con controllers are a matte Neon Red and Neon Blue so you can game in style.
    </>,
     <img src="https://www.bigw.com.au/medias/sys_master/images/images/h82/h02/14106587955230.jpg"></img>),
    new DisplayInfo("pc", 
    <>
    The Cyberpower Blaze Gaming PC is perfect for the players.
AMD RYZEN 5 4500 PROCESSOR
The AMD Ryzen 5 4500 has 6 Cores and 12 threads, which is ideal for gamers, content creators and streamers who love to multi-task. When you have the world's most advanced processor architecture for gamers and content creators, the possibilities are endless. Whether you are playing the latest games, designing the next skyscraper, or crunching data, this powerful processor can handle it all - and more.

NVIDIA GEFORCE RTX 3060 GRAPHICS
An NVIDIA GeForce RTX 3060 graphics card allows you to play games smoothly and with capable frame rates. With the latest NVIDIA® GeForce GTX graphics behind you, you can enjoy the depth and visual fidelity of real-time ray-tracing.

NORTON 360 FOR GAMERS VPN 
Get 1 year Norton 360 for Gamers VPN for FREE with your Cyberpower PC. This provides multiple layers of protection for your devices, game accounts, and digital assets. Browse more securely and anonymously by masking your IP address with a no-log VPN to help protect against DDoS attacks and doxxing.

WINDOWS 11 HOME
Windows 11 provides a calm and creative space where you can pursue your passions through a fresh experience. From a rejuvenated Start menu, to new ways to connect to your favourite people, news, games, and content.

WHY CYBERPOWER?
Every Cyberpower system comes with lifetime technical support and a 5-year warranty (2-years parts, 5-year labour, and 6-months collect-and-return). Customer support team: 0333 323 7776.

*Please note: images are for illustration purposes only and some components in the final systems may differ from those visible.
Bluetooth: N
Depth: 360 MM
Dongle Required: N
AMD Ryzen 5 4500
16GB DDR4 RAM
NVIDIA GeForce RTX 3060
1TB M.2 NVMe SSD
CyberpowerPC Blaze Gaming Case
Wi-Fi 4 (802.11n)
1 year Free Norton VPN and 1 month Free XBox Game Pass
2 Years Parts, 5 Years Labour, Lifetime Technical Support
CyberpowerPC Technical Support 0333 323 7776
20+ Years Experience and Manufacture in the UK
Graphics: NVIDIA GeForce RTX 3060
Storage: 1 Tb
Height: 450 MM
Processor: AMD Ryzen 5 4500
RAM Memory: 16 GB
Width: 205 MM
    </>
    , <img src="https://th.bing.com/th/id/R.ed17965dc743321a25eafa0475d819ef?rik=fV%2fSwszw0AJ5kQ&riu=http%3a%2f%2fwww.gamespace.com%2fwp-content%2fuploads%2f2017%2f07%2f1.jpg&ehk=lkXKmT3TPcmFu9EwaDLLlj0dUj6kdMDBCxzEJKi7gLI%3d&risl=&pid=ImgRaw&r=0"></img>, "500")

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


 



