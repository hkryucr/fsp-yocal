import React from 'react';
import BizReviews from 'js/components/biz/biz_reviews';
import 'css/components/biz/biz_info_left_reviews.css';
import 'css/components/biz/biz_reviews.css';

class BizInfoLeftReviews extends React.Component {
    render() {
        
        return (
            <div className="biz-reviews">
                <div className="biz-reviews-container">
                    <div className="biz-sub-title-wrapper">
                        <div className="biz-sub-title">
                            Recommended Reviews
                        </div>
                    </div>
                    <div className="biz-reviews-layout">
                        <BizReviews/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizInfoLeftReviews;
