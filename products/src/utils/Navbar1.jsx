import Faballey from "../images/logo.png";
import Indya from "../images/indya.png";
import Heart from "../images/heart.svg";
import Bag from "../images/bag.svg";

import "./navbar1.css";


function Navbar1(){
    return(
        <div id="nav1-container">
          
          <div > 
            <span id="sale">Sale | Upto 65% Off. </span>  <span id="sale1">Shop Now<b>{">"}</b></span>
          </div>


          <div id="image-div">
            <img src={Faballey} alt="Faballey Logo" />
             <img src={Indya} alt="Indya Logo" /> 
          </div>

         <div id="track-n-bag-div">
             <span> Track Order | </span>
             <span>Gift Card | </span>
             <span> User Name  | </span>
             
             <span id ="heartimage"> <img  src={Heart}></img>  </span>
             <span> | </span>
             <span id="bagimage"> <img src={Bag}></img></span>
             
            
            
         </div>
     
        </div>
    )
}

export {Navbar1}