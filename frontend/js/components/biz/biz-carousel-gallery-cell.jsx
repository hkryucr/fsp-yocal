import React from 'react';

const BizCarouselGalleryCell = (props)=>{
    const srcLink = `/assets/carousel-${props.srcLink}.jpg`
    return (
        <div className="biz-carousel-gallery-cell">
            <img src={srcLink} />
        </div>
    )
}

export default BizCarouselGalleryCell;