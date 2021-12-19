import styles from './ProductList.module.css';
import Tabs from './Tabs.js'
import {useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import  { app } from '../../utils/request'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addBAG } from '../../Redux/bag/action';
import {addcart} from '../../Redux/cart/action';
export const ProductList=()=>{
    const { isAuth,  } = useSelector(
        (state) => state.auth,
        shallowEqual
      );
    const dispatch = useDispatch();

    const addToCart = (product) =>{
      if(isAuth){
       dispatch(addcart(product))
      }  else{
          alert("Login First")
      }
    }

    const addToBag = (product) => {
        if(isAuth){
          dispatch(addBAG(product))
          }  else{
              alert("Login First")
          }
    }
   
    const [product, setProduct ] = useState({"_id":{"$oid":"61bae728f4c625615cb302dd"},"brandName":"pepe","category":"Dress","description":"nice","productName":"Blush Pink Pleated Full Sleeve Dress","price":1900,"quantity":1,"image":["https://img.faballey.com/images/Product/DRS04473Z/d3.jpg","https://img.faballey.com/images/Product/DRS04473Z/d4.jpg","https://img.faballey.com/images/Product/DRS04473Z/d5.jpg","https://img.faballey.com/images/Product/DRS04473Z/d6.jpg","https://img.faballey.com/images/Product/DRS04473Z/d7.jpg","https://img.faballey.com/images/Product/DRS04473Z/d8.jpg"],"discount":900,"sizes":["s","m","l"],"color":"pink","gender":"female","status":true}
    )
    
    const price = (+product.price)-(+product.price/100)*25;

    const  getDetails = async(key) =>{
        try  {
        console.log(key,"key")
        await app.get(`/productDetail/${key}`).then(res =>{
          console.log(res.data);
         setProduct(res.data)
       });
       } catch (error) {
           console.log(error);
       }

    }
    
    let { id } = useParams();
  
    useEffect(() => {
        console.log("id",id);
        getDetails(id)
    }, [])
    
    var image = product.image;
    return (
        <div>
            <div className={styles.prodCntr}>

                <div className={styles.prodLeft}>
                     <ul className={styles.sliderBox}>
                         {image.map((e)=>(<li className={styles.sliderBox_li}>
                             <a href="#" className={styles.productsections_a}>
                                 <img src={e}  alt ="" className={styles.sliderBox_li_img} />
                             </a>
                         </li>))}
                         {/* <li className={styles.sliderBox_li}>
                             <a href="##" className={styles.productsections_a}>
                                 <img src="https://img.faballey.com/images/Product/TOP05642Z/d3.jpg"  alt ="" className={styles.sliderBox_li_img} />
                             </a>
                         </li>

                         <li className={styles.sliderBox_li}>
                             <a href="##" className={styles.productsections_a}>
                                 <img src="https://img.faballey.com/images/Product/TOP05642Z/d3.jpg"  alt ="" className={styles.sliderBox_li_img} />
                             </a>
                         </li> */}
                     </ul>
                </div>

                <div className={styles.prodRight}>
                    <div className={styles.boxx1}>
                    <span className={styles.hour24sp}> Free shipping on orders above INR 3000 </span>
                    </div>
                   <div className={styles.boxx1}>
                   <h1 className={styles.prodRight_h1}>{product.productName}</h1>
                   </div>
                   <div className={styles.boxx1}>
                   <h4 className={styles.h44}>
                           <span className={styles.span44}>
                            <i class="fal fa-rupee-sign"></i> 
                           { product.price}</span>
                            <span className={styles.span45}>
                           <i class="fal fa-rupee-sign"></i>
                            {price}</span>
                            <span className={styles.prodRight_sp3}>
                                (25% OFF)</span>

                            </h4>
                   </div>
                   <div className={styles.boxx1}>
                   <span className={styles.alltaxes}>Inclusive of all taxes</span>
                   </div>

                   <div className={styles.boxx1}>
                   <p className={styles.prodRight_p}>SKU: TOP05643Z</p>
                   </div>                          
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
                         <div className={styles.divm}>
                         <button onClick={addToBag} type="button" className={styles.addbagBtn}>ADD TO BAG</button> 
                         <button onClick={addToCart} type="button" className={styles.savewshBtn}>ADD TO CART</button>
                         </div>


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


