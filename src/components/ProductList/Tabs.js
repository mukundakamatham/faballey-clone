import React from 'react'
import { useState} from 'react'
import './Tabs.css'

function Tabs() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

  return (
    <div className="box3">
      <div className="container">
        <div className="bloc-tabs">
          <span className="</span>">
          <button
            className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(1)}
          >
            Description
          </button>
          </span>
          <span className="</span>">
          <button
            className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(2)}
          >
            Details
          </button>
          </span>
          <span className="</span>">
          <button
            className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(3)}
          >
           Shipping
          </button>
          </span>
          <span className="linerone"></span>
        </div>
        
       
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? 'content  active-content' : 'content'
            }
          >
            <p>
            Make heads turn in this black high-neck top. Featuring ruched detailing on the sleeves, it comes in a crop design and is easy to slip on.
            <br/> <br/>
             Style Tip: Finish the look with a pastel trouser and strappy heels.
            </p>
          </div>

          <div
            className={
              toggleState === 2 ? 'content  active-content' : 'content'
            }
          >
           <p>Color: Black<br/> Fabric: Poly Lycra<br/> Neck: High<br/> Sleeves: Full <br/> Closure: Slip On<br/> Pattern: Self Design</p>
           <table className="cont_table"><tbody><tr><td>Size</td><td>Length</td><td>Width</td></tr><tr><td>XS</td><td>63.50 CM</td><td>63.50 CM</td></tr><tr><td>S</td><td>63.50 CM</td><td>63.50 CM</td></tr><tr><td>M</td><td>63.50 CM</td><td>63.50 CM</td></tr><tr><td>L</td><td>63.50 CM</td><td>63.50 CM</td></tr><tr><td>XL</td><td>63.50 CM</td><td>63.50 CM</td></tr></tbody></table>
           <br/>
           <p>Please note that the above measurements are garment measurements and not to-fit, body measurements. Refer to our 
             <a className="styles_a" href="##">Size Guide</a> for more details</p>
            <br/>
            <p>Quantity - 1N</p>
            <p>Country of Origin : India</p>
            <br/>
            <b>Manufactured and Packed by</b>
            <p>High Street Essentials Private Limited <br/> C-11, Sector 7, District Gautam Budh Nagar, Noida 201301, Uttar Pradesh, India <br/></p>
            <br/>
            <b> For Customer Queries </b>
            <p>Grievance Redressal Officer <br/> C-11, Sector 7, District Gautam Budh Nagar, Noida 201 301, Uttar Pradesh, India <br/> Phone : +91-8929987349 / 0120-6850262 <br/> Email : customercare@faballey.com <br/></p>
            <br/>
            <p><b>NOTE:</b> There might be a slight variation in the shade of the actual product and the image shown on the screen, due to the screen resolution and photography effects.</p>
          </div>

          <div
            className={
              toggleState === 3 ? 'content  active-content' : 'content'
            }
          >
           <p>Dispatch: Within <span id="shipHours">48-72</span> Hours <br/> Delivery time within India - 4-6* business days<br/> International delivery time - 7-12* business days<br/> <b>*Note:</b> Delivery of orders may take longer due to region-wise lockdown and diversion of routes.<br/> Return/Exchange: If you are not completely satisfied with your purchase, simply select the option of return/exchange within 15 days of receiving your order from your order details page and we will process your return, no questions asked.<br/></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs
