import "./navbar2.css"
import Faballeynav2 from "../images/faballey2ndnavbar.png";
import Search from "../images/Search.svg";
import Newin from "../images/newindrpdnnv1.png";
import Party from "../images/party.png"
import Clothing from "../images/clothing.jpg";
import Tops from "../images/tops.png";
import Dresses from "../images/dresses.png";
import Clearance from "../images/clearancesale.webp";
import Sale699 from "../images/699sale.webp";
import Sale799 from "../images/799sale.webp";
import Sale999 from "../images/999sale.webp";
import Lookbooks from "../images/lookbooks.webp";
import { NavLink } from "react-router-dom";


function Navbar2(){
    return(
        <div id="nav2-container">
             
         <div id="faballeylogo">
             <img src={Faballeynav2}></img>
         </div>
       
        <div id="forallcontent">

         <span id="content-div1">
           <span id="dropdown">NEW IN</span>
          <div className="new-in-dropdown">

              <div id="forflex">
                  <div id="fortext">
              <NavLink to ="/products">Clothing</NavLink>
              <a href="#">Curve</a>
              <a href="#">Best Selling</a>
              <a href="#">Accessories</a>
              </div>
              <div id="image-inside-dropdown">
                  <img src={Newin}></img>
              </div>
              </div>
          </div>
          </span>
         


          <span id="content-div2">
           <span id="dropdown" style={{color:"#fc6486"}}>PARTY'21</span>
          <div className="new-in-dropdown">

              <div id="forflex">
                  <div id="fortext">
              <a href="#">Lookbook</a>
              <a href="#">Collection</a>
              </div>
              <div id="image-inside-dropdown">
                  <img src={Party}></img>
              </div>
              </div>
          </div>
          </span>


          <span id="content-div3">
           <span id="dropdown">CLOTHING</span>
          <div className="new-in-dropdown">

              <div id="forflex">
                  <div id="fortext">
              <a href="#">Tops</a>
              <a href="#">Dresses</a>
              <a href="#">Skirts</a>
              <a href="#">Bottoms</a>
              <a href="#">Jeans</a>
              <a href="#">Shrugs</a>
              <a href="#">Basics</a>
              <a href="#">Classic</a>
              <a href="#">Fall'21</a>
              </div>
             
              <div id="fortext1">
              <h1>SHOP BY OCASSION</h1>
              <a href="#">Party</a>
              <a href="#">Vacation</a>
              <a href="#">Loungewear</a>
              <a href="#">Work</a>
              <br></br>
              <h1>CURVE</h1>
              <a href="#">Tops</a>
              <a href="#">Dresses</a>
             </div>

              <div id="image-inside-dropdown">
                  <img src={Clothing}></img>
              </div>

            

              </div>
          </div>
          </span>



          <span id="content-div4">
           <span id="dropdown">TOPS</span>
          <div className="new-in-dropdown">

              <div id="forflex">
                  <div id="fortext1">
                    <h1>SHOP BY STYLE</h1>
              <a href="#">Crop Tops</a>
              <a href="#">Tank Tops</a>
              <a href="#">T-Shirts</a>
              <a href="#">Shirts</a>
              <a href="#">Blouse</a>
              <a href="#">Maxi Tops</a>
              <a href="#">Peplum Tops</a>
              <a href="#">Wrap Tops</a>
              </div>
               
               <div id ="for-tops">
                   <h1>SHOP CASUALLY</h1>
               <a href="#">Off Shoulder Tops</a>
              <a href="#">Cold Shoulder Tops</a>
              <a href="#">One Shoulder Tops</a>
               </div>

               <div id="fortext1">
                    <h1>SHOP BY TRENDS</h1>
              <a href="#">Floral Tops</a>
              <a href="#">Stripped Tops</a>
              <a href="#">Falka Tops</a>
              <a href="#">Halka Tops</a>
              <a href="#">Lace Tops</a>
              <a href="#">Ruffled Tops</a>
              <a href="#">Peplum Tops</a>
              <a href="#">Wrap Tops</a>
              </div>

               <div id="for-tops">
                <h1>SHOP BY OCCASION</h1>   
               <a href="#">Casual Tops</a>
              <a href="#">Party Tops</a>
              <a href="#">Work Tops</a>
               </div>
              
              <div id="image-inside-dropdown-tops">
                  <img src={Tops}></img>
              </div>
              </div>
          </div>
          </span>


          <span id="content-div5">
           <span id="dropdown">DRESSES</span>
          <div className="new-in-dropdown">

              <div id="forflex">
              <div id="fortext1">
                    <h1>SHOP BY STYLE</h1>
              <a href="#">Bodycon Dresses</a>
              <a href="#">A-Line Dresses</a>
              <a href="#">Maxi Dresses</a>
              <a href="#">Mini Dresses</a>
              <a href="#">Midi Dresses</a>
              <a href="#">Skater Dresses</a>
              <a href="#">Shift Dresses</a>
              <a href="#">Shirt Dresses</a>
              </div>

          
              <div id ="for-tops">
                   <h1>SHOP CASUALLY</h1>
               <a href="#">Off Shoulder Dresses</a>
              <a href="#">Cold Shoulder Dresses</a>
              <a href="#">One Shoulder Dresses</a>
              <a href="#">Jumpsuits and Playsuits</a>
               </div>

               <div id="fortext1">
                    <h1>SHOP BY TRENDS</h1>
              <a href="#">Floral Dresses</a>
              <a href="#">Stripped Dresses</a>
              <a href="#">Falka Dresses</a>
              <a href="#">Halka Dresses</a>
              <a href="#">Lace Dresses</a>
              <a href="#">Ruffled Dresses</a>
              <a href="#">Peplum Dresses</a>
              <a href="#">Wrap Dresses</a>
              </div>

               <div id="for-tops">
                <h1>SHOP BY OCCASION</h1>   
               <a href="#">Casual Dresses</a>
              <a href="#">Party Dresses</a>
              <a href="#">Work Dresses</a>
               </div>


              <div id="image-inside-dropdown-tops">
                  <img src={Dresses}></img>
              </div>
              </div>
          </div>
          </span>


          <span id="content-div6">
           <span id="dropdown" style={{color:"#fc6486"}}>WINTER'21</span>
          <div className="new-in-dropdown">

              <div id="forflex">
                  <div id="fortext">
              <NavLink to = "/test" >CLOTHING</NavLink>
              <a href="#">CURVE</a>
              <a href="#">BEST SELLERING</a>
              <a href="#">ACCESSORRIES</a>
              </div>
              <div>
                  <img src={Newin}></img>
              </div>
              </div>
          </div>
          </span>


         <span id="content-div7">
           <span id="dropdown">LOUNGEWEARS</span>
          <div className="new-in-dropdown">

              <div id="forflex">
                  <div id="fortext">
              <a href="#">CLOTHING</a>
              <a href="#">CURVE</a>
              <a href="#">BEST SELLERING</a>
              <a href="#">ACCESSORRIES</a>
              </div>
              <div>
                  <img src={Newin}></img>
              </div>
              </div>
          </div>
          </span>


          <span id="content-div8">
           <span id="dropdown">LOOKBOOKS</span>
          <div className="new-in-dropdown">

              <div id="forflex">
                  <div id="fortext">
              <a href="#">Bring The Party - Party'21</a>
              <a href="#">Loungewear'20</a>
              </div>
              <div id="image-inside-dropdown">
                  <img src={Lookbooks}></img>
              </div>
              </div>
          </div>
          </span>


          <span id="content-div9">
           <span id="dropdown" style={{color:"#fc6486"}}>SALE</span>
          <div className="new-in-dropdown">

              <div id="forflex">
                  <div id="fortext">
              <a href="#">Clearance</a>
              <a href="#">Under ₹699</a>
              <a href="#">Under ₹799</a>
              <a href="#">Under ₹999</a>
              </div>
              <div id="clearance">
                  <img src={Clearance}></img>
                  <img src={Sale699}></img>
                  <img src={Sale799}></img>
                  <img src={Sale999}></img>
              </div>
              </div>
          </div>
          </span>


          <span id="content-div10">
           <span id="dropdown" style={{color:"#fc6486"}}>2 DRESSES AT ₹1800</span>
          <div className="new-in-dropdown">

              <div id="forflex">
                  <div id="fortext">
              <a href="#">CLOTHING</a>
              <a href="#">CURVE</a>
              <a href="#">BEST SELLERING</a>
              <a href="#">ACCESSORRIES</a>
              </div>
              <div>
                  <img src={Newin}></img>
              </div>
              </div>
          </div>
          </span>


          <span id="content-div11">
           <span id="dropdown" style={{color:"#fc6486"}}>2 TOPS AT ₹999 </span>
          <div className="new-in-dropdown">
          </div>
          </span>


          
          

          </div>


         <div id="searchbox">
            <span id="searchimage"><img src={Search}></img></span> 
           <select id="select-currency">
               <option value= "INR">₹ INR </option>
               <option value= "USD">$ USD </option>
               <option value= "CAD">$ CAD </option>
               <option value= "GBP">£ GBP </option>
               <option value= "AUD">$ AUD </option>
               <option value= "SGD">$ SGD </option>
               <option value= "EUR">€ EUR </option>
           </select>
         </div>

        </div>
    )
}

export {Navbar2}