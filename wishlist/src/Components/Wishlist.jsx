import React from "react";
import "./wishlist.css";

function Wishlist() {
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
                      <i className="fas fa-user-circle"></i>
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-shopping-bag"></i>
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
                      <i className="fas fa-gift"></i>My Vouchers
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-address-book"></i>My Addresses
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-headset"></i>Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-sign-out-alt"></i>Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* -----------------------------right-container---------------------------------- */}
            <div className="right-container">
              <div className="right-heading">
                <h3>My Wishlist</h3>
              </div>
              <div className="wish-mainbox">
                <span>Products</span>
                <div className="wish-box">
                  <span>Price</span> <span>Size</span> <span>Bag</span>
                </div>
              </div>
              <div className="wish-product-list">
                <div className="wish-product-name">
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
                <div classNameName="wish-product-right">
                  <span>
                    <div className="wish-price">
                      <i className="fas fa-rupee-sign"></i> 1100
                    </div>
                  </span>

                  <span>
                    <div className="wish-size">
                      <select className="size">
                        <option>Select Size</option>
                        <option> S </option>
                        <option> M </option>
                        <option> L </option>
                        <option> XS </option>
                        <option> XL </option>
                      </select>
                      <p className="error">Select Size</p>
                    </div>
                  </span>

                  <span>
                    <div className="wish-btn addtobag">
                      <a className="addToCart">ADD TO BAG</a>
                      <i className="fas fa-times"></i>
                    </div>
                  </span>
                </div>
              </div>

              {/* -------------bottom btn------------------ */}

              <div className="wish-addall">
                <a href="#" class="addToAllCart">
                  Add all to Bag
                </a>
              </div>
              {/* ------------------------------------- */}
              {/* ---------------back to home-------------- */}

              <div className="wish-to-home"><a href="#">❮ BACK TO HOME</a></div>
              {/* ------------------------------------------ */}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
