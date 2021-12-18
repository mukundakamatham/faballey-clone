import React from "react";
import "./payment.css";
import PayFooter from "./PayFooter"
import ShipFooter from "./ShipFooter"
import './ship.css';

function Payment() {
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
              />
              <input
                type="text"
                placeholder="Cardholder Name"
                className="card-name"
              />

              <div className="card-details">
                <div className="card-month-item">
                  <input type="text" placeholder="MM" className="card-month" />
                </div>
                <div className="card-year-item">
                  <input type="text" placeholder="YY" className="card-year" />
                </div>
                <div className="card-cvv-item">
                  <input type="text" placeholder="CVV" className="card-cvv" />
                </div>
              </div>
            </div>
            
            <button type="submit" class="btn-payment" onclick="">
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
            <a href="#">Change Address</a>
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

export default Payment;
