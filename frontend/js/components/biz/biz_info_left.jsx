import React from 'react';
import 'css/components/biz/biz_info_left.css'
import BizInfoLeftHeader from 'js/components/biz/biz_info_left_header';
import BizInfoLeftLocationHours from 'js/components/biz/biz_info_left_location_hours';
import BizInfoLeftReviews from 'js/components/biz/biz_info_left_reviews';

class BizInfoLeft extends React.Component {
    render() {
        return (
            <div className="biz-info-left">
                <div className="biz-info-left-container">
                    <BizInfoLeftHeader />
                    <BizInfoLeftLocationHours />
                    <BizInfoLeftReviews />
                </div>
            </div>
        )
    }
}

export default BizInfoLeft;
