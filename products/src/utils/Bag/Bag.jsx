import {BothNavbar} from "../Navbars/Bothnavbar";
import "./bag.css"

function Bag(){
    return(
        <>
        <BothNavbar></BothNavbar>
        <div id="free-ship-above1500"> <span  > Score free shipping on orders above INR 1500 </span> </div>
        <div id="bag-big-div">
          
        <div id="images-plus-details">   
          <h1 id="My-shopping-bag">My Shopping Bag () </h1>


          <div id="particular-product-bag">
          <img src="https://img.faballey.com/images/Product/DRS04473Z/1.jpg"></img>
          <div id="tough-work">
              <div id="for-first-line">
              <span id="name-for-cart">Blush Pink Pleated Full Sleeve Dress</span>
              <span id="for-money">1800 900</span>
              </div>

              <div id="for-second-line">
              <span>size : S</span>
             <span>Qty : 1</span>
             <span>Color : Pink</span>
             </div>
             
             <div id="for-third-line">
                 <div id="wishlist-ji"><span>Edit Item</span>
              <span>Move to WishList</span> </div>
              <div id="for-delete">
                  delete
              </div>
              
              </div>
            
           
           
          
          
          </div>
         
          </div>
        </div>
        
        <div id="price-details-div">

         <h1 id="My-shopping-bag">Price Details</h1>

         <div id="whole-price">
             <div id="donation-check"> <h3>Donation</h3> <input type="checkbox"></input></div>
             <p>Extra  10 (This donation is towards NGO Ssrishti that is providing food and hygiene essentials to migrant labors during the COVID-19 lockdown)</p>
             <hr></hr>
             <div id="applyc0upon">Apply Coupon</div>
             <hr></hr>
             <div id="applyc0upon">Reedeem Gift Card</div>
             <hr></hr>
             <div id="subtotal"><span>Sub Total</span>  <span>970</span> </div>
             <hr></hr>
             <div id="subtotal"> <span>Total</span> <span>970</span></div>
             <hr></hr>
             <div><button id="button-place-order">Place Order</button></div>
         </div>
        </div>
        </div>
        </>
    )
}
export {Bag}