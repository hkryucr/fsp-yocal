import React from 'react';
import 'css/components/biz/biz_carousel.css';
import BizCarouselGalleryCell from 'js/components/biz/biz-carousel-gallery-cell';
class BizCarousel extends React.Component{
    render(){
        return(
            <div className="biz-carousel">
                <div className="biz-carousel-container">
                    <div className="biz-carousel-gallery" data-flickity='{ "wrapAround": true, "autoPlay": 3000 }'>
                        {[1,2,3,4,5,6,7,8,9].map((num, idx)=>{
                            return <BizCarouselGalleryCell key = {idx} srcLink = {num}/>      
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default BizCarousel;