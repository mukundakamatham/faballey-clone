import Faballey from "./images/logo.png";
import Indya from "./images/indya.png";
import Heart from "./images/heart.svg";
import Bag from "./images/bag.svg";
import { NavLink } from "react-router-dom";
import "./navbar1.css";
import { Logout } from "../Redux/auth/action";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
function Navbar1(){
  const dispatch = useDispatch();
  const logout=()=>{
dispatch(Logout)
  }
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
             <span>  
             <div class="dropdown">
    <button class="dropbtn">Account info  |
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <p ><NavLink to ="/login">Log In</NavLink></p>
      <p ><NavLink to ="/register">Sign In</NavLink></p>
      <p  onClick={logout}><NavLink to ="/" >Log Out</NavLink></p>
    </div>
  </div> 



</span>


              <span id ="heartimage"> <img src={Heart} alt="heart"></img>  </span>
             <span> | </span>
             <NavLink to ="/bag"><span id="bagimage"  >  <img src={Bag} alt="nag"></img></span></NavLink>
             
            
            
         </div>
     
        </div>
    )
}

export {Navbar1}




