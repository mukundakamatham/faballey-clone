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
  const { isAuth, isLoading, token, isError } = useSelector(
    (state) => state.auth,
    shallowEqual
  );



 
  
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
         <span>  
             <div class="dropdown">
    <button class="dropbtn">{isAuth?"welcome":"Login"}
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      {isAuth?
    <a   onClick={logout}><NavLink to ="/" >Log Out</NavLink></a>:null}
    <a  ><NavLink to ="/login">Log In</NavLink></a>
      <a ><NavLink to ="/register">Sign In</NavLink></a>
     
    </div>
  </div> 


  {/* <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Account info</button>
  <div id="myDropdown" class="dropdown-content">
  <a ><NavLink to ="/login">Log In</NavLink></a>
      <a ><NavLink to ="/register">Sign In</NavLink></a>
      <a  onClick={logout}><NavLink to ="/" >Log Out</NavLink></a>
  </div>
</div> */}
  </span>
             <span> Track Order | </span>
             <span>Gift Card | </span>
     





              <span id ="heartimage"> <img src={Heart} alt="heart"></img>  </span>
             <span> | </span>
             <NavLink to ="/bag"><span id="bagimage"  >  <img src={Bag} alt="nag"></img></span></NavLink>
             
            
            
         </div>
     
        </div>
    )
}

export {Navbar1}




