import React from "react";
import "./ship.css";
import ShipFooter from "./ShipFooter";

function Ship() {
// const [name,setName] = React.useState("");
// const [number,setNumber] = React.useState("");
// const [country,setCountry] = React.useState("");
// const [pincode,setPincode] = React.useState("");
// const [address,setAddress] = React.useState("");
// onChange={(e)=>setName(e.target.value)}
// console.log(name,number,country,pincode,address);

  return (
    <div>
      <div className="shipping-section">
        <div className="shipping-container">
          <p>Where do you want us to deliver?</p>
          <div className="ship-form">
            <form action="" id="" method="post" novalidate="novalidate">
              <div className="ship-item">
                <div className="ship-flex">
                  <div>
                    <span>
                      <label>
                        Full name*
                        <br />
                      </label>
                      <input type="text"  />
                    </span>
                  </div>
                  <div>
                    <span>
                      <label>
                        Mobile number*
                        <br />
                      </label>
                      <input type="text" maxlength="10" minlength="10"   />
                    </span>
                  </div>
                </div>
                {/* ------------------- */}

                <div className="ship-flex">
                  <div>
                    <span>
                      <label>
                        Country*
                        <br />
                      </label>

                      <select name="Country" required=""  >
                        <option value=""> India</option>
                        <option value="">Australia</option>
                        <option value="">Belgium</option>
                        <option value="">Canada</option>
                        <option value="">China</option>
                        <option value="">Fiji</option>
                        <option value="">France</option>
                        <option value="">Germany</option>
                        <option value="">Greece</option>
                        <option value="">Guyana</option>
                        <option value="">Hong Kong</option>
                        <option value="">Hungary</option>
                        <option selected="" value="">
                          India
                        </option>
                        <option value="">Indonesia</option>
                        <option value="">Ireland</option>
                        <option value="">Italy</option>
                        <option value="">Japan</option>
                        <option value="">Kuwait</option>
                        <option value="">Malaysia</option>
                        <option value="">Mauritius</option>
                        <option value="">Nepal</option>
                        <option value="">Netherlands</option>
                        <option value="">New Zealand</option>
                        <option value="">Nigeria</option>
                        <option value="">Philippines</option>
                        <option value="">Saudi Arabia</option>
                        <option value="">Scotland</option>
                        <option value="">Singapore</option>
                        <option value="">South Africa</option>
                        <option value="">Spain</option>
                        <option value="">Sri Lanka</option>
                        <option value="">Sweden</option>
                        <option value="">Switzerland</option>
                        <option value="">Thailand</option>
                        <option value="">Trinidad and Tobago</option>
                        <option value="">United Arab Emirates</option>
                        <option value="">United Kingdom</option>
                        <option value="">United States</option>
                      </select>
                    </span>
                  </div>
                  <div>
                    <span>
                      <label>
                        Pin Code*
                        <br />
                      </label>
                      <input type="text" maxlength="6" minlength="6"  />
                    </span>
                  </div>
                </div>
                <label>
                  Address*
                  <br />
                </label>
                <textarea
                  cols="20"
                  id="addaddress"
                  name="Address"
                  required=""
                  rows="2"
               ></textarea>

                <div className="editAddres">
                  <input type="checkbox" />
                  <input name="DefaultAddress" type="hidden" value="false" />
                  <p>Make this my default address</p>
                </div>
              </div>
              <div className="shipbtn">
                <input
                  className="dfaddrs"
                  type="submit"
                  value="Deliver to this address"
                  id="shipAdd"
                />
              </div>
            </form>
          </div>
        </div>
        {/* -------------------------------form ends and product details starts------------------------------------------------- */}
        <div className="product-details">
          <div className="product-title">
            <h3>Product Details</h3>
            <a href="#">Edit Bag</a>
          </div>

          <div className="ship-items">
            <p>
              Dusty Pink Slit Shoulder Side Tie Dress <br />
              Sku : DRS04147A <br />
              Qty : 1 Price :{" "}
              <span>
                <i className="fas fa-rupee-sign"></i>
              </span>{" "}
              1050
              <br />
            </p>
          </div>

{/* ----------------middle-section------------------ */}

          <span className="product-title prize">
          <h3>Price Details</h3>
          </span>
          <div className="optionBox">
            <div className="prizemain">
              <div className="prizeDetailbox">
                <div className="prizeDetail">
                  <p>Sub Total</p>
                  <span>
                    <i className="fas fa-rupee-sign"></i> 1050
                  </span>
                </div>
                <div className="prizeDetail">
                  <p>Shipping</p>
                  <span>
                    <i className="fas fa-rupee-sign"></i> 50
                  </span>
                </div>
                <div className="orderTotal">
                  <p>Total</p>
                  <span>
                  
                    <i
                      className="fas fa-rupee-sign"
                      style={{"float":"none"}}
                    ></i> 1050{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*------------------------------bottom-section-------------- */}
          <p className="shipdetails">
            Estimated Delivery Time<br/><br/>
           India : 4-6 business days.<br/> International: 7-12 business days.
           </p>
        </div>

        {/* -------------------------product div ends-------------------------- */}
      </div>
      <ShipFooter />
    </div>
  );
}

export default Ship;
