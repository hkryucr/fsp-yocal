import BizCarouselGalleryCell from 'js/components/biz/biz-carousel-gallery-cell';
import React from 'react';
import 'css/components/biz/biz_carousel.css';
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

    render() {
        let photoDiv = null;
        const curBusiness = this.props.businesses[this.props.curBusinessId];
        photoDiv = curBusiness["photoUrls"].map((num, idx) => {
            return <BizCarouselGalleryCell key={idx} photoUrl={num.photoUrl} />
        });

        return (
            <div className="biz-carousel">
                <div className="biz-carousel-container">
                    <div className="biz-carousel-gallery">
                        {photoDiv}
                    </div>
                </div>
            </div>
        )
    }
}

export default BizCarousel;