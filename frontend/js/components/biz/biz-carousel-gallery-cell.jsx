import React from 'react';

const BizCarouselGalleryCell = (props)=>{
    const srcLink = props.photoUrl;

    return (
        <div className="biz-carousel-gallery-cell">
            <img src={srcLink} />
        </div>
    )
}

export default BizCarouselGalleryCell;
