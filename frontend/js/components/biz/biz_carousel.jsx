import React from 'react';
import 'css/components/biz/biz_carousel.css';
import BizCarouselGalleryCell from 'js/components/biz/biz-carousel-gallery-cell';
import 'css/core/flickity.css';

class BizCarousel extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        $('.biz-carousel-gallery').flickity({
            pageDots: false,
            wrapAround: true,
            autoPlay: 3000
        });
    }

    render(){
        return(
            <div className="biz-carousel">
                <div className="biz-carousel-container">
                    <div className="biz-carousel-gallery">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, idx) => {
                            return <BizCarouselGalleryCell key={idx} srcLink={num} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default BizCarousel;