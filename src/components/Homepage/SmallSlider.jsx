import React from "react";
// import Carousel from "react-elastic-carousel";
// import Item from "./Item";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from './Smalldata.module.css';



// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
// //   { width: 1, itemsToShow: 1 },
// //   { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
// //   { width: 768, itemsToShow: 3, itemsToScroll: 1, pagination: false },
//   { width: 900, itemsToShow: 6, itemsToScroll: 1, pagination: false }
// ];

function SmallSlider() {

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

  
  return (
    <div>
     <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  className={style.img_wd}
>
  <div><img src="https://img.faballey.com/images/product/DRS04632Z/1.JPG" alt="Appartment" /></div>
  <div><img src="https://img.faballey.com/images/product/DRS04632Z/1.JPG" alt="Appartment" /></div>
  <div><img src="https://img.faballey.com/images/product/DRS04632Z/1.JPG" alt="Appartment" /></div>
  <div><img src="https://img.faballey.com/images/product/DRS04632Z/1.JPG" alt="Appartment" /></div>
</Carousel>;
    </div>
  //   <div className="main">
  //   <div className="sliderwrpaer">
  //     <div className="corosel rec.rec-arrow:hover">

  //       <Carousel breakPoints={breakPoints} pagination={false}>

  //         <Item>
  //           <div className="divimg">
  //             <img className={style.browsimg} src="https://img.faballey.com/images/product/DRS04632Z/1.JPG" alt="Appartment" />
  //           </div>
  //           <div><p className={style.hmtrnditemNm_p}>Navy Solid Belted A-Line Dress</p>
  //           <span className={style.hmtrnditemNm_span}><i class="fal fa-rupee-sign"></i> 1100</span> 
  //           <span className={style.hmtrndcutprz}><i class="fal fa-rupee-sign"></i> 2200</span></div>
  //         </Item>

  //         <Item>
  //           <div className="divimg">
  //             <img className={style.browsimg} src="https://img.faballey.com/images/product/DRS04632Z/1.JPG" alt="Appartment" />
  //           </div>
  //           <div><p className={style.hmtrnditemNm_p}>Navy Solid Belted A-Line Dress</p>
  //           <span className={style.hmtrnditemNm_span}><i class="fal fa-rupee-sign"></i> 1100</span> 
  //           <span className={style.hmtrndcutprz}><i class="fal fa-rupee-sign"></i> 2200</span></div>
  //         </Item>

  //         <Item>
  //           <div className="divimg">
  //             <img className={style.browsimg} src="https://img.faballey.com/images/product/DRS04632Z/1.JPG" alt="Appartment" />
  //           </div>
  //           <div><p className={style.hmtrnditemNm_p}>Navy Solid Belted A-Line Dress</p>
  //           <span className={style.hmtrnditemNm_span}><i class="fal fa-rupee-sign"></i> 1100</span> 
  //           <span className={style.hmtrndcutprz}><i class="fal fa-rupee-sign"></i> 2200</span></div>
  //         </Item>

  //         <Item>
  //           <div className="divimg">
  //             <img className={style.browsimg} src="https://img.faballey.com/images/product/DRS04632Z/1.JPG" alt="Appartment" />
  //           </div>
  //           <div><p className={style.hmtrnditemNm_p}>Navy Solid Belted A-Line Dress</p>
  //           <span className={style.hmtrnditemNm_span}><i class="fal fa-rupee-sign"></i> 1100</span> 
  //           <span className={style.hmtrndcutprz}><i class="fal fa-rupee-sign"></i> 2200</span></div>
  //         </Item>

  //         <Item>
  //           <div className="divimg">
  //             <img className={style.browsimg} src="https://img.faballey.com/images/product/DRS04632Z/1.JPG" alt="Appartment" />
  //           </div>
  //           <div><p className={style.hmtrnditemNm_p}>Navy Solid Belted A-Line Dress</p>
  //           <span className={style.hmtrnditemNm_span}><i class="fal fa-rupee-sign"></i> 1100</span> 
  //           <span className={style.hmtrndcutprz}><i class="fal fa-rupee-sign"></i> 2200</span></div>
  //         </Item>

  //         <Item>
  //           <div className="divimg">
  //             <img className={style.browsimg} src="https://img.faballey.com/images/product/DRS04632Z/1.JPG" alt="Appartment" />
  //           </div>
  //           <div><p className={style.hmtrnditemNm_p}>Navy Solid Belted A-Line Dress</p>
  //           <span className={style.hmtrnditemNm_span}><i class="fal fa-rupee-sign"></i> 1100</span> 
  //           <span className={style.hmtrndcutprz}><i class="fal fa-rupee-sign"></i> 2200</span></div>
  //         </Item>

  //         <Item>
  //           <div className="divimg">
  //             <img className={style.browsimg} src="https://img.faballey.com/images/product/DRS04632Z/1.JPG" alt="Appartment" />
  //           </div>
  //           <div><p className={style.hmtrnditemNm_p}>Navy Solid Belted A-Line Dress</p>
  //           <span className={style.hmtrnditemNm_span}><i class="fal fa-rupee-sign"></i> 1100</span> 
  //           <span className={style.hmtrndcutprz}><i class="fal fa-rupee-sign"></i> 2200</span></div>
  //         </Item>

  //         <Item>
  //           <div className="divimg">
  //             <img className={style.browsimg} src="https://img.faballey.com/images/product/DRS04632Z/1.JPG" alt="Appartment" />
  //           </div>
  //           <div><p className={style.hmtrnditemNm_p}>Navy Solid Belted A-Line Dress</p>
  //           <span className={style.hmtrnditemNm_span}><i class="fal fa-rupee-sign"></i> 1100</span> 
  //           <span className={style.hmtrndcutprz}><i class="fal fa-rupee-sign"></i> 2200</span></div>
  //         </Item>

  //         <Item>
  //           <div className="divimg">
  //             <img className={style.browsimg} src="https://img.faballey.com/images/product/DRS04632Z/1.JPG" alt="Appartment" />
  //           </div>
  //           <div><p className={style.hmtrnditemNm_p}>Navy Solid Belted A-Line Dress</p>
  //           <span className={style.hmtrnditemNm_span}><i class="fal fa-rupee-sign"></i> 1100</span> 
  //           <span className={style.hmtrndcutprz}><i class="fal fa-rupee-sign"></i> 2200</span></div>
  //         </Item>
  //       </Carousel>
  //     </div>

  //     <div></div>
  //   </div>
  // </div>
  );
}

export  default SmallSlider ;
