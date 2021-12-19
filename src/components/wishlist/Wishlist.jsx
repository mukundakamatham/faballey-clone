import React from "react";
import "./Wishlist.css";
import {Logout} from "../../Redux/auth/action"
import { Redirect } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
function Wishlist() {
    const dispatch = useDispatch()
    function logoutuser() {
        dispatch(Logout)
    }
    const bag = useSelector((state) => state.bag.BAGs);
    const { isAuth, isLoading, token, isError } = useSelector(
        (state) => state.auth,
        shallowEqual
      );

function ADDTOCART(){

}

      if(!isAuth){
        return <Redirect to="/login" />;
    }else{
  return (
    <div>
      <div id="wishlist-container">
        <div className="wish-content">
          <div className="wishlist-main">
            {/* -------------------left section----------------------- */}
            {/* ---------upper-part---------- */}
            <div className="wishlist-left">
              <div className="user-details">
                <span>S</span>
                <p>Shailaja24305@gmail.com</p>
              </div>
              {/* ------upper part ends------------ */}

              {/* -----------bottom-list------------ */}
              <div className="user-info">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fas fa-user-circle"></i>
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fas fa-shopping-bag"></i>
                      My Orders
                    </a>
                  </li>
                  <li>
                    <a href="#" className="userActive">
                      <i className="far fa-heart"></i>
                      My Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-wallet"></i>My Credits
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fas fa-gift"></i>My Vouchers
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="far fa-address-book"></i>My Addresses
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fas fa-headset"></i>Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={logoutuser}>
                      <i class="fas fa-sign-out-alt" ></i>Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* -----------------------------right-container---------------------------------- */}
            <div class="right-container">
              <div class="right-heading">
                <h3>My Wishlist</h3>
              </div>
              <div class="wish-mainbox">
                <span>Products</span>
                <div class="wish-box">
                  <span>Price</span> <span>Size</span> <span>Bag</span>
                </div>
              </div>
         { (bag.length>0)?(bag.map((e)=>{
 <div class="wish-product-list">
 <div class="wish-product-name">
   <figure>
     <a href="/dusty-pink-embellished-neck-blouson-dress-83/prdt">
       {" "}
       <img
         src="https://img.faballey.com/images/Product/DRS04577Z/1.jpg"
         alt=""
       />
     </a>
     <p>Dusty Pink Embellished Neck Blouson Dress</p>
   </figure>
 </div>
 <div class="wish-product-right">
   <span>
     <div class="wish-price">
       <i class="fas fa-rupee-sign"></i> 1100
     </div>
   </span>

   <span>
     <div class="wish-size">
       <select class="size">
         <option>Select Size</option>
         <option> S </option>
         <option> M </option>
         <option> L </option>
         <option> XS </option>
         <option> XL </option>
       </select>
       <p class="error">Select Size</p>
     </div>
   </span>

   <span>
     <div class="wish-btn addtobag">
       <p class="addToCart" onClick={ADDTOCART}>ADD TO BAG</p>
       <i class="fas fa-times"></i>
     </div>
   </span>
 </div>
 </div>
         } )): <div>empty wishlist  continue shoping<a href="products">products</a></div>}
             

              {/* -------------bottom btn------------------ */}

              <div class="wish-addall">
                <a href="#" class="addToAllCart">
                  Add all to Bag
                </a>
              </div>
              {/* ------------------------------------- */}
              {/* ---------------back to home-------------- */}

              <div class="wish-to-home"><a href="#">❮ BACK TO HOME</a></div>
              {/* ------------------------------------------ */}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default Wishlist;