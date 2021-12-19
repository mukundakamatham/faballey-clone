import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import "./products.css";
import  {BothNavbar} from  "./Bothnavbar"

function  Products(){
const [data,setData]= useState([])
const [images,setImages]=useState(true)
const [state,setState] =useState([])
useEffect(()=>{
pro1()
},[])


   

    const pro1 =async()=>{
          let user = await fetch("http://localhost:2345/products")
          let bali =await user.json();
          setData(bali)
          setState(bali)
    }    

   
    // const changeStatus=(id)=>{
    //     const updateList = data.map((e)=>{
    //         if(e.id===id){ 
    //             e.images=!e.images
    //              }
    //              return e
    //     })   
    //     setImages(updateList)
    //    }


       const handleHightoLow = (e)=>{
         
           const option=e.target.value;
           if(option==="hightolow"){
            const updatelist =    [...data].sort((a,b)=>  +(b.price-b.discount) - +(a.price-a.discount))
            setState(updatelist)
           }
           if(option==="lowtohigh"){
            const updatelist =    [...data].sort((a,b)=>  +(a.price-a.discount) - +(b.price-b.discount))
            setState(updatelist)
           }      
        }


        
        const colorsAll = (e)=>{
         
            const option=e.target.value;
    
                  if(option==="blue"){
                 const updatelist = data.filter((ev)=>ev.color===option )
                  setState(updatelist)
                  
                  }
                
                  if(option==="pink"){
                    const updatelist = data.filter((ev)=>ev.color===option )
                    setState(updatelist)
                    
                     }
                   
                if(option==="red"){
                        const updatelist = data.filter((ev)=>ev.color===option )
                        setState(updatelist)
                         }

                if(option==="green"){
                            const updatelist = data.filter((ev)=>ev.color===option )
                            setState(updatelist)
                             }

                 if(option==="yellow"){
                                const updatelist = data.filter((ev)=>ev.color===option )
                                setState(updatelist)
                                 }
                if(option==="maroon"){
                                    const updatelist = data.filter((ev)=>ev.color===option )
                                     setState(updatelist)
                                     }
        
    
         }

         
        const handlePricesort=(e)=>{
            const option=e.target.value;

            if(option==="fivehundred"){
                const updatelist = data.filter((ev)=>ev.price-ev.discount>500 && ev.price-ev.discount <=1000)
                 setState(updatelist)
                 }
               
                 if(option==="onethousandone"){
                    const updatelist = data.filter((ev)=>ev.price-ev.discount>1001 && ev.price-ev.discount <=1500)
                     setState(updatelist)
                     }   

                     if(option==="fifteenhundred"){
                        const updatelist = data.filter((ev)=>ev.price-ev.discount>1501 && ev.price-ev.discount <=2000)
                         setState(updatelist)
                         } 

                         if(option==="twothousand"){
                            const updatelist = data.filter((ev)=>ev.price-ev.discount>2001 && ev.price-ev.discount <=3000)
                             setState(updatelist)
                             } 
        }
 
    
         const handleDiscount=(e)=>{
             const option=e.target.value;
            if(option==="ten"){
                const updatelist = data.filter((ev)=>(ev.discount/ev.price)*100 <=20 && (ev.discount/ev.price)*100>10 )
                 setState(updatelist)
                 } 

        if(option==="twenty"){
         const updatelist = data.filter((ev)=>(ev.discount/ev.price)*100 <=30 && (ev.discount/ev.price)*100>21 )
          setState(updatelist)
          }      

          if(option==="thirty"){
            const updatelist = data.filter((ev)=>(ev.discount/ev.price)*100 <=40 && (ev.discount/ev.price)*100>31 )
             setState(updatelist)
             }  

             if(option==="forty"){
                const updatelist = data.filter((ev)=>(ev.discount/ev.price)*100 <=50 && (ev.discount/ev.price)*100>41 )
                 setState(updatelist)
                 }  
         }


      const handleImages=(id)=>{
       
            const updatelist = state.map((e)=>{
                if(e._id===id){
                 e.status=!e.status
                }
                return e
               
            })
            setState(updatelist)
         }





    return(

  <>
  <BothNavbar></BothNavbar>
     <div id="colms3-div">
    <div id="color1">Party'21 Collection</div>
    <div id="color2">EOSS | Flat 50-70 % Off</div>
    <div id="color3">PSA : Free Shipping on orders above ₹ 3000</div>
   </div>

   <div id="below-colms3-div">
      Home | New In | Clothing
   </div>


   <div id="main-product-page">
      

        <div id="sidebar">
         <h1>CLOTHING</h1>
         <hr></hr>
         <h3 id="for-color-clothing">CLOTHING</h3>
         <hr></hr>
         <h3>EXCLUSIVES</h3>
         <hr></hr>
         <h3>ACCESSORIES</h3>
         <hr></hr>
         <h3>CURVE</h3>
         <hr></hr>
         <h3>#TRENDING</h3>
         <hr></hr>
        </div>

     




        <div style={{flex:"3"}}>
         <div id="below-2nd-navbardiv" >
               <select id="for-colors-filter" onChange={colorsAll}>
                   <option value="all"> All Colors</option>
                   <option value="red">Red</option>
                   <option value="green">Green</option>
                   <option value="blue">Blue</option>
                   <option value="pink">Pink</option>
                   <option value="maroon">Maroon</option>
                   <option value="yellow">Yellow</option>
               </select>

               <select id="for-size-filter">
                   <option value="size"> All size</option>
                   <option value="m">Medium</option>
                   <option value="s">Small</option>
                   <option value="l">Large</option>
                  
               </select>

               <select id="for-discount-filter" onChange={handleDiscount}>
                   <option value="discount"> Discount</option>
                   <option value="ten">10% - 20%</option>
                   <option value="twenty">21% - 30%</option>
                   <option value="thirty">31% - 40%</option>
                   <option value="forty">41% - 50%</option>
                   <option value="fifty">51% and above </option>
                  
               </select>

               <select id="for-price-filter" onChange={handlePricesort}>
                   <option value="price"> Price</option>
                   <option value="fivehundred">₹500 - ₹1000</option>
                   <option value="onethousandone">₹1001- ₹1500</option>
                   <option value="fifteenhundred">₹1501- ₹2000</option>
                   <option value="twothousand">₹2001- ₹3000</option>
                   
                  
               </select>
    
             <div id="for-sorting-lowtohighdiv">
                 <div><span> CLOTHING </span> <span className="for-line-color">|</span> <span> 360 STYLES FOUND </span> <span >|</span>  <span> VIEW 45 </span></div>
                
                <span id="right-sortby">
                    SORTBY :  
                    <select onChange={handleHightoLow}>
                       <option value="newandpopular">New and Popular</option>
                       <option value="lowtohigh">Low To High</option>
                       <option value="hightolow">High To Low</option>
                    </select>
                    </span>
             </div>
      
         </div>


        <div id = "product-showing-div">
         {
            
             state.map((e)=>(

                 <div id="particular-product" key={e._id}>  
                 
               <img onMouseEnter={()=>handleImages(e._id)} onMouseLeave={()=>{handleImages(e._id)}}  src={e.status? e.image[0] : e.image[1]} />
               <NavLink style={{textDecoration:"none"}} to={`/productDetail/${e._id}`}>
               <p id ="font-of-productname">{e.productName}</p></NavLink>
               <p id ="font-of-productname-color">₹ {e.price-e.discount} <span> ₹</span><span id="for-line-through"> {e.price}</span> </p>
               
               </div>
             ))
         }
        </div>
        </div>
        </div>
        </>
    )
}
export {Products}