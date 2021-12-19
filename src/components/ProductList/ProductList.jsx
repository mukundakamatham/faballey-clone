import styles from './ProductList.module.css';
import Tabs from './Tabs.js'
import {useParams,useState,useEffect} from 'react'
function ProductList() {
  
    return (
        <div>
            <div className={styles.prodCntr}>

                <div className={styles.prodLeft}>
                     <ul className={styles.sliderBox}>
                         <li className={styles.sliderBox_li}>
                             <a href="##" className={styles.productsections_a}>
                                 <img src="https://img.faballey.com/images/Product/TOP05642Z/d3.jpg"  alt ="" className={styles.sliderBox_li_img} />
                             </a>
                         </li>

                         <li className={styles.sliderBox_li}>
                             <a href="##" className={styles.productsections_a}>
                                 <img src="https://img.faballey.com/images/Product/TOP05642Z/d3.jpg"  alt ="" className={styles.sliderBox_li_img} />
                             </a>
                         </li>
                     </ul>
                </div>

                <div className={styles.prodRight}>
                    <span className={styles.hour24sp}> Free shipping on orders above INR 3000 </span>
                    <h1 className={styles.prodRight_h1}>Navy Ruffled Strappy One Shoulder Top</h1>
                    <h4 className={styles.prodRight_h4}>
                        <span className={styles.prodRight_sp1}>
                            <i class="fal fa-rupee-sign"></i> 
                            1500</span>
                       <span className={styles.prodRight_sp2}>
                           <i class="fal fa-rupee-sign"></i>
                            1125</span>
                            <span className={styles.prodRight_sp3}>
                                (25% OFF)</span>
                                <span className={styles.alltaxes}>Inclusive of all taxes</span>
                                </h4>
                                <p className={styles.prodRight_p}>SKU:  <span>TOP05643Z</span></p>

                                <div className={styles.prodslSize}>
                                    <div className={styles.sizeError} >
                                        <span className={styles.sizeError_span}>Select Size</span>
                                    </div>

                                    <div className={styles.prodSizeguide}>
                                        <h5 className={styles.prodSizeguide_h5}>Size:</h5>
                                        <a href="##" className={styles.prodSizeguide_a}>Size Guide</a>
                                    </div>

                                    <ul>
                                        <li>
                                            <a href="##" >
                                                XS</a>
                                                <div className={styles.sizeMeasure}>
                                                    <p>Body measurement: To Fit Bust 33 , <br/> Waist 25 , <br/>
                                                    </p>
                                                </div>
                                        </li>

                                         <li>
                                            <a href="##">S</a>
                                            <div className={styles.sizeMeasure}>
                                               <p>Body measurement: To Fit Bust 34 , <br/> Waist 26 , <br/>
                                               </p>
                                            </div>
                                        </li>

                                        <li>
                                            <a href="##">M</a>
                                            <div class="sizeMeasure">
                                                {/* <p>Body measurement: To Fit Bust 36 , <br/> Waist 28 , <br/></p> */}
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <a href="##">L</a>
                                                <div className={styles.sizeMeasure}>
                                                    <p>Body measurement: To Fit Bust 38 , <br/> Waist 30 , <br/></p>
                                                </div>
                                        </li>

                                        <li>
                                            <a href="##">XL</a>
                                            {/* <div className={styles.sizeMeasure}>
                                                <p>Body measurement: To Fit Bust 40 , <br/> Waist 32 , <br/></p>
                                            </div> */}
                                        </li>
                                    </ul>
                                </div>

                                <button type="button" className={styles.addbagBtn}>ADD TO BAG</button> 
                                <button type="button" className={styles.savewshBtn}>ADD TO BAG</button>

                                <div className={styles.box1}>
                                    <h6>Offers You Don’t Want to Miss</h6>

                                    <div className={styles.bestoferBox}>
                                        <h5>Get it for <span className={styles.styleline}></span> Use code 
                                        <span className={styles.bestoferBox_span}> EXTRA15</span>
                                        </h5>

                                        <p>Avail <span> 15 % off </span> on orders above <i class="fal fa-rupee-sign"></i>2000</p>

                                    </div>

                                </div>

                                <div className={styles.box2}>
                                        <h5>Check Pin Code Serviceability</h5>
                                        <input type="text" placeholder="Enter Pin Code"/>
                                        <span className={styles.box2_span}>Check</span>
                                        <p>Enter PIN code to check availability in your area.</p>
                                        <p>Cash on delivery available</p>
                                        <p>15 days return/exchange on all non-mask products</p>
                                        <p>Return/Exchange not applicable on Masks</p>
                                    </div>

                                        <Tabs/>
                                        <div>
                                           
                                        </div>

                </div>

            </div>
        </div>
    )
}

export default ProductList
