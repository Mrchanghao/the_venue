import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// resource 
import image_one from '../../resources/images/spectrum2017_1.jpg';
import image_two from '../../resources/images/spectrum2017_2.jpg';
import image_three from '../../resources/images/spectrum2017_3.jpg';


const Carousel = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
    }

    return (
        <div
        className='carousel_wrapper'
        style={{
            height: `${window.innerHeight}px`,
            overflow: 'hidden'
        }}
        >
            <Slider {...settings}>
                <div>
                    <div className='carousel_image'
                        style={{
                            background: `url(${image_one})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>
                <div>
                <div className='carousel_image'
                        style={{
                            background: `url(${image_two})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>
                <div>
                <div className='carousel_image'
                        style={{
                            background: `url(${image_three})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel;