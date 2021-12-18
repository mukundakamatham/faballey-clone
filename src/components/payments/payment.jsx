import React from "react";
import "./payment.css";
import PayFooter from "./payfooter"
import ShipFooter from "./shipfooter"
import './ship.css';
import { Redirect } from "react-router-dom";
import {useEffect,useState} from "react"
import {app }from "../../utils/request";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
function Payment() {
    const [address, setAddress] = useState("");
    const [carddetails, setCarddetails] = useState([])
    
    const [formData, setFormData] = useState([])

    
const cart = useSelector((state) => state.cart.cart);


    const { isAuth, isLoading, token, isError } = useSelector(
        (state) => state.auth,
        shallowEqual
      );
    useEffect(() => {
       adress()
      
    }, [])
    // const cartinfo=async()=>{
    //     try {
    //         await app.get("/cart/",{ headers: {
    //            'Authorization': 'Bearer ' + token
    //          }}).then(res =>{
              
    //           setAddress(res.data)
    //        });
    //        } catch (error) {
    //            console.log(error);
    //        }
    
    // }
    const card=async()=>{
        try {
            if(address.length<1){
                return <Redirect to="/Shipping" /> 
            }
            await app.get("/address/",{ headers: {
               'Authorization': 'Bearer ' + token
             }}).then(res =>{
              
              setAddress(res.data)
           });
           } catch (error) {
               console.log(error);
           }
    }
    async function adress(){
       
        try {
            await app.patch("/payment/update",{payment:formData},{ headers: {
               'Authorization': 'Bearer ' + token
             }}).then(res =>{
              
                setCarddetails(res.data)
           });
           } catch (error) {
               console.log(error);
           }
           }


           const handleChange=(e)=>{
        
            
    const {name,value,type,checked}=e.target;
    setFormData({
        ...formData,[name]:type==="checkbox" ? checked:value,
    })
        } 

if(!isAuth){
    return <Redirect to="/login" />;
}else{
  return (
    <div>
      <div className="payment-container">
        <div className="payment-title-left">
          <div className="payment-heading">
            <p>Choose Payment Mode</p>
          </div>
          {/* ----------------- */}
          <div className="payment-method-list">
            <button type="button" className="active">
              CREDIT/DEBIT CARD
            </button>
            <button type="button" className="btn-method">
              UPI
            </button>
            <button type="button" className="btn-method">
              NET BANKING
            </button>
            <button type="button" className="btn-method">
              MOBILE WALLETS
            </button>
            <button type="button" className="btn-method">
              CASH ON DELIVERY
            </button>
          </div>
          {/* -------------- */}
          <div className="payment-form">
            <h3>CREDIT/DEBIT CARD</h3>
            <div className="payment-credit-section">
              <input
                type="text"
                placeholder="XXXX  XXXX  XXXX  XXXX"
                className="card-number"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Cardholder Name"
                className="card-name"
                onChange={handleChange}
              />

              <div className="card-details">
                <div className="card-month-item">
                  <input type="text" placeholder="MM" className="card-month"
                  onChange={handleChange}
                  
                  
                  />
                </div>
                <div className="card-year-item">
                  <input type="text" placeholder="YY" className="card-year"
                  onChange={handleChange}
                  
                  
                  />
                </div>
                <div className="card-cvv-item">
                  <input type="text" placeholder="CVV" className="card-cvv"
                  
                  onChange={handleChange}
                  
                  />
                </div>
              </div>
            </div>
            
            <button type="submit" class="btn-payment" onclick={card}>
              Pay Now
            </button>
          </div>
       
        </div>
{/* ------------------------------right section------------------------------------------- */}


<div class="product-details">
<span className="product-title prize">
          <h3>1 product(s) in Bag</h3>
          </span>



          <div class="optionBox">
            <div class="prizemain">
              <div class="prizeDetailbox">
                <div class="prizeDetail">
                  <p>Sub Total</p>
                  <span>
                    <i class="fas fa-rupee-sign"></i> 1050
                  </span>
                </div>
                <div class="prizeDetail">
                  <p>Shipping</p>
                  <span>
                    <i class="fas fa-rupee-sign"></i> 50
                  </span>
                </div>
                <div class="orderTotal">
                  <p>Total</p>
                  <span>
                    {" "}
                    <i
                      class="fas fa-rupee-sign"
                      style={{"float":"none"}}
                    ></i> 1050{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

{/* ----------------middle-section------------------ */}

          <span className="product-title prize">
          <h3 style={{marginTop:"2%"}}>Deliver To</h3>
          </span>
          <div className="product-title">
            <a href="#a">Change Address</a>
          </div>
          <p class="shipdetails pay-address">
           shailaja <br/>
           Itarsi,Madhya Pradesh <br/>
           India - 461111 <br/>
           Mobile <b>9340796426</b><br/></p>

          {/*------------------------------bottom-section-------------- */}
          <p class="delivery-details">
            Estimated Delivery Time<br/><br/>
           India : 4-6 business days.<br/> International: 7-12 business days.
           </p>
        </div>




      </div>
     

      <PayFooter/>
<ShipFooter/>

    </div>
    
  );
}
}
export default Payment;