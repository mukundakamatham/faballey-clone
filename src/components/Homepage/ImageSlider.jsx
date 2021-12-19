import style from './ImageSlider.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import {useState} from 'react'
// import Slider  from './Carosal/Slider'
// import Slider2 from './Carosal/Slider2'

const ImageSlider = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <div className={style.fullpage}>
      <Carousel>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src="https://img.faballey.com/images/banner/7ecf3137-39c5-4812-a4f0-40fe5ba45696.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src="https://img.faballey.com/images/banner/63082a22-000e-4d9f-af97-33dc301822fd.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.faballey.com/images/banner/07c0d1c7-d6e8-4315-976a-e3485e005555.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    </div>
    <div>

      <div className={style.contlen}>
        <img
          src="https://img.faballey.com/images/banner/41f44d87-46b6-44e9-91e7-0b32ae7be97c.gif"
          alt=""
          className={style.homeBigimg}
        />
      </div>

      <div className={style.contname}>
        <h3 className={style.hmTitle}>WHAT WE'RE CRUSHING ON</h3>
      </div>

      <div className={style.tribox}>
        <div>
          <img
            src="https://img.faballey.com/images/banner/e53b9087-b52d-44a4-8995-cb8d573ba794.jpg"
            alt=""
            className={style.tribox_img}
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/979c00cb-86e0-44a8-876e-bb3fa2d21400.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/3ed5789c-7995-4c13-a8aa-bcf33a0d76d3.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
      </div>

      <div className={style.contname}>
        <h3 className={style.hmTitle}>HOT RIGHT NOW</h3>
      </div>

      <div>
        <img
          src="https://img.faballey.com/images/banner/179f41c1-bad0-48d9-b586-95e3eccbd371.jpg"
          alt=""
          className={style.homeBigimg}
        />
      </div>

      <div className={style.contname}>
        <h3 className={style.hmTitle}>SIZZLING & SPANKIN' NEW</h3>
      </div>

      <div>
        <img
          src="https://img.faballey.com/images/banner/6aac31b1-98ef-4dca-beb2-aac2ca86a0da.jpg"
          alt=""
          className={style.homeBigimg}
        />
      </div>

      <div>
        {/* <Slider/> */}
      </div>

      <div className={style.contname}>
        <h3 className={style.hmTitle}>DEALS YOU DON'T WANT TO MISS</h3>
      </div>

      <div className={style.quintuple}>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/5ecda8b5-92ea-4712-a0c8-89a417907b5d.jpg"
            alt=""
            className={style.tribox_img}
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/fc4c38ac-0793-45ac-8b5e-41010ae7fe8d.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/caf08936-d568-404c-a6d6-02744d16cd55.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/a0d6c98a-5c50-4a6d-9340-289d15f69dd2.jpg"
            alt=""
            className={style.tribox_img}
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/9279cc09-ec99-4be5-945c-9f407c1b8505.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/8334e57f-7a8d-4288-a3dc-1b7c2d288772.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
      </div>

      <div className={style.contname}>
        <h3 className={style.hmTitle}>IN THE SPOTLIGHT</h3>
      </div>

      <div className={style.quintuple}>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/0db6120c-3604-4d92-9124-f067e15a13bb.jpg"
            alt=""
            className={style.tribox_img}
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/11272ee9-3e73-426c-a3f8-d9f3d7b1002f.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/3dd9afaf-c641-4480-a4fe-77e17e167104.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/f816c5e0-e7f4-4388-9775-08140c6bd2e4.jpg"
            alt=""
            className={style.tribox_img}
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/3ed182aa-4783-4c1c-8edf-99e0ea72ed5b.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/ffa9ac52-8505-4d38-9285-c94e1766f85a.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
       
      </div>

      <div className={style.contname}>
        <h4 className={style.hmTitle}>EXPLORE WHAT OUR #ALLEYGALS ARE WEARING RIGHT NOW</h4>
      </div>
      
      {/* <h1>Need Carousel here (Which needs hover effects)</h1> */}


      <div>
        <img
          src="https://img.faballey.com/images/banner/48840ce2-2c6f-4acb-b609-9cf16a182a41.jpg"
          alt=""
          className={style.homeBigimg}
        />
      </div>

      <div className={style.contname}>
        <h3 className={style.hmTitle}>RECOMMENDED FOR YOU</h3>
      </div>

      <div> 
        {/* <Slider2/> */}
      </div>

      <div className={style.contname}>
        <h3 className={style.hmTitle}>SHOP MY CART</h3>
      </div>

      <div className={style.contname}>
            <img src= "https://img.faballey.com/images/product/SWT00114Z/1.JPG" alt=""/>
            <div>
                    <p className={style.hmtrnditemNm_p}>Mustard Ruffled Straight Fit ...</p>
                    <span className={style.hmtrnditemNm_span}><i class="fas fa-rupee-sign"></i> 1560 <span className={style.hmtrndcutprz}><i class="fas fa-rupee-sign"></i>1950</span></span>              
                </div>
            <div>

            </div>
      </div>

      <div className={style.double}>
           <div>
           <img className={style.lazy_img} src="https://img.faballey.com/images/banner/28fa85e0-9503-487d-bb55-c7cb65e490d7.jpg" data-original="https://img.faballey.com/images/banner/28fa85e0-9503-487d-bb55-c7cb65e490d7.jpg" alt="Video" data-video="https://www.youtube.com/embed/PHraULUl-7Q" />
           </div>

           <div>
           <img className={style.lazy_img} src="https://img.faballey.com/images/banner/e9d385f2-096a-4121-871a-79b361e08d09.jpg" data-original="https://img.faballey.com/images/banner/e9d385f2-096a-4121-871a-79b361e08d09.jpg" alt="Video" data-video="https://www.youtube.com/embed/6BVvZYFmU5Q" />
           </div>
           
      </div>
      <div className={style.double_si}>
           <div className={style.div_mar}>
           <img className={style.lazy_img} src="https://img.faballey.com/images/banner/3ee89b13-ce33-4826-82b4-58ac74c33ea3.jpg" data-original="https://img.faballey.com/images/banner/3ee89b13-ce33-4826-82b4-58ac74c33ea3.jpg" alt="Video" data-video="https://www.youtube.com/embed/FDiTQkXHO64" />
           </div>

           <div className={style.contname}>
               <h4 className={style.videoCnt}> FABALLEY PARTY '21</h4>
               <span className={style.videoCnt_span}></span>
               <div className={style.tft_lft}>
               <p className={style.videoCnt_p}>As the year ends and we strut into the holiday season, it’s time to dress up and make up for all the cheer we missed last year. Presenting our Party ’21 edit - stellar cuts with dashes of glitter, dollops of shine, and a whole lot of extraness to rule the night! Here’s your cue to turn on the party mood, coz we’ve got fits that will get you to groove!</p>
               </div>
              
              <button className={style.videoCnt_bbttn}>Shop The Collection</button>
  
           </div>
           </div>


      <div className={style.contname}>
        <h3 className={style.hmTitle}>EXPLORE MORE</h3>
        <p className={style.bestselrTitle}>Invest in trends you'll wear on repeat</p>
      </div>

      <div className={style.quadruple}> 
      <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/a604ee66-197e-46b3-9e0d-50346d7d67e4.jpg"
            alt=""
            className={style.tribox_img}
          />{' '}
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/890a0ce2-6c59-4f3c-b46f-bdf801af6437.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/a39b2fb9-a162-4bc8-a72e-39fc321ac6bd.jpg"
            alt=""
            className={style.tribox_img}
          />
        </div>
        <div>
          {' '}
          <img
            src="https://img.faballey.com/images/banner/2b45bef5-a565-4a0f-80ab-338b8eeb3f90.jpg"
            alt=""
            className={style.tribox_img}
          />{' '}
        </div>
      </div>

    </div>
    </div>
  )
}

export default ImageSlider
