import React from 'react'
import './Carousel.css'

function ContentCarousel(props) {
    return (
        <div>
             <div style={{width: 250}}>
                <img src={props.image} alt="placeholder" style={{width: '100%'}} />
                <div>
                    <p className="hmtrnditemNm_p">{props.name}</p>
                    <span className="hmtrnditemNm_span"><i class="fas fa-rupee-sign"></i>{props.val}  <span className="hmtrndcutprz"><i class="fas fa-rupee-sign"></i>{props.rate}</span></span>              
                </div>
            </div>
        </div>
    )
}

export default ContentCarousel
