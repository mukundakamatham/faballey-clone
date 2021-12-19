import Carousel from "./Carousel"
import ContentCarousel from './ContentCarousel'

const Slider = () => {
    return (
        <div style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <Carousel
                show={6}
            >
                <div>
                   <ContentCarousel image="https://img.faballey.com/images/product/BOT00591Z/1.JPG" 
                   name="Blue Elasticated High Waist J..."
                   val=" 900"
                   rate="1200"/>
                </div>

                <div>
                   <ContentCarousel image="https://img.faballey.com/images/product/TOP04962Z/1.JPG" 
                   name="Blue Elasticated High Waist J..."
                   val=" 900"
                   rate="1200"/>
                </div>

                <div>
                   <ContentCarousel image="https://img.faballey.com/images/product/DRS04577Z/1.JPG" 
                   name="Blue Elasticated High Waist J..."
                   val=" 900"
                   rate="1200"/>
                </div>

                <div>
                   <ContentCarousel image="https://img.faballey.com/images/product/DRS04652Z/1.JPG" 
                   name="Blue Elasticated High Waist J..."
                   val=" 900"
                   rate="1200"/>
                </div>

                <div>
                   <ContentCarousel image="https://img.faballey.com/images/product/TOP05266Z/1.JPG" 
                   name="Blue Elasticated High Waist J..."
                   val=" 900"
                   rate="1200"/>
                </div>

                <div>
                   <ContentCarousel image="https://img.faballey.com/images/product/DRS04147Z/1.JPG" 
                   name="Blue Elasticated High Waist J..."
                   val=" 900"
                   rate="1200"/>
                </div>

                <div>
                   <ContentCarousel image="https://img.faballey.com/images/product/TOP05524Z/1.JPG" 
                   name="Blue Elasticated High Waist J..."
                   val=" 900"
                   rate="1200"/>
                </div>

                <div>
                   <ContentCarousel image="https://img.faballey.com/images/product/DRS04633Z/1.JPG" 
                   name="Blue Elasticated High Waist J..."
                   val=" 900"
                   rate="1200"/>
                </div>

                <div>
                   <ContentCarousel image="https://img.faballey.com/images/product/DRS04473Z/1.JPG" 
                   name="Blue Elasticated High Waist J..."
                   val=" 900"
                   rate="1200"/>
                </div>
               
            </Carousel>
        </div>
    )
}

export default Slider