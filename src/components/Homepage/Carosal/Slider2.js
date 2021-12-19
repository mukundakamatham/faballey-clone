import React from 'react'
import Carousel from "./Carousel"
import ContentCarousel from './ContentCarousel'

function Slider2() {
    return (
        <div style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        <Carousel
            show={6}
        >
            <div>
               <ContentCarousel image="https://img.faballey.com/Images/Product/DRS03366Z/1.jpg" 
               name="Blue Elasticated High Waist J..."
               val=" 900"
               rate="1200"/>
            </div>

            <div>
               <ContentCarousel image="https://img.faballey.com/Images/Product/DRS03291Z/1.jpg" 
               name="Blue Elasticated High Waist J..."
               val=" 900"
               rate="1200"/>
            </div>

            <div>
               <ContentCarousel image="https://img.faballey.com/Images/Product/DRS03143Z/1.jpg" 
               name="Blue Elasticated High Waist J..."
               val=" 900"
               rate="1200"/>
            </div>

            <div>
               <ContentCarousel image="https://img.faballey.com/Images/Product/TOP04469Z/1.jpg" 
               name="Blue Elasticated High Waist J..."
               val=" 900"
               rate="1200"/>
            </div>

            <div>
               <ContentCarousel image="https://img.faballey.com/Images/Product/TOP04294Z/1.jpg" 
               name="Blue Elasticated High Waist J..."
               val=" 900"
               rate="1200"/>
            </div>

            <div>
               <ContentCarousel image="https://img.faballey.com/Images/Product/DRS03087Z/1.jpg" 
               name="Blue Elasticated High Waist J..."
               val=" 900"
               rate="1200"/>
            </div>

            <div>
               <ContentCarousel image="https://img.faballey.com/Images/Product/TOP04519Z/1.jpg" 
               name="Blue Elasticated High Waist J..."
               val=" 900"
               rate="1200"/>
            </div>

            <div>
               <ContentCarousel image="https://img.faballey.com/Images/Product/TOP04582Z/1.jpg" 
               name="Blue Elasticated High Waist J..."
               val=" 900"
               rate="1200"/>
            </div>

            <div>
               <ContentCarousel image="https://img.faballey.com/Images/Product/DRS03285Z/1.jpg" 
               name="Blue Elasticated High Waist J..."
               val=" 900"
               rate="1200"/>
            </div>
           
        </Carousel>
    </div>
    )
}

export default Slider2
